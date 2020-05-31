const { initialiseState } = require('../AYTOSolver/initialState/initialiseState');

describe("initialiseState", () => {
    test("Check remaining contestants + solution = total initial contestants", () => {
        const initialContestants = ["A", "B", "C", "D", "E", "F"];
        const initialTruthBooths = [
            { pair: ["A", "B"], correct: true },
            { pair: ["D", "E"], correct: false }];
        const initialMatchingCeremonies = [
            {
                week: 1, lights: 1, pairs: [["A", "B"], ["D", "E"], ["C", "F"]]
            },
            {
                week: 2, lights: 1, pairs: [["A", "C"], ["B", "D"], ["E", "F"]]
            }];
        const totalContestants = initialContestants.length;
        const gameState = initialiseState(initialContestants,initialTruthBooths,initialMatchingCeremonies);
        expect(gameState.remainingContestants.length + gameState.solution.length*2).toBe(totalContestants);
    });
});

// {remainingContestants, knownFalses, knownTrues, matchingCeremonies, solution}

// initialiseState (initialContestants,initialTruthBooths,initialMatchingCeremonies)

// describe("doesPairMatch", () => {
//     test("returns true for exact match", () => {
//         expect(doesPairMatch(["Brandon", "Danny"], ["Brandon", "Danny"])).toBe(true);
//     });
//     test("returns true for reversed match", () => {
//         expect(doesPairMatch(["Brandon", "Danny"], ["Danny", "Brandon"])).toBe(true);
//     });
//     test("returns false for not match", () => {
//         expect(doesPairMatch(["Brandon", "Danny"], ["Kai", "Brandon"])).toBe(false);
//     });
// });