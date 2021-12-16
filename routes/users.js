var express = require('express');
var router = express.Router();
const { csrfProtection, asyncHandler } = require('./utils');
const db = require('../db/models')
const { check, validationResult } = require('express-validator')
const bcrypt = require('bcryptjs')
const { loginUser, logoutUser } = require('../auth');
const jingle = require('../db/models/jingle');

/* GET /sign-up page */
router.get('/sign-up', csrfProtection, asyncHandler( async (req, res, next) => {

  const user = await db.User.build({

  })
  res.render('user-sign-up', { csrfToken: req.csrfToken(), title: 'Sign up',  user } )
}));


const signUpValidators = [
  check('name')
    .exists({ checkFalsy: true })
    .withMessage('Please provide a name.')
    .isLength({ max: 50 })
    .withMessage('Name must be less than 50 characters.'),
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
    .withMessage('Password must contain at least 1 lowercase letter, uppercase letter, number, and special character (i.e. "!@#$%^&*")'),

];

/* POST /sign-up - Register user */
router.post('/sign-up', csrfProtection, signUpValidators, asyncHandler( async (req, res, next) => {
  const { name, email, password } = req.body;

  const validationErrors = validationResult(req);

  const user = await db.User.build({
    name,
    email
  });

  if (validationErrors.isEmpty()) {
    const hashedPassword = await bcrypt.hash(password, 10)
    user.hashedPassword = hashedPassword;

    await user.save();
    loginUser(req, res, user);
    // TODO - Redirect to user page (redirect to / temporarily)
    res.redirect('/')
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
    title: 'Sign in',
    csrfToken: req.csrfToken()
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
router.post('/sign-in', csrfProtection, signInValidators, asyncHandler( async (req, res, next) => {
  const { email, password } = req.body;

  const validationErrors = validationResult(req);
  let errors = [];

  if (validationErrors.isEmpty()) {
    const user = await db.User.findOne( { where: { email } } )

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
    errors,
    email,
    csrfToken: req.csrfToken(),
    title: 'Sign in'
  })
}));

/* POST /sign-out - Perform logout */
router.post('/sign-out', async (req, res, next) => {
  logoutUser(req, res);
  res.redirect('/')
});

// TODO - Below

/* GET /users/:userId/jingleLists - Get 'myJingles' page */
router.get('/:userId(\\d+)/jingleLists', csrfProtection, asyncHandler(async (req, res, next) => {
  const userId = req.params.userId;

  const user = await db.User.findByPk(userId);

<<<<<<< HEAD
  // TODO - Get user's default 'My Jingles' Jinglelist - below is placeholder listId
  const lists = await db.List.findAll({ where: { userId }})
  // console.log(lists)

  const listId = lists.map(list => list.id)[1]
  // console.log(listId)

  //get jingleList with jingleId
const jingleList = await db.Jinglelist.findAll({ where: { listId }});


  console.log(jingleList)

=======
  // More database configuration is required - need to add a marker to track which jinglelist is the user's default collection ('My Jingles')
  // TODO - Get user's default 'My Jingles' Jinglelist - below is placeholder listId
  const lists = await db.List.findAll({ where: { userId }})
  const listId = lists.map(list => list.id)[0]
>>>>>>> c374183aa0af55ff5330c5a39b421dfd8a72a100


  //array of jingles
  const jingles = await db.Jinglelist.findAll({
    where: { listId },
    include: db.Jingles
  });


<<<<<<< HEAD
// var artist = '';

  // for (let i = 0; i < jingles.length; i++) {
  //     artist += jingles[i].artist
  // }

  // jingles.forEach(async (jingle) => {
  //    const jingleId = jingle.jingleId;
  //    const single = await db.Jingle.findByPk(jingleId);

  //    var image = single.image
  //   //  var title = single.name
  //   //  var avgRating = single.avgRating
  //   //  var dateAdded = single.dateAdded
  //     console.log(single.artist)
=======
  jingles.forEach(async (jingle) => {
      // console.log(jingle.jingleId)
     const jingleId = jingle.jingleId;
     const single = await db.Jingle.findByPk(jingleId);
>>>>>>> c374183aa0af55ff5330c5a39b421dfd8a72a100


  // });

<<<<<<< HEAD
  res.render('user-jinglelists.pug', {

    csrfToken: req.csrfToken(),
    title: 'My Jingles',
    user,
    lists,
    jingles,
    userId
=======
       csrfToken: req.csrfToken(),
       title: 'My Jingles',
       user,
       jingles,
       jingleList,
       image
       // list
     });

>>>>>>> c374183aa0af55ff5330c5a39b421dfd8a72a100
  });

}));

const addJingleListValidator =
  check('name')
    .exists({ checkFalsy: true })


// POST /users/:userId/jingleLists - add a new jingleList to jingleLists
router.post('/:userId(\\d+)/jingleLists', csrfProtection, addJingleListValidator, asyncHandler(async (req, res, next) => {

  const { name } = req.body;
  const userId = parseInt(req.params.userId, 10);

  const validationErrors = validationResult(req);

  if (validationErrors.isEmpty()) {

    await db.List.create({
      name,
      userId
    });

    const lists = await db.List.findAll( { where: { userId } } );

    res.render('user-jinglelists.pug', {
      csrfToken: req.csrfToken(),
      lists,
      userId,
      name
    });

  } else {

    let addJingleListError = validationErrors.array().map(error => error.msg)[0]

    const lists = await db.List.findAll( { where: { userId } } );

    res.render('user-jinglelists.pug', {
      csrfToken: req.csrfToken(),
      lists,
      userId,
      addJingleListError
    });

    addJingleListError = null;
  }
}));


// GET /users/:userId/jingleLists/:jingleListId - Display information for a particular jingleList
router.get('/:userId(\\d+)/jingleLists/:jingleListId(\\d+)', csrfProtection, asyncHandler(async (req, res, next) => {

}));

// DELETE /users/:userId/jingleLists/:jingleListId - Delete a particular jingleList
router.post('/:userId(\\d+)/jingleLists/:jingleListId(\\d+)', csrfProtection, asyncHandler(async (req, res, next) => {
  const userId = req.params.userId;
  const listId = req.params.jingleListId;

  const jingleListsToDestroy = await db.Jinglelist.findAll( { where: { listId } } );

  const listToDestroy = await db.List.findByPk(listId);

  jingleListsToDestroy.map(async jingleList => {
    await jingleList.destroy();
  });

  await listToDestroy.destroy();

  res.redirect(`/users/${userId}/jingleLists/`);
}));

// DELETE /users/:userId/jingleLists/:jingleListId/jingles/:jingleId - Remove a jingle from a particular jingle list
router.delete('/:userId(\\d+)/jingleLists/:jingleListId(\\d+)/jingles/:jingleId(\\d+)', asyncHandler(async (req, res, next) => {

}));

module.exports = router;
