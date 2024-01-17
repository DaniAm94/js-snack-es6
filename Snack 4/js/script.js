let footballTeamsPreSeason = [
    { name: "Juventus", points: 0, foulsDrawn: 0 },
    { name: "Inter", points: 0, foulsDrawn: 0 },
    { name: "Milan", points: 0, foulsDrawn: 0 },
    { name: "Roma", points: 0, foulsDrawn: 0 },
    { name: "Napoli", points: 0, foulsDrawn: 0 },
    { name: "Lazio", points: 0, foulsDrawn: 0 },
    { name: "Atalanta", points: 0, foulsDrawn: 0 },
    { name: "Sassuolo", points: 0, foulsDrawn: 0 },
    { name: "Fiorentina", points: 0, foulsDrawn: 0 },
    { name: "Torino", points: 0, foulsDrawn: 0 }
];

const footballTeams = footballTeamsPreSeason.map(({ name }) => {
    // Devo creare un nuovo oggetto da pushare nel nuovo array altrimenti modificherei l'array iniziale
    const footballTeam = {};
    footballTeam.name = name;
    // i punti saranno un numero casuale da 5 a 20
    footballTeam.points = Math.floor(Math.random() * (20 - 5) + 1) + 5;
    // i falli subiti saranno un numero casuale da 0 a 10
    footballTeam.foulsDrawn = Math.floor(Math.random() * 11);
    return footballTeam;
});
console.log('Lista squadre prima della stagione: ', footballTeamsPreSeason);
console.log('Lista squadre a fine stagione: ', footballTeams);