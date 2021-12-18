var express = require('express');
var router = express.Router();
const { csrfProtection, asyncHandler } = require('./utils');
const db = require('../db/models')
const { check, validationResult } = require('express-validator')
const bcrypt = require('bcryptjs')
const { loginUser, logoutUser, demoUser, restoreUser } = require('../auth');
const jingle = require('../db/models/jingle');
const { user } = require('pg/lib/defaults');

/* GET /sign-up page */
router.get('/sign-up', csrfProtection, asyncHandler(async (req, res, next) => {

  const user = await db.User.build({

  })
  res.render('user-sign-up', { csrfToken: req.csrfToken(), title: 'Sign up', user })
}));


const signUpValidators = [
  check('name')
    .exists({ checkFalsy: true })
    .withMessage('Please provide a name.')
    .isLength({ max: 50 })
    .withMessage('Name must be less than 50 characters.')
    .custom((value) => {
      return db.User.findOne({ where: { name: value } })
        .then((user) => {
          if (user) {
            return Promise.reject('The provided name is already in use by another account');
          }
        });
    }),
  check('email')
    .exists({ checkFalsy: true })
    .withMessage('Please provide an email.')
    .isLength({ max: 255 })
    // TODO - Figure out how to make only 1 error message appear for invalid email when submitted empty email field.
    .isEmail()
    .withMessage("Please provide a valid email address.")
    .custom((value) => {
      return db.User.findOne({ where: { email: value } })
        .then((user) => {
          if (user) {
            return Promise.reject('The provided Email Address is already in use by another account');
          }
        });
    }),
  check('password')
    .exists({ checkFalsy: true })
    .withMessage("Please provide a password.")
    .isLength({ max: 50 })
    .withMessage("Password must be less than 50 characters.")
    .matches(/^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*])/, 'g')
    .withMessage('Password must contain at least 1 lowercase letter, uppercase letter, number, and special character (i.e. "!@#$%^&*")')
];

/* POST /sign-up - Register user */
router.post('/sign-up', csrfProtection, signUpValidators, asyncHandler(async (req, res, next) => {
  const { name, email, password } = req.body;

  const validationErrors = validationResult(req);

  const user = await db.User.build({
    name,
    email,
    defaultList: `${name}'s Jingles`
  });

  if (validationErrors.isEmpty()) {
    const hashedPassword = await bcrypt.hash(password, 10)
    user.hashedPassword = hashedPassword;

    await user.save();
    loginUser(req, res, user);

    const userId = req.session.auth.userId

    // Create default list in database
    await db.List.create({
      name: `${name}'s Jingles`,
      userId
    });

    // TODO - Redirect to user page (redirect to / temporarily)
    res.redirect(`/`)
  } else {
    const errors = validationErrors.array().map(error => error.msg)
    res.render('user-sign-up', {
      csrfToken: req.csrfToken(),
      user,
      errors,
      title: 'Sign up'
    })

  }

}));

/* GET /sign-in page */
router.get('/sign-in', csrfProtection, async (req, res, next) => {
  res.render('user-sign-in', {
    csrfToken: req.csrfToken(),
    title: 'Sign in',
  })
});

const signInValidators = [
  check('email')
    .exists({ checkFalsy: true })
    .withMessage('Please provide an email.')
    .isLength({ max: 255 })
    // TODO - Figure out how to make only 1 error message appear for invalid email when submitted empty email field.
    .isEmail()
    .withMessage("Please provide a valid email address."),
  check('password')
    .exists({ checkFalsy: true })
    .withMessage("Please provide a password.")
    .isLength({ max: 50 })
    .withMessage("Password must be less than 50 characters.")
];


/* POST /sign-in - Perform login */
router.post('/sign-in', csrfProtection, signInValidators, asyncHandler(async (req, res, next) => {
  const { email, password } = req.body;
  // console.log('route working?')
  const validationErrors = validationResult(req);
  let errors = [];

  if (validationErrors.isEmpty()) {
    const user = await db.User.findOne({ where: { email } })

    if (user !== null) {
      const passwordMatch = await bcrypt.compare(password, user.hashedPassword.toString())

      if (passwordMatch) {
        loginUser(req, res, user)
        return res.redirect('/')
      }
    }
    errors.push("Sign in attempt failed.")

  } else {
    errors = validationErrors.array().map(error => error.msg)
  }

  res.render('user-sign-in', {
    csrfToken: req.csrfToken(),
    errors,
    email,
    title: 'Sign in'
  })
}));

/* POST /sign-out - Perform logout */
router.post('/sign-out', async (req, res, next) => {
  logoutUser(req, res);
  res.redirect('/')
});

/* GET /users/:userId/jingleLists - Get 'myJingles' page */
router.get('/:userId(\\d+)/jingleLists', csrfProtection, asyncHandler(async (req, res, next) => {
  const userId = parseInt(req.params.userId, 10);

  const user = await db.User.findByPk(userId);
  const defaultListName = user.defaultList;

  const lists = await db.List.findAll({ where: { userId } })

  const list = await db.List.findOne({ where: { name: defaultListName } })
  const listId = list.id;

  const jingles = await db.Jinglelist.findAll({

    include: db.Jingle,
    where: {
      listId,
    },
  });


  const jinglesFromAList = [];

  jingles.map(async (jingle) => {
    jinglesFromAList.push(jingle.Jingle)
  })

  res.render('user-jinglelists.pug', {
    csrfToken: req.csrfToken(),
    title: 'My Jingles',
    user,
    userId,
    jinglesFromAList,
    lists
  });
}));


// TODO - Add validation to prevent users from adding lists with name format `${name}'s Jingles`
const addJingleListValidator = [
  check('name')
    .exists({ checkFalsy: true })
    .withMessage("Please provide a name for the list.")
    .isLength({ max: 40 })
    .withMessage("List name must be less than 50 characters.")
    .custom((value) => {
      return db.List.findOne({ where: { name: value } })
        .then((user) => {
          if (user) {
            return Promise.reject('A list with that name already exists.');
          }
        });
    }),
]

// POST /users/:userId/jingleLists - add a new jingleList to jingleLists
router.post('/:userId(\\d+)/jingleLists', csrfProtection, addJingleListValidator, asyncHandler(async (req, res, next) => {

  const { name } = req.body;
  const userId = req.session.auth.userId

  const user = await db.User.findByPk(userId);
  const defaultListName = user.defaultList;

  const list = await db.List.findOne({ where: { name: defaultListName } })
  const listId = list.id;

  const jingles = await db.Jinglelist.findAll({

    include: db.Jingle,
    where: {
      listId,
    },
  });

  const jinglesFromAList = [];

  jingles.map(async (jingle) => {
    jinglesFromAList.push(jingle.Jingle)
  })

  const validationErrors = validationResult(req);

  if (validationErrors.isEmpty()) {

    await db.List.create({
      name,
      userId
    });

    const lists = await db.List.findAll({ where: { userId } });

    res.render('user-jinglelists.pug', {
      csrfToken: req.csrfToken(),
      lists,
      userId,
      name,
      jinglesFromAList
    });

  } else {

    let addJingleListError = validationErrors.array().map(error => error.msg)

    const lists = await db.List.findAll({ where: { userId } });

    res.render('user-jinglelists.pug', {
      csrfToken: req.csrfToken(),
      lists,
      userId,
      addJingleListError,
      jinglesFromAList
    });

    addJingleListError = null;
  }
}));


// GET /users/:userId/jingleLists/:jingleListId - Display information for a particular jingleList
router.get('/:userId(\\d+)/jingleLists/:jingleListId(\\d+)', csrfProtection, asyncHandler(async (req, res, next) => {
  const listId = parseInt(req.params.jingleListId, 10);
  const userId = parseInt(req.params.userId, 10)

  const lists = await db.List.findAll({ where: { userId } })

  const jingles = await db.Jinglelist.findAll({

    include: db.Jingle,
    where: {
      listId,
    },
  });

  const jinglesFromAList = [];

  jingles.map(async (jingle) => {
    jinglesFromAList.push(jingle.Jingle)
  })

  res.render('user-jinglelists.pug', {
    csrfToken: req.csrfToken(),
    lists,
    userId,
    jinglesFromAList
  });
}));

// DELETE /users/:userId/jingleLists/:jingleListId - Delete a particular jingleList
router.post('/:userId(\\d+)/jingleLists/:jingleListId(\\d+)', csrfProtection, asyncHandler(async (req, res, next) => {
  const userId = req.params.userId;
  const listId = req.params.jingleListId;

  const jingleListsToDestroy = await db.Jinglelist.findAll({ where: { listId } });

  const listToDestroy = await db.List.findByPk(listId);

  jingleListsToDestroy.map(async jingleList => {
    await jingleList.destroy();
  });

  await listToDestroy.destroy();

  res.redirect(`/users/${userId}/jingleLists/`);
}));

// DELETE /users/:userId/jingleLists/:jingleListId/jingles/:jingleId - Remove a jingle from a particular jingle list
router.post('/:userId(\\d+)/jingleLists/:jingleListId(\\d+)/jingles/:jingleId(\\d+)', asyncHandler(async (req, res, next) => {
  const userId = req.params.userId;
  const listId = req.params.jingleListId;
  const jingleId = req.params.jingleId

  //delete jingle from jinglelist using userId and listId
  const jingleToDestroy = await db.Jinglelist.findOne({
    where: {
      jingleId,
      listId
    }
  })

  await jingleToDestroy.destroy();

  res.redirect(`/users/${userId}/jingleLists`);
}));

// ADD /users/:userId/jingleLists/:jingleListId/jingles/:jingleId - Add a jingle to a jingle list
router.post('/:userId(\\d+)/jingleLists/:jingleListId(\\d+)/:jingleId', csrfProtection, asyncHandler(async (req, res, next) => {
  const jingleId = req.params.jingleId;
  const listId = req.params.userId

  await db.Jinglelist.create({
    jingleId,
    listId
  })

  res.redirect(`/jingles/${jingleId}`);

}))

//DEMO /users/demo/sign-in - Sign-in butt for demo
router.post('/demo/sign-in', csrfProtection, signInValidators, asyncHandler(async (req, res, next) => {
  // only pushes in a user with the id of 3, which was hard coded in as the demo user: (May vary based on your database)
    demoUser(req, res)
    return res.redirect('/')
}));



module.exports = router;
