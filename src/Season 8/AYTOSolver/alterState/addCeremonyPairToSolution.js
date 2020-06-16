const { lockInPair } = require('./lockInPair');

function addCeremonyPairToSolution(matchingCeremonies, solution, remainingContestants) {
    let pair = chooseRandomPair(matchingCeremonies);
    if (!pair) throw matchingCeremonies;
    lockInPair(pair, matchingCeremonies, solution, remainingContestants);
}


function chooseRandomPair(matchingCeremonies) {
    let week = chooseFocusWeek(matchingCeremonies);
    return matchingCeremonies[week].pairs[Math.floor(Math.random() * matchingCeremonies[week].pairs.length)];
}


function chooseFocusWeek(matchingCeremonies) {
    return Math.floor(Math.random() * matchingCeremonies.length);
}

module.exports = {
    addCeremonyPairToSolution
}