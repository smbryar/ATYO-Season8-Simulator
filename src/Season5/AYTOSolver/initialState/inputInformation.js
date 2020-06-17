const initialContestants = {
    women: ["Alicia", "Carolina", "Cas", "Gianna", "Hannah", "Kam", "Kari", "Kathryn", "Shannon", "Taylor", "Tyranny"],
    men: ["Andre", "Derrick", "Edward", "Hayden", "Jaylan", "Joey", "Michael", "Mike", "Osvaldo", "Ozzy", "Tyler"]
};

const initialTruthBooths = [
    { week: 1, woman: "Gianna", man: "Hayden", correct: false },
    { week: 2, woman: "Alicia", man: "Andre", correct: false }]


const initialMatchingCeremonies = [
    {
        week: 1, lights: 2,
        pairs: [{ woman: "Alicia", man: "Andre" }, { woman: "Carolina", man: "Joey" }, { woman: "Cas", man: "Jaylan" }, 
        { woman: "Gianna", man: "Ozzy" }, { woman: "Hannah", man: "Michael" }, { woman: "Kam", man: "Edward" }, 
        { woman: "Kari", man: "Mike" }, { woman: "Kathryn", man: "Derrick" }, { woman: "Shannon", man: "Hayden" }, 
        { woman: "Taylor", man: "Tyler" }, { woman: "Tyranny", man: "Osvaldo" }]
    },
    {
        week: 2, lights: 0,
        pairs: [{ woman: "Alicia", man: "Derrick" }, { woman: "Carolina", man: "Joey" }, { woman: "Cas", man: "Mike" }, 
        { woman: "Gianna", man: "Michael" }, { woman: "Hannah", man: "Andre" }, { woman: "Kam", man: "Jaylan" }, 
        { woman: "Kari", man: "Osvaldo" }, { woman: "Kathryn", man: "Ozzy" }, { woman: "Shannon", man: "Edward" }, 
        { woman: "Taylor", man: "Hayden" }, { woman: "Tyranny", man: "Tyler" }]
    }
];

module.exports = {
    initialContestants,
    initialMatchingCeremonies,
    initialTruthBooths
};

