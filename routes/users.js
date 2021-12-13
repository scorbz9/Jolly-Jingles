var express = require('express');
var router = express.Router();
const { csrfProtection, asyncHandler } = require('./utils');

/* GET /sign-up page */
router.get('/sign-up', csrfProtection, (req, res, next) => {
  res.render('user-sign-up', { csrfToken: req.csrfToken(), title: 'Sign up' } )
});

/* POST /sign-up - Register user */
router.post('/sign-up', csrfProtection, async (req, res, next) => {

});

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
