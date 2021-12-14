var express = require('express');
const { idle_in_transaction_session_timeout } = require('pg/lib/defaults');
const db = require('../db/models');
var router = express.Router();
const { csrfProtection, asyncHandler } = require('./utils');


router.get('/:id(\\d+)', asyncHandler(async (req, res) => {
    console.log(req.params)
    const id = parseInt(req.params.id, 10);
    console.log(id)
    const jingle = await db.Jingle.findByPk(id);
    console.log(jingle.name);
    res.render('index', { title: "jingle", jingle})
  }));

module.exports = router;
