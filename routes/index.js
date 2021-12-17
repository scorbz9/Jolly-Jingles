var express = require('express');
var router = express.Router();
const db = require('../db/models');

const asyncHandler = (handler) => {
  return (req, res, next) => {
      return handler(req, res, next).catch(next);
  };
};

router.get('/', asyncHandler(async(req, res) => {
  // const jingles = await db.Jingle.findAll();
  
  // console.log(jingles)
  // // const reviews = await db.Review.findAll({ where: { jingles.id } })
  // // const sumOfreviews = await db.Review.sum('rating');
  // // const avgReviews = (sumOfreviews / reviews.length).toFixed(2);
  // // const { image, name, artist, avgRating, id} = req.body;
  // res.render('explore', {title: 'explore', jingles })

  const jingles = await db.Jingle.findAll();
  
  jingles.forEach(async(jingle) => {
    const reviews = await db.Review.findByPk(parseInt(jingle.id, 10));
    console.log(reviews.length)
    if(reviews) {
    const sumOfReviews = await db.Review.sum('rating', {where: jingle.id});
    const avgReviews = (sumOfReviews / reviews.length).toFixed(2);
    res.render('explore', {title: 'Explore', jingles, avgReviews})
    }
  })

  
  // console.log(jingles)
  // // const reviews = await db.Review.findAll({ where: { jingles.id } })
  // // const sumOfreviews = await db.Review.sum('rating');
  // // const avgReviews = (sumOfreviews / reviews.length).toFixed(2);
  // // const { image, name, artist, avgRating, id} = req.body;
  // res.render('explore', {title: 'explore', jingles, avgReviews})
}))

module.exports = router;
