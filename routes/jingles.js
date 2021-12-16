var express = require('express');
const { idle_in_transaction_session_timeout } = require('pg/lib/defaults');
const db = require('../db/models');
var router = express.Router();
const { csrfProtection, asyncHandler } = require('./utils');

// to see the info page for a jingle
router.get('/:id(\\d+)', asyncHandler(async (req, res) => {
    // console.log(req.params)
    const id = parseInt(req.params.id, 10);
    // console.log(req.params.id)
    // console.log(id)
    const jingle = await db.Jingle.findByPk(id);

    // console.log(jingle)

    if (jingle) {
        // const { image, artist, name, lyrics, avgRating, description } = jingle;

    res.render('jingles-view', {title: jingle.name, jingle})
    } else {
        res.status(404)
        res.send('Page Not Found');
    }

  }));

// to get a review of a jingle
router.get('/:id(\\d+)/reviews', asyncHandler(async(req, res) => {
    res.send('Welcome to the reviews page.')
}));

// TO DO: post a review of a jingle
router.post('/:id(\\d+)/reviews', csrfProtection, asyncHandler(async(req, res) => {
    res.send('Welcome to the reviews page.')
}));

// to delete a reivew of a jingle
// TO DO: test
router.post('/:id(\\d+)/reviews/:id(\\d+)', csrfProtection, asyncHandler(async(req, res) => {
    const id = parseInt(req.params.id, 10);
    const review = await db.Review.findByPk(id);
    await review.destroy();
    res.redirect(`users/${user.id}`);
}));


module.exports = router;
