const { removePair } = require('./utilities');

function lockInPair(pair, matchingCeremonies, solution, remainingContestants) {
    removePair(pair, matchingCeremonies, true);
    removeFromContestants(pair, remainingContestants);
    removeIncorrectPartners(pair, matchingCeremonies);
    solution.push(pair);
}

function removeFromContestants(pair, remainingContestants) {
    remainingContestants.women.splice(remainingContestants.women.indexOf(pair.woman), 1);
    remainingContestants.men.splice(remainingContestants.men.indexOf(pair.man), 1);
};

function removeIncorrectPartners(pair, matchingCeremonies) {
    for (let i = 0; i < matchingCeremonies.length; i++) {
        let toRemove = [];

        for (let j = 0; j < matchingCeremonies[i].pairs.length; j++) {
            let matchPair = matchingCeremonies[i].pairs[j];
            if (matchPair.woman === pair.woman || matchPair.man === pair.man) {
                toRemove.push(j)
            }
        }
        toRemove.sort((a, b) => b - a);
        for (let k = 0; k < toRemove.length; k++) {
            matchingCeremonies[i].pairs.splice(toRemove[k], 1);
        }
    }
}

module.exports = {
    lockInPair
}