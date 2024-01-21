let zucchinis = [
    { variety: "Black zucchini of Milan", weight: 1.2, length: 30.5 },
    { variety: "Romanesco zucchini", weight: 2.3, length: 32.7 },
    { variety: "Long Florentine zucchini", weight: 3.4, length: 34.9 },
    { variety: "Sicilian zucchini", weight: 4.5, length: 37.1 },
    { variety: "Striped zucchini of Naples", weight: 2.6, length: 39.3 },
    { variety: "White zucchini of Trieste", weight: 3.7, length: 31.5 },
    { variety: "Round zucchini of Piacenza", weight: 4.8, length: 33.7 },
    { variety: "Round zucchini of Nice", weight: 1.9, length: 35.9 },
    { variety: "Round zucchini of Florence", weight: 3.0, length: 38.1 },
    { variety: "Round scalogno zucchini", weight: 4.1, length: 40.3 }
];


const totWeight = zucchinis.reduce((currentTotWeight, { weight }) => currentTotWeight + weight, 0);
console.log('Peso totale delle zucchine: ', totWeight);