const arrLength = parseInt(prompt('Scegli la lunghezza dell\'array: '));
const array = [];
for (let i = 0; i < arrLength; i++) {
    array[i] = prompt('Inserisci un elemento nell\'array: ').trim();
};
console.log('Array di partenza: ', array);

let a;
let b;
console.log(a);
do {
    a = parseInt(prompt('Per ridurre l\'array, scegli da quale posizione vuoi iniziare a stampare: '));
} while (isNaN(a) || a < 0 || a >= arrLength)
console.log('Vuoi iniziare a stampare dalla posizione: ', a);


do {
    b = parseInt(prompt('Vuoi stampare fino all\'elemento(escluso): '));
} while (isNaN(b) || b <= a || b > arrLength)

console.log('Verrà stampato fino all\'elemento di posizione: ', b - 1);

const arrayReducer = (arr, a, b) => {
    const subArray = [];
    for (let i = a; i < b; i++)
        subArray.push(arr[i])
    return subArray;
};

console.log('Nuovo array ridotto: ', arrayReducer(array, a, b));