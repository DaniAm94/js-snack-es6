const students = [
    {
        id: 213,
        name: 'Marco della Rovere',
        grades: 78
    },
    {
        id: 110,
        name: 'Paola Cortellessa',
        grades: 96
    },
    {
        id: 250,
        name: 'Andrea Mantegna',
        grades: 48
    },
    {
        id: 145,
        name: 'Gaia Borromini',
        grades: 74
    },
    {
        id: 196,
        name: 'Luigi Grimaldello',
        grades: 68
    },
    {
        id: 102,
        name: 'Piero della Francesca',
        grades: 50
    },
    {
        id: 120,
        name: 'Francesca da Polenta',
        grades: 84
    },
];


// Studenti la cui somma di voti è superiore a 70
const studentsOver70 = students.filter(({ grades }) => grades > 70);
console.log('Studenti con somma dei voti superiore a 70: ', studentsOver70);

// Studenti con somma dei voti superiore a 70 e id superiore a 120
const studentsSubList = students.filter(({ id, grades }) => id > 120 && grades > 70);
console.log('Studenti con somma dei voti superiore a 70 e id superiore a 120: ', studentsSubList);

// Array con tutti i nomi degli studenti in maiuscolo
const studentsNamesToUp = students.map(({ name }) => name.toUpperCase());
console.log('Lista dei nomi in upper case:', studentsNamesToUp);