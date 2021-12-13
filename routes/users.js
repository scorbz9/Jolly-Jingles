var express = require('express');
var router = express.Router();
const { csrfProtection, asyncHandler } = require('./utils');

/* GET /sign-up page */
router.get('/sign-up', csrfProtection, (req, res, next) => {
  res.render('user-sign-up', { csrfToken: req.csrfToken(), title: 'Sign Up' } )
});

/* POST /sign-up - Register user */
router.post('/sign-up', csrfProtection, async (req, res, next) => {

});

/* GET /login page */
router.get('/login', csrfProtection, async (req, res, next) => {
  res.send('respond with a resource');
});

/* POST /login - Perform login */
router.post('/login', csrfProtection, async (req, res, next) => {

});

/* POST /logout - Perform logout */
router.post('/logout', async (req, res, next) => {

});



module.exports = router;
