const { doesPairMatch, removePair } = require('../AYTOSolver/alterState/utilities');

describe("doesPairMatch", () => {
    test("returns true for exact match", () => {
        expect(doesPairMatch(["Brandon", "Danny"], ["Brandon", "Danny"])).toBe(true);
    });
    test("returns true for reversed match", () => {
        expect(doesPairMatch(["Brandon", "Danny"], ["Danny", "Brandon"])).toBe(true);
    });
    test("returns false for not match", () => {
        expect(doesPairMatch(["Brandon", "Danny"], ["Kai", "Brandon"])).toBe(false);
    });
});

describe("removePair", () => {
    test("removes incorrect match from all matching ceremonies", () => {
        const initialMatchingCeremonies = [
            {
                week: 1, lights: 2, pairs: [["A", "B"], ["C", "D"], ["E", "F"]]
            },
            {
                week: 2, lights: 2, pairs: [["A", "B"], ["C", "D"], ["E", "F"]]
            },
            {
                week: 3, lights: 2, pairs: [["C", "D"], ["E", "F"]]
            }];
        removePair(["A", "B"], initialMatchingCeremonies, false);
        initialMatchingCeremonies.forEach(week => {
            expect(week.pairs).not.toContainEqual(["A", "B"]||["B", "A"]);
        })
    });

    test("removes incorrect match and does not remove other matches", () => {
        const initialMatchingCeremonies = [
            {
                week: 1, lights: 2, pairs: [["A", "B"], ["C", "D"], ["E", "F"]]
            }];
        removePair(["A", "B"], initialMatchingCeremonies, false);
        expect(initialMatchingCeremonies[0].pairs).toContainEqual(["C", "D"] || ["D","C"]);
        expect(initialMatchingCeremonies[0].pairs).toContainEqual(["E", "F"] || ["F", "E"]);
    });

    test("removes incorrect match and does not alter lights", () => {
        const initialMatchingCeremonies = [
            {
                week: 1, lights: 2, pairs: [["A", "B"], ["C", "D"], ["E", "F"]]
            }];
        const initialLights = initialMatchingCeremonies[0].lights;
        removePair(["A", "B"], initialMatchingCeremonies, false);
        expect(initialMatchingCeremonies[0].lights).toBe(initialLights);
    });

    test("removes correct match from all matching ceremonies", () => {
        const initialMatchingCeremonies = [
            {
                week: 1, lights: 2, pairs: [["A", "B"], ["C", "D"], ["E", "F"]]
            },
            {
                week: 2, lights: 2, pairs: [["A", "B"], ["C", "D"], ["E", "F"]]
            },
            {
                week: 3, lights: 2, pairs: [["C", "D"], ["E", "F"]]
            }];

        removePair(["C", "D"], initialMatchingCeremonies, true);
        initialMatchingCeremonies.forEach(week => {
            expect(week.pairs).not.toContainEqual(["C", "D"]||["D", "C"]);
        })
    });

    test("removes correct match and does not remove other matches", () => {
        const initialMatchingCeremonies = [
            {
                week: 1, lights: 2, pairs: [["A", "B"], ["C", "D"], ["E", "F"]]
            }];
        removePair(["A", "B"], initialMatchingCeremonies, true);
        expect(initialMatchingCeremonies[0].pairs).toContainEqual(["C", "D"] || ["D","C"]);
        expect(initialMatchingCeremonies[0].pairs).toContainEqual(["E", "F"] || ["F", "E"]);
    });

    test("removes correct match and does alter lights", () => {
        const initialMatchingCeremonies = [
            {
                week: 1, lights: 2, pairs: [["A", "B"], ["C", "D"], ["E", "F"]]
            }];
        const initialLights = initialMatchingCeremonies[0].lights;
        removePair(["A", "B"], initialMatchingCeremonies, true);
        expect(initialMatchingCeremonies[0].lights).toBe(initialLights-1);
    });
});