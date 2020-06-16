const { removePair } = require('./utilities');

function removeZeroLightsWeeks(knownFalses, matchingCeremonies) {
    let toRemove = [];
    for (let i = 0; i < matchingCeremonies.length; i++) {
        if (matchingCeremonies[i].lights === 0) {
            matchingCeremonies[i].pairs.forEach(pair => knownFalses.push(pair))
            toRemove.push(i);
        }
    }
    toRemove.sort((a,b) => b - a);
    for (let i = 0; i < toRemove.length; i++) {        
        matchingCeremonies.splice(toRemove[i], 1);
    }
    removeKnownPairs(knownFalses, matchingCeremonies, false)
}


function removeKnownPairs(knownPairsArr, matchingCeremonies, trues) {
    for (let i = 0; i < knownPairsArr.length; i++) {
        removePair(knownPairsArr[i], matchingCeremonies, trues)
    }
}

module.exports = {
    removeZeroLightsWeeks
}