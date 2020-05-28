const { lockInPair } = require('./lockInPair');


function addSolvedWeeksToSolution(matchingCeremonies, solution, remainingContestants) {
    let correctPairs = [];
    for (let i = 0; i < matchingCeremonies.length; i++) {
        if (matchingCeremonies[i].lights === matchingCeremonies[i].pairs.length) {
            for (let j = 0; j < matchingCeremonies[i].pairs.length; j++) {
                correctPairs.push(matchingCeremonies[i].pairs[j]);                
            }
        }
    }
    for (let i=0; i < correctPairs.length; i++) {
        lockInPair(correctPairs[i], matchingCeremonies, solution, remainingContestants)
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