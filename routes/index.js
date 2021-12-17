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

  res.render('explore', {title: 'explore', jingles })


}))

module.exports = router;
