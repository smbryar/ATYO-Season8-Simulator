function pairProbabilities(possibleSolutions) {
    return possibleSolutions.reduce((probabilitiesObj, solution) => {
        return solution.reduce((obj, pair) => {
            let strPair = `${pair.woman}-${pair.man}`;
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
            let strPair = `${pair.woman}-${pair.man}/`;
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

function remainingMatches(possibleSolutions) {
    return possibleSolutions.reduce((finalObj, solution) => {
        return solution.reduce((obj, pair) => {
          if (obj[pair.woman]) {obj[pair.woman].add(pair.man)}
          else {
            obj[pair.woman] = new Set ();
            obj[pair.woman].add(pair.man);
          }
          if (obj[pair.man]) {obj[pair.man].add(pair.woman)}
          else {
            obj[pair.man] = new Set ();
            obj[pair.man].add(pair.woman);
          }
          return obj;
        }, finalObj)
    }, {})
}

exports.pairProbabilities = pairProbabilities;
exports.solutionProbabilities = solutionProbabilities;
exports.remainingMatches = remainingMatches;