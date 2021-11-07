const axios = require('axios');
const { API_KEY, DATING_SHEET_ID } = require('../config');
const { checkDatingMatch, calcAge } = require('../utils');
const ExpressError = require('../expressError');

// Entry in an individual tournament
class DatingUser {
    static async search({ name = null, minAge = null, maxAge = null, gender = null, state = null, city = null, religion = null, politics = null }) {
        const res = await axios.get(`https://sheets.googleapis.com/v4/spreadsheets/${DATING_SHEET_ID}/values/Form+Responses+1!A:Y?key=${API_KEY}`);
        const values = res.data.values.slice(2);

        const terms = {};
        if (name) terms.name = name;
        if (minAge) terms.minAge = minAge;
        if (maxAge) terms.maxAge = maxAge;
        if (gender) terms.gender = gender;
        if (state) terms.state = state;
        if (city) terms.city = city;
        if (religion) terms.religion = religion;
        if (politics) terms.politics = politics;

        const users = [];
        for (let row of values) if (checkDatingMatch(row, terms)) users.push({
            timestamp: row[0],
            name: row[1],
            age: calcAge(parseInt(row[2]), row[0]),
            gender: row[3],
            state: row[4],
            city: row[5],
            religion: row[6],
            politics: row[7],
            twitter: row[8],
            discord: row[9],
            email: row[10],
            preferredContact: row[11],
            education: row[12],
            job: row[13],
            desiredChildren: row[14],
            extraversion: row[15],
            pets: row[16],
            parenting: row[17],
            books: row[18],
            movies: row[19],
            proudOf: row[20],
            hobbies: row[23],
            important: row[24]
        });

        return users;
    }
}

module.exports = DatingUser;