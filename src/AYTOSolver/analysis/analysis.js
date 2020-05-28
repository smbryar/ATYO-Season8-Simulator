function pairProbabilities(possibleSolutions) {
    return possibleSolutions.reduce((probabilitiesObj, solution) => {
        return solution.reduce((obj, pair) => {
            let orderedPair = pair.sort();
            let strPair = `${orderedPair[0]}-${orderedPair[1]}`;
            if (obj[strPair]) {
                obj[strPair] += 1
            }
            else {
                obj[strPair] = 1
            }
            return obj
        }, probabilitiesObj)
    }, {})
}

function solutionProbabilities(possibleSolutions) {
    return possibleSolutions.reduce((obj, solution) => {
        let solutionNameArr =  solution.reduce((arr, pair) => {
            let orderedPair = pair.sort();
            let strPair = `${orderedPair[0]}-${orderedPair[1]}/`;
            arr.push(strPair);
            return arr
        },[])
        solutionNameArr.sort();
        let solutionName = solutionNameArr.join("");

        if (!obj[solutionName]) {
          obj[solutionName] = 1;
        }
        else {
          obj[solutionName] = obj[solutionName] + 1;
        }

        return obj;
    }, {})
}

exports.pairProbabilities = pairProbabilities;
exports.solutionProbabilities = solutionProbabilities;