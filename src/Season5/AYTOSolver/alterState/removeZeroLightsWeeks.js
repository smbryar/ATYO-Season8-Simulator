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
    for (let j = 0; j < toRemove.length; j++) {        
        matchingCeremonies.splice(toRemove[j], 1);
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