var express = require('express');
var router = express.Router();
const {Jingle} = require('../db/models');

const asyncHandler = (handler) => {
  return (req, res, next) => {
      return handler(req, res, next).catch(next);
  };
};

router.get('/', asyncHandler(async(req, res) => {
  const jingles = await Jingle.findAll()
  console.log(jingles)
  const { image, name, artist, avgRating} = req.body;
  res.render('explore', {title: 'explore', jingles })
}))

module.exports = router;
