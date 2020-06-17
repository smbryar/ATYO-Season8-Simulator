const initialContestants = {
    women: ["Amber", "Ashleigh", "Brittany", "Coleysia", "Jacy", "Jessica", "Kayla", "Paige", "Shanley", "Simone"],
    men: ["Adam", "Dre", "Chris S.", "Chris T.", "Dillan", "Ethan", "Joey", "John", "Ryan", "Wes"]
};

const initialTruthBooths = [
    { week: 1, woman: "Shanley", man: "Chris T.", correct: false },
    { week: 2, woman: "Jessica", man: "Ethan", correct: false },
    { week: 3, woman: "Simone", man: "John", correct: false },
    { week: 4, woman: "Jessica", man: "Dillan", correct: false },
    { week: 5, woman: "Ashleigh", man: "Dre", correct: false },
    { week: 5, woman: "Coleysia", man: "Dillan", correct: true },
    { week: 6, woman: "Paige", man: "Chris T.", correct: true },
    { week: 7, woman: "Kayla", man: "Ryan", correct: false },
    { week: 8, woman: "Kayla", man: "Wes", correct: true },
    { week: 9, woman: "Jacy", man: "John", correct: false }]


const initialMatchingCeremonies = [
    {
        week: 1, lights: 2,
        pairs: [{ woman: "Amber", man: "Ryan" }, { woman: "Ashleigh", man: "Chris S." }, { woman: "Brittany", man: "Adam" }, 
        { woman: "Coleysia", man: "Dillan" }, { woman: "Jacy", man: "Dre" }, { woman: "Jessica", man: "Chris T." }, 
        { woman: "Kayla", man: "Wes" }, { woman: "Paige", man: "Joey" }, { woman: "Shanley", man: "Ethan" }, { woman: "Simone", man: "John" }]
    },
    {
        week: 2, lights: 4,
        pairs: [{ woman: "Amber", man: "Ethan" }, { woman: "Ashleigh", man: "Dre" }, { woman: "Brittany", man: "Joey" }, 
        { woman: "Coleysia", man: "Wes" }, { woman: "Jacy", man: "John" }, { woman: "Jessica", man: "Dillan" }, 
        { woman: "Kayla", man: "Ryan" }, { woman: "Paige", man: "Chris T." }, { woman: "Shanley", man: "Adam" }, { woman: "Simone", man: "Chris S." }]
    },
    {
        week: 3, lights: 2,
        pairs: [{ woman: "Amber", man: "Ethan" }, { woman: "Ashleigh", man: "Dre" }, { woman: "Brittany", man: "Adam" }, 
        { woman: "Coleysia", man: "Dillan" }, { woman: "Jacy", man: "Wes" }, { woman: "Jessica", man: "John" }, 
        { woman: "Kayla", man: "Ryan" }, { woman: "Paige", man: "Chris S." }, { woman: "Shanley", man: "Joey" }, { woman: "Simone", man: "Chris T." }]
    },
    {
        week: 4, lights: 2,
        pairs: [{ woman: "Amber", man: "Adam" }, { woman: "Ashleigh", man: "Chris T." }, { woman: "Brittany", man: "Ryan" }, 
        { woman: "Coleysia", man: "Dillan" }, { woman: "Jacy", man: "Joey" }, { woman: "Jessica", man: "Wes" }, 
        { woman: "Kayla", man: "Ethan" }, { woman: "Paige", man: "Chris S." }, { woman: "Shanley", man: "John" }, { woman: "Simone", man: "Dre" }]
    },
    {
        week: 5, lights: 5,
        pairs: [{ woman: "Amber", man: "Ethan" }, { woman: "Ashleigh", man: "Ryan" }, { woman: "Brittany", man: "Dre" }, 
        { woman: "Coleysia", man: "Dillan" }, { woman: "Jacy", man: "John" }, { woman: "Jessica", man: "Joey" }, 
        { woman: "Kayla", man: "Wes" }, { woman: "Paige", man: "Chris T." }, { woman: "Shanley", man: "Adam" }, { woman: "Simone", man: "Chris S." }]
    },
    {
        week: 6, lights: 5,
        pairs: [{ woman: "Amber", man: "Ethan" }, { woman: "Ashleigh", man: "Adam" }, { woman: "Brittany", man: "Chris S." }, 
        { woman: "Coleysia", man: "Dillan" }, { woman: "Jacy", man: "John" }, { woman: "Jessica", man: "Ryan" }, 
        { woman: "Kayla", man: "Wes" }, { woman: "Paige", man: "Chris T." }, { woman: "Shanley", man: "Dre" }, { woman: "Simone", man: "Joey" }]
    },
    {
        week: 7, lights: 7,
        pairs: [{ woman: "Amber", man: "Ethan" }, { woman: "Ashleigh", man: "Ryan" }, { woman: "Brittany", man: "John" }, 
        { woman: "Coleysia", man: "Dillan" }, { woman: "Jacy", man: "Chris S." }, { woman: "Jessica", man: "Joey" }, 
        { woman: "Kayla", man: "Wes" }, { woman: "Paige", man: "Chris T." }, { woman: "Shanley", man: "Adam" }, { woman: "Simone", man: "Dre" }]
    },
    {
        week: 8, lights: 8,
        pairs: [{ woman: "Amber", man: "Ethan" }, { woman: "Ashleigh", man: "Chris S." }, { woman: "Brittany", man: "Joey" }, 
        { woman: "Coleysia", man: "Dillan" }, { woman: "Jacy", man: "John" }, { woman: "Jessica", man: "Ryan" }, 
        { woman: "Kayla", man: "Wes" }, { woman: "Paige", man: "Chris T." }, { woman: "Shanley", man: "Adam" }, { woman: "Simone", man: "Dre" }]
    },
    {
        week: 9, lights: 10,
        pairs: [{ woman: "Amber", man: "Ethan" }, { woman: "Ashleigh", man: "John" }, { woman: "Brittany", man: "Joey" }, 
        { woman: "Coleysia", man: "Dillan" }, { woman: "Jacy", man: "Chris S." }, { woman: "Jessica", man: "Ryan" }, 
        { woman: "Kayla", man: "Wes" }, { woman: "Paige", man: "Chris T." }, { woman: "Shanley", man: "Adam" }, { woman: "Simone", man: "Dre" }]
    }
];

module.exports = {
    initialContestants,
    initialMatchingCeremonies,
    initialTruthBooths
};

