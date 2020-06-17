const { doesPairMatch } = require('./utilities');

function addContestantPairToSolution(remainingContestants, knownFalses, solution) {
    let pair = choosePairFromContestants(remainingContestants, knownFalses);
    if (!pair) {
        return false;
    }
    solution.push(pair);
    return true;
}

function choosePairFromContestants(remainingContestants, knownFalses) {
    let woman = chooseContestantFromContestants(remainingContestants.women);
    let maleOptions = remainingContestants.men.filter(man => {
        let trialPair = {woman, man};
        return !knownFalses.some(falsePair => doesPairMatch(falsePair, trialPair));
    })
    if (maleOptions.length === 0) {
        return false;
    }
    let man = chooseContestantFromContestants(remainingContestants.men);
    return {woman, man}
}

function chooseContestantFromContestants(pool) {
    const contestant = pool[Math.floor(Math.random() * pool.length)];
    pool.splice(pool.indexOf(contestant), 1);
    return contestant;
};

module.exports = {
    addContestantPairToSolution
}