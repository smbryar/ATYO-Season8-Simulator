const initialContestants = ["Aasha", "Amber", "Basit", "Brandon", "Danny", "Jasmine", "Jenna", "Jonathan", "Justin", "Kai", "Kari", "Kylie", "Max", "Nour", "Paige", "Remy"];

const initialTruthBooths = [
    {week:1, pair:["Justin", "Nour"], correct:false},
    {week:2, pair:["Brandon", "Remy"], correct:false},
    {week:3, pair:["Jenna", "Kai"], correct:false},
    {week:4, pair:["Jenna", "Danny"], correct:false},
    {week:5, pair:["Kari", "Kylie"], correct:false},
    {week:6, pair:["Aasha", "Brandon"], correct:true},
    {week:7, pair:["Jasmine", "Jenna"], correct:false},
    {week:8, pair:["Remy", "Paige"], correct:false},
    {week:9, pair:["Max", "Amber"], correct:false},
    {week:10, pair:["Amber", "Kylie"], correct:false}]


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
    },
    {
        week:6, lights: 3, pairs: [["Jenna","Amber"],["Basit","Jonathan"],["Jasmine","Kylie"],["Danny","Kai"],
        ["Paige","Kari"],["Nour","Remy"],["Brandon","Aasha"],["Max","Justin"]]
    },
    {
        week:7, lights: 3, pairs: [["Basit", "Jonathan"], ["Kari", "Remy"], ["Justin", "Max"], ["Kai", "Jasmine"], 
        ["Kylie","Nour"],["Paige","Jenna"],["Amber","Danny"],["Brandon","Aasha"]]
    },
    {
        week:8, lights: 3, pairs: [["Basit", "Jonathan"], ["Jasmine", "Nour"], ["Max", "Justin"], ["Kylie", "Danny"], 
        ["Kai","Remy"],["Jenna","Kari"],["Amber","Paige"],["Brandon","Aasha"]]
    },
    {
        week:9, lights: 6, pairs: [["Basit", "Jonathan"], ["Jasmine", "Nour"],["Jenna", "Paige"], ["Brandon", "Aasha"],
        ["Danny","Kai"], ["Amber","Kylie"], ["Remy","Justin"], ["Max","Kari"] ]
    },
    {
        week:10, lights: 8, pairs: [["Basit", "Jonathan"], ["Jasmine", "Nour"],["Jenna", "Paige"], ["Brandon", "Aasha"],
        ["Danny","Kai"], ["Max","Kari"], ["Amber","Remy"], ["Justin","Kylie"] ]
    }
];

    module.exports = {
        initialContestants,
        initialMatchingCeremonies,
        initialTruthBooths
    };

