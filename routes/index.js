var express = require('express');
var router = express.Router();
const db = require('../db/models');

const asyncHandler = (handler) => {
  return (req, res, next) => {
      return handler(req, res, next).catch(next);
  };
};

router.get('/', asyncHandler(async(req, res) => {
  const jingles = await db.Jingle.findAll();

  let loggedInUserId = null;
  let loggedInUser;

  if (req.session.auth) {
    loggedInUserId = req.session.auth.userId;
    loggedInUser = await db.User.findByPk(loggedInUserId)
  }

  res.render('explore', {
    title: 'Explore',
    jingles,
    loggedInUserId,
    loggedInUser,
    view: "Explore"
   })

}))

module.exports = router;
