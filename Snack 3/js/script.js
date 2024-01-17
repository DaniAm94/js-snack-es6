const bikes = [
    { brand: "Bianchi", weight: 15 },
    { brand: "Cannondale", weight: 18 },
    { brand: "Trek", weight: 12 },
    { brand: "Specialized", weight: 14 },
    { brand: "Bianchi", weight: 11 },
    { brand: "Scott", weight: 16 },
    { brand: "Bianchi", weight: 19 },
    { brand: "Cannondale", weight: 13 },
    { brand: "Trek", weight: 17 },
    { brand: "Specialized", weight: 11 },
    { brand: "Scott", weight: 20 }
];
// Dichiaro una variabile min e la inizializzo ad un valore alto rispetto al parametro weight
// in alternativa potrei inizializzarlo al weight di un elemento dell'array ad esempio  il primo
// e poi fare il contronto con tutti gli altri
let min = 50;
let minimum = bikes[0].weight;
// Per determinare il peso più basso delle bici presenti nell'array
// Uso un for each che ha ogni giro confronta min con il parametro weight e lo aggiorna se necessario
bikes.forEach(({ weight }) => {
    if (weight < min) min = weight;
});
console.log('Peso minimo (primo metodo):', min);

// Usando minimum che già contiene il peso della prima bici
// uso un ciclio for partendo dal secondo elemento di bikes
for (let i = 1; i < bikes.length; i++) {
    const { weight } = bikes[i];
    if (weight < minimum) minimum = weight;
}
console.log('Peso minimo (secondo metodo):', minimum);


// Per trovare la prima bici dal peso minimo uso un find
// Mi restituisce l'elemento che rispetta la condizione booleana da me imposta
// ovvero weight deve essere uguale a min
const lightestBike1 = bikes.find(({ weight }) => weight === min);
console.log('La prima bicicletta più leggera:', lightestBike1);

// Se ci fosse più di una bici con peso = al minimo
// Uso il metodo filter per filtrare tutti gli elementi con weight = al min
const lightestBikes = bikes.filter(({ weight }) => weight === min);
console.log('Lista bici più leggere: ', lightestBikes);


