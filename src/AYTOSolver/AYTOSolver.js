const { initialiseState } = require('./initialState/initialiseState');
const { removeZeroLightsWeeks } = require('./alterState/removeZeroLightsWeeks');
const { areThereInvalidWeeks, checkForSolvedWeeks, addSolvedWeeksToSolution } = require('./alterState/addSolvedWeeksToSolution');
const { addCeremonyPairToSolution } = require('./alterState/addCeremonyPairToSolution');
const { addContestantPairToSolution } = require('./alterState/addContestantPairToSolution');
const { pairProbabilities, solutionProbabilities } = require('./analysis/analysis');


function AYTOSolver(initialContestants, initialTruthBooths, initialMatchingCeremonies) {
    let gameState = initialiseState(initialContestants, initialTruthBooths, initialMatchingCeremonies);


    while (gameState.remainingContestants.length > 0) {
        
        removeZeroLightsWeeks(gameState.knownFalses, gameState.matchingCeremonies);

        if (areThereInvalidWeeks(gameState.matchingCeremonies)) {
            return false;
        }

        if (checkForSolvedWeeks(gameState.matchingCeremonies)) {
            addSolvedWeeksToSolution(gameState.matchingCeremonies, gameState.solution, gameState.remainingContestants);
        }        

        else if (gameState.matchingCeremonies.length > 0) {
            addCeremonyPairToSolution(gameState.matchingCeremonies,gameState.solution, gameState.remainingContestants);        
        }        

        else {
            if (!addContestantPairToSolution(gameState.remainingContestants, gameState.knownFalses, gameState.solution)) {
                return false;
            } 
        }
    }
    return gameState.solution;
    
}

function manyRuns(runs, initialContestants, initialTruthBooths, initialMatchingCeremonies) {
    let incorrect = 0;
    let possibleSolutions = [];

    for (let i = 0; i < runs; i++) {
        let result = AYTOSolver(initialContestants, initialTruthBooths, initialMatchingCeremonies);
        if (!result) { incorrect += 1 }
        else { possibleSolutions.push(result) }
    }

    const pairProbs = pairProbabilities(possibleSolutions);
    const solutionProbs = solutionProbabilities(possibleSolutions);
    const distinctOptions = Object.keys(solutionProbs).length;
    
    // console.log(pairProbs);
    // console.log(solutionProbs);
    // console.log(distinctOptions);
    // console.log((runs - incorrect) / runs);
    return {solutions: solutionProbs, number: distinctOptions};
}

module.exports = {
    manyRuns
}