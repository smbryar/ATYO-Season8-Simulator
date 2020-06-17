const { initialiseState } = require('./initialState/initialiseState');
const { removeZeroLightsWeeks } = require('./alterState/removeZeroLightsWeeks');
const { areThereInvalidWeeks, checkForSolvedWeeks, addSolvedWeeksToSolution } = require('./alterState/addSolvedWeeksToSolution');
const { addCeremonyPairToSolution } = require('./alterState/addCeremonyPairToSolution');
const { addContestantPairToSolution } = require('./alterState/addContestantPairToSolution');
const { solutionProbabilities, remainingMatches } = require('./analysis/analysis');


function AYTOSolver(initialContestants, initialTruthBooths, initialMatchingCeremonies) {
    let gameState = initialiseState(initialContestants, initialTruthBooths, initialMatchingCeremonies);


    while (gameState.remainingContestants.women.length + gameState.remainingContestants.men.length > 0) {
        
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
    let possibleSolutions = [];

    for (let i = 0; i < runs; i++) {
        let result = AYTOSolver(initialContestants, initialTruthBooths, initialMatchingCeremonies);
        possibleSolutions.push(result)
    }

    const solutionProbs = solutionProbabilities(possibleSolutions);
    const distinctOptions = Object.keys(solutionProbs).length;
    const matches = remainingMatches(possibleSolutions);
    return {solutions: solutionProbs, number: distinctOptions, matches: matches};
}

module.exports = {
    manyRuns
}