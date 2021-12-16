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

  // TODO - Get user's default 'My Jingles' Jinglelist - below is placeholder listId
  const lists = await db.List.findAll({ where: { userId }})
  // console.log(lists)

  const listId = lists.map(list => list.id)[1]
  // console.log(listId)

  //get jingleList with jingleId
const jingleList = await db.Jinglelist.findAll({ where: { listId }});


  console.log(jingleList)



  //array of jingles
  const jingles = await db.Jinglelist.findAll({
    where: { listId },
    include: db.Jingles
  });


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


  // });

  res.render('user-jinglelists.pug', {

    csrfToken: req.csrfToken(),
    title: 'My Jingles',
    user,
    // name
  });

}));

const addJingleListValidator =
  check('listName')
    .exists({ checkFalsy: true })


// POST /users/:userId/jingleLists - add a new jingleList to jingleLists
router.post('/:userId(\\d+)/jingleLists', addJingleListValidator, asyncHandler(async (req, res, next) => {
  // Update below based on view implementation
  const { name } = req.body
  const userId = req.params.userId;
  console.log(name)

  const validationErrors = validationResult(req)

  if (!validationErrors.isEmpty()) {
    const newJingleList = await db.List.create({
      name,
      userId
    });

    const updatedJingleLists = await db.List.findAll( { where: { userId } } );

    res.send('temp1')
    // res.render('jinglelists', { token: csrfToken(), updatedJingleLists })
  } else {
    // alert('Please provide a name for the new list.')
    res.send('temp2')
  }
}));


// GET /users/:userId/jingleLists/:jingleListId - Display information for a particular jingleList
router.get('/:userId(\\d+)/jingleLists/:jingleListId(\\d+)', csrfProtection, asyncHandler(async (req, res, next) => {
  console.log('placeholder1')
}));

// DELETE /users/:userId/jingleLists/:jingleListId - Delete a particular jingleList
router.delete('/:userId(\\d+)/jingleLists/:jingleListId(\\d+)', asyncHandler(async (req, res, next) => {
  console.log(req.params.jingleListId)
  const jingleListId = req.params.jingleListId;

  // Below needs testing still
  const listToDestroy = await db.JingleList.findByPk(jingleListId, {
    include: [
      db.Jingle,
      db.List,
    ]
  })

  await listToDestroy.destroy();
}));

// DELETE /users/:userId/jingleLists/:jingleListId/jingles/:jingleId - Remove a jingle from a particular jingle list
router.delete('/:userId(\\d+)/jingleLists/:jingleListId(\\d+)/jingles/:jingleId(\\d+)', asyncHandler(async (req, res, next) => {

}));

module.exports = router;
