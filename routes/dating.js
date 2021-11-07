const express = require('express');
const DatingUser = require('../models/datingUser');

const ExpressError = require('../expressError');

const router = new express.Router();

router.get('/', async function (req, res, next) {
    try {
        const searchTerms = req.query;
        const users = await DatingUser.search(searchTerms);
        return res.json({ users: users });
    } catch (err) {
        return next(err);
    }
});

module.exports = router;