var express = require('express');
const { validationResult } = require('express-validator');
const { idle_in_transaction_session_timeout } = require('pg/lib/defaults');
const db = require('../db/models');
var router = express.Router();
const { csrfProtection, asyncHandler } = require('./utils');

// to see the info page for a jingle
router.get('/:id(\\d+)',  csrfProtection, asyncHandler(async (req, res) => {
    const id = parseInt(req.params.id, 10);
    const jingle = await db.Jingle.findByPk(id);

    // assigned jingleId = id to refer in future query:
    const jingleId = id

    if (jingle) {
    // const { image, artist, name, lyrics, avgRating, description } = jingle;

    // find all reviews where the jingleId matches
    const reviews = await db.Review.findAll({ where: { jingleId } })

    const sumOfReviews = await db.Review.sum('rating', {where: {jingleId}});
    const avgReviews = (sumOfReviews / reviews.length).toFixed(2);
    db.Jingle.update({avgRating: avgReviews}, {
        where: {
            id
        }
    })
    // const reviewRating = await db.Review.findAll(AVG('rating'))
    // const userId = req.session.auth.userId

    // Added this to fix an error that was being caused when an non logged in user tried to acces the jingle page, userId did nto exist.
    // so: userId = 0 will be a non null non user, and the list will be blank to avoid errors from the render.
    let userId = 0
    let lists = []
    if (req.session.auth) {
        userId = req.session.auth.userId
        lists = await db.List.findAll({ where: { userId } })
    }

    // const lists = await db.List.findAll({ where: { userId } })
    // Added reviews to render if a review exists [review exists if it has an associated jingleId]:
    res.render('jingles-view', {
        title: jingle.name,
        jingle,
        review: true,
        reviews,
        userId,
        lists,
        avgReviews,
        id,
        csrfToken: req.csrfToken(),
        view: "Jingle-info"
    })
    } else {
        res.status(404)
        res.send('Page Not Found');
    }

  }));

// to get a review of a jingle
router.get('/:id(\\d+)/reviews', csrfProtection, asyncHandler(async(req, res) => {
    const id = parseInt(req.params.id, 10);
    const jingle = await db.Jingle.findByPk(id);

    // Redirects a non logged in user if they click review, will probably change this later to throw an error/alert instead.
    if (!req.session.auth) {
        res.redirect('/users/sign-in')
    }

    if (jingle) {
        const { name, image, artist, jingleId} = jingle

        res.render('jingles-review', {
            id,
            title: 'Leave a Review!',
            name,
            image,
            artist,
            userId: req.session.auth.userId,
            csrfToken: req.csrfToken(),
            view: "Jingle-info"
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

    // ID of jingle being reviewd:
    jingleId = parseInt(jingleId, 10)

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

    let reviewId = parseInt(req.params.id, 10)

    const review = await db.Review.findByPk(reviewId)
    if (req.session.auth.userId === review.userId) {
        await review.destroy();
    }
    // retrieves the jingle ID to use for the redirect
    jingleId = review.jingleId

    res.redirect(`/jingles/${jingleId}`);

}));


module.exports = router;
