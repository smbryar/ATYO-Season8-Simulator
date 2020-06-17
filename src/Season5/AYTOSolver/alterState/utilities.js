function removePair(pair, matchingCeremonies, trues) {
    for (let i = 0; i < matchingCeremonies.length; i++) {
        if (matchingCeremonies[i].pairs.some(matchingPair => doesPairMatch(matchingPair, pair))) {
            const index = matchingCeremonies[i].pairs.findIndex(p => doesPairMatch(p, pair));
            matchingCeremonies[i].pairs.splice(index, 1);
            if (trues) { matchingCeremonies[i].lights -= 1 }
        }
    }
}

function doesPairMatch (pair1, pair2) {
    return pair1.woman === pair2.woman && pair1.man === pair2.man;
};

module.exports = {
    doesPairMatch,
    removePair
}