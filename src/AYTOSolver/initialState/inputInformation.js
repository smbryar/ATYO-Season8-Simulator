const initialContestants = ["Aasha", "Amber", "Basit", "Brandon", "Danny", "Jasmine", "Jenna", "Jonathan", "Justin", "Kai", "Kari", "Kylie", "Max", "Nour", "Paige", "Remy"];

const initialTruthBooths = [
    {pair:["Justin", "Nour"], correct:false},
    {pair:["Brandon", "Remy"], correct:false},
    {pair:["Jenna", "Kai"], correct:false},
    {pair:["Jenna", "Danny"], correct:false},
    {pair:["Kari", "Kylie"], correct:false}]


const initialMatchingCeremonies = [
    {
        week:1, lights: 2, pairs: [["Aasha", "Paige"], ["Amber", "Nour"], ["Basit", "Jonathan"], ["Brandon", "Remy"],
        ["Danny", "Kai"], ["Jasmine", "Jenna"], ["Justin", "Max"], ["Kari", "Kylie"]]
    },
    {
        week:2, lights: 2, pairs: [["Aasha", "Brandon"], ["Amber", "Nour"], ["Basit", "Jonathan"], ["Danny", "Remy"],
        ["Jasmine", "Justin"], ["Jenna", "Kai"], ["Kari", "Kylie"], ["Max", "Paige"]]
    },
    {
        week:3, lights: 2, pairs: [["Aasha", "Max"], ["Amber", "Paige"], ["Basit", "Remy"], ["Danny", "Kai"],
        ["Jasmine", "Nour"], ["Jenna", "Justin"], ["Jonathan", "Brandon"], ["Kari", "Kylie"]]
    },
    {
        week:4, lights: 1, pairs: [["Aasha", "Remy"], ["Amber", "Nour"], ["Basit", "Danny"], ["Brandon", "Jasmine"],
        ["Jenna", "Paige"], ["Jonathan", "Kylie"], ["Justin", "Max"], ["Kai", "Kari"]]
    },
    {
        week:5, lights: 0, pairs: [["Aasha", "Kai"], ["Amber", "Nour"], ["Basit", "Remy"], ["Brandon", "Max"],
        ["Danny", "Kari"], ["Jasmine", "Paige"], ["Jenna", "Kylie"], ["Jonathan", "Justin"]]
    }];

    module.exports = {
        initialContestants,
        initialMatchingCeremonies,
        initialTruthBooths
    };

