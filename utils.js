const calcAge = (stated, timestamp) => {
    const currentDate = new Date();
    const birthday = new Date(timestamp);
    const diff = (currentDate - birthday) / (1000 * 60 * 60 * 24 * 365);
    return stated + Math.floor(diff);
}

const checkMatch = (row, terms) => {
    if (terms.name && (!row[1] || row[1].toLowerCase().indexOf(terms.name.toLowerCase()) !== 0)) return false;

    const age = parseInt(row[2]) ? calcAge(parseInt(row[2].slice(0, 2)), row[0]) : null;
    if (terms.minAge && (!age || age < terms.minAge)) return false;
    if (terms.maxAge && (!age || age > terms.maxAge)) return false;

    if (terms.gender && (!row[3] || row[3].toLowerCase() !== terms.gender.toLowerCase())) return false;
    if (terms.state && (!row[4] || row[4].toLowerCase().indexOf(terms.state.toLowerCase()) === -1)) return false;
    if (terms.city && (!row[5] || row[5].toLowerCase().indexOf(terms.city.toLowerCase()) === -1)) return false;
    if (terms.religion && (!row[6] || row[6].toLowerCase().indexOf(terms.religion.toLowerCase()) === -1)) return false;
    if (terms.politics && (!row[7] || row[7].toLowerCase().indexOf(terms.politics.toLowerCase()) === -1)) return false;

    return true;
}

module.exports = { checkMatch, calcAge };