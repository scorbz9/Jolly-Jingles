var express = require('express');
var router = express.Router();

/* GET /sign-up page */
router.get('/sign-up', (req, res, next) => {

});

/* POST /sign-up - Register user */
router.post('/sign-up', async (req, res, next) => {

});

/* GET /login page */
router.get('/login', async (req, res, next) => {
  res.send('respond with a resource');
});

/* POST /login - Perform login */
router.post('/login', async (req, res, next) => {

});

/* POST /logout - Perform logout */
router.post('/logout', async (req, res, next) => {

});



module.exports = router;
