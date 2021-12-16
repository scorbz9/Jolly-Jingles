var express = require('express');
const { validationResult } = require('express-validator');
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

    // console.log(jingle.id)
    // assigned jingleId = id to refer in future query:
    const jingleId = id

    if (jingle) {
        // const { image, artist, name, lyrics, avgRating, description } = jingle;

    // find all reviews where the jingleId matches
    const reviews = await db.Review.findAll({ where: { jingleId } })
    // console.log(JSON.stringify(reviews))
    // Added reviews to render if a review exists [review exists if it has an associated jingleId]:
    res.render('jingles-view', {title: jingle.name, jingle, review: true, reviews})
    } else {
        res.status(404)
        res.send('Page Not Found');
    }

  }));

// to get a review of a jingle
router.get('/:id(\\d+)/reviews', csrfProtection, asyncHandler(async(req, res) => {
    const id = parseInt(req.params.id, 10);
    const jingle = await db.Jingle.findByPk(id);


    if (jingle) {
        const { name, image, artist, jingleId} = jingle

        // console.log(jingle)
        res.render('jingles-review', {
            id,
            title: 'Leave a Review!',
            name,
            image,
            artist,
            userId: req.session.auth.userId,
            csrfToken: req.csrfToken(),

        })
    } else {
        res.status(404)
        res.send('Page not found')
    }

}));

// TO DO: post a review of a jingle
router.post('/:id(\\d+)/reviews', asyncHandler(async(req, res) => {
    // res.send('Welcome to the reviews page.')

    // will show the content of the review
    let { message, rating, jingleId, userId } = req.body;
    // console.log('test:', req.body.review)
    // ID of jingle being reviewd:
    jingleId = parseInt(jingleId, 10)
    // console.log('jingle id:', jingleId)

    const validationErrors = validationResult(req);
    if (validationErrors.isEmpty()) {
        await db.Review.create({
            message,
            rating,
            jingleId,
            userId: req.session.auth.userId
    });

    const reviews = await db.Review.findAll({ where: { jingleId }})
    res.redirect('/jingles/'+jingleId+'/')

    } else {
        res.send('error')
    }
}));

// to delete a reivew of a jingle
// TO DO: test
router.post('/:id(\\d+)/reviews/:id(\\d+)', asyncHandler(async(req, res) => {
    // this is fetching each review id!:
    // console.log(req.params.id)
    let reviewId = parseInt(req.params.id, 10)
    // console.log(reviewId)

    const review = await db.Review.findByPk(reviewId)
    if (req.session.auth.userId === review.userId) {
        // console.log('review to destroy: ', review)
        await review.destroy();
    }
    // retrieves the jingle ID to use for the redirect
    jingleId = review.jingleId

    res.redirect(`/jingles/${jingleId}`);

}));


module.exports = router;
