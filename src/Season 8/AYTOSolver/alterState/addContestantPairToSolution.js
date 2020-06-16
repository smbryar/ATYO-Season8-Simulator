const { doesPairMatch } = require('./utilities');

function addContestantPairToSolution(remainingContestants, knownFalses, solution) {
    let pair = choosePairFromContestants(remainingContestants, knownFalses);
    if (!pair) {
        // console.log("Incorrect solution - choosing from contestant pool");
        return false;
    }
    solution.push(pair);
    return true;
}

function choosePairFromContestants(remainingContestants, knownFalses) {
    let contestant1 = chooseContestantFromContestants(remainingContestants);
    let options = remainingContestants.filter(person => {
        let trialPair = [contestant1, person];
        return !knownFalses.some(falsePair => doesPairMatch(falsePair, trialPair));
    })
    if (options.length === 0) {
        // console.log("Incorrect solution - choosing from contestants");
        return false;
    }
    let contestant2 = chooseContestantFromContestants(options);
    remainingContestants.splice(remainingContestants.indexOf(contestant2), 1);
    return [contestant1, contestant2]
}

function chooseContestantFromContestants(pool) {
    const contestant = pool[Math.floor(Math.random() * pool.length)];
    pool.splice(pool.indexOf(contestant), 1);
    return contestant;
};

module.exports = {
    addContestantPairToSolution
}