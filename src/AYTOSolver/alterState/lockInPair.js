const { removePair } = require('./utilities');

function lockInPair(pair, matchingCeremonies, solution, remainingContestants) {
    removePair(pair, matchingCeremonies, true);
    removeFromContestants(pair, remainingContestants);
    removeIncorrectPartners(pair, matchingCeremonies);    
    solution.push(pair);
}

function removeFromContestants(pair, remainingContestants) {
    for (let i = 0; i < pair.length; i++) {
        remainingContestants.splice(remainingContestants.indexOf(pair[i]), 1);
    }
};

function removeIncorrectPartners(pair, matchingCeremonies) {
    for (let i = 0; i < pair.length; i++) {
        for (let j = 0; j < matchingCeremonies.length; j++) {
            for (let k = 0; k < matchingCeremonies[j].pairs.length; k++) {
                if (matchingCeremonies[j].pairs[k].includes(pair[i])) {
                    matchingCeremonies[j].pairs.splice(k, 1)
                }
            }
        }
    }
}

module.exports = {
    lockInPair
}