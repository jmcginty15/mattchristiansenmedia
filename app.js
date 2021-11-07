/** Express app for chess tournament organizer. */


const express = require('express');
const cors = require('cors');
const app = express();

app.use(cors({ origin: '*' }));

app.use(express.json());
// app.use(function (req, res, next) {
//     res.header('Access-Control-Allow-Origin', 'https://flexchess.surge.sh');
//     res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
//     next();
// });

const ExpressError = require('./expressError');
const datingRoutes = require('./routes/dating');

app.use('/dating', datingRoutes);

/** 404 handler */

app.use(function (req, res, next) {
    const err = new ExpressError('Not Found', 404);
    return next(err);
});


/** general error handler */

app.use(function (err, req, res, next) {
    res.status(err.status || 500);

    return res.json({
        error: err,
        message: err.message
    });
});

module.exports = app;
