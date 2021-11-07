const axios = require('axios');
const { API_KEY, MEETUP_SHEET_ID } = require('../config');
const { checkMeetupMatch, calcAge } = require('../utils');
const ExpressError = require('../expressError');

// Entry in an individual tournament
class DatingUser {
    static async search({ name = null, location = null }) {
        const res = await axios.get(`https://sheets.googleapis.com/v4/spreadsheets/${MEETUP_SHEET_ID}/values/Form+Responses+1!A:F?key=${API_KEY}`);
        const values = res.data.values.slice(2);

        const terms = {};
        if (name) terms.name = name;
        if (location) terms.location = location;

        const users = [];
        for (let row of values) if (checkMeetupMatch(row, terms)) users.push({
            timestamp: row[0],
            name: row[1],
            location: row[2],
            phone: row[3],
            email: row[4],
            twitter: row[5]
        });

        return users;
    }
}

module.exports = DatingUser;