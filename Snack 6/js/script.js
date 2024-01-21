let zucchinis = [
    { variety: "Black zucchini of Milan", weight: 1.2, length: 10.5 },
    { variety: "Romanesco zucchini", weight: 2.3, length: 11.7 },
    { variety: "Long Florentine zucchini", weight: 3.4, length: 12.9 },
    { variety: "Sicilian zucchini", weight: 4.5, length: 14.1 },
    { variety: "Striped zucchini of Naples", weight: 2.6, length: 15.3 },
    { variety: "White zucchini of Trieste", weight: 3.7, length: 16.5 },
    { variety: "Round zucchini of Piacenza", weight: 4.8, length: 17.7 },
    { variety: "Round zucchini of Nice", weight: 1.9, length: 18.9 },
    { variety: "Round zucchini of Florence", weight: 3.0, length: 20.1 },
    { variety: "Round scalogno zucchini", weight: 4.1, length: 19.3 }
];

const shortZucchinis = zucchinis.filter(({ length }) => length < 15);
const longZucchinis = zucchinis.filter(({ length }) => length >= 15);
console.log('Lista zucchine che sono lunghe meno di 15cm: ', shortZucchinis);
console.log('Lista zucchine che sono lunghe più di 15cm: ', longZucchinis);