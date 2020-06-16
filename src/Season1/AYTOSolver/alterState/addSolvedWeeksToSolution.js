const { lockInPair } = require('./lockInPair');


function addSolvedWeeksToSolution(matchingCeremonies, solution, remainingContestants) {
    for (let i = 0; i < matchingCeremonies.length; i++) {
        if (matchingCeremonies[i].lights === matchingCeremonies[i].pairs.length) {
            lockInPair(matchingCeremonies[i].pairs[0], matchingCeremonies, solution, remainingContestants)
            return;
        }
    }
}

function checkForSolvedWeeks(matchingCeremonies) {
    for (let i = 0; i < matchingCeremonies.length; i++) {
        if (matchingCeremonies[i].lights === matchingCeremonies[i].pairs.length) {
            return true;
        }
    }
}

function areThereInvalidWeeks(matchingCeremonies) {
    for (let i = 0; i < matchingCeremonies.length; i++) {
        if (matchingCeremonies[i].lights > matchingCeremonies[i].pairs.length || matchingCeremonies[i].lights < 0) {
            return true;
        }
    }
}

module.exports = {
    addSolvedWeeksToSolution,
    checkForSolvedWeeks,
    areThereInvalidWeeks
}