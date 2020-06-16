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
    if (pair1.length !== pair2.length) return false;
    const sortedPair1 = pair1.sort();
    const sortedPair2 = pair2.sort();
    for (let i = 0; i < sortedPair1.length; i++) {
        if (sortedPair1[i] !== sortedPair2[i]) return false;
    }
    return true;
};

module.exports = {
    doesPairMatch,
    removePair
}