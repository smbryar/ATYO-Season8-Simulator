const { lockInPair } = require('../alterState/lockInPair');

function copyMatchingCeremonies (ceremonies) {
    return ceremonies.map(ceremony => {
        return {
            lights: ceremony.lights,
            pairs: [...ceremony.pairs]
        };
    })
}

export function initialiseState (initialContestants,initialTruthBooths,initialMatchingCeremonies) {
    let solution = [];

    let remainingContestants = initialContestants.slice();
    let knownTrues = initialTruthBooths.reduce((arr,booth) => booth.correct ? [...arr,booth.pair] : arr,[])
    let knownFalses = initialTruthBooths.reduce((arr,booth) => !booth.correct ? [...arr,booth.pair] : arr,[])
    let matchingCeremonies = copyMatchingCeremonies(initialMatchingCeremonies);

    // Known trues

    for (let i=0; i<knownTrues.length; i++) {
        lockInPair(knownTrues[i], matchingCeremonies, solution, remainingContestants)
    }

    return {remainingContestants, knownFalses, knownTrues, matchingCeremonies, solution}
}