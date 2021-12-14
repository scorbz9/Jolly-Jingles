var express = require('express');
var router = express.Router();
const { csrfProtection, asyncHandler } = require('./utils');
const db = require('../db/models')
const { check, validationResult } = require('express-validator')
const bcrypt = require('bcryptjs')

/* GET /sign-up page */
router.get('/sign-up', csrfProtection, (req, res, next) => {
  res.render('user-sign-up', { csrfToken: req.csrfToken(), title: 'Sign up' } )
});


const signUpValidators = [
  check('name')
    .exists({ checkFalsy: true })
    .withMessage('Please provide a name.')
    .isLength({ max: 50 })
    .withMessage('Name must be less than 50 characters.'),
  check('email')
    .exists({ checkFalsy: true })
    .withMessage('Please provide a email.')
    .isEmail()
    .withMessage("Please provide a valid email address.")
    .isLength({ max: 255 })
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

    // TODO - Redirect to user page (redirect to / temporarily)
    res.redirect('/')
  } else {
    const errors = validationErrors.array().map(error => error.msg)
    res.render('user-sign-up', {
      csrfToken: req.csrfToken(),
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

/* POST /sign-in - Perform login */
router.post('/sign-in', csrfProtection, async (req, res, next) => {

});

/* POST /sign-out - Perform logout */
router.post('/sign-out', async (req, res, next) => {

});



module.exports = router;
