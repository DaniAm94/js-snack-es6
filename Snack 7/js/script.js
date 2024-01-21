
const word = prompt('Inserisci una stringa da invertire: ').trim();

const reverseString = (word) => {
    let reversedWord = [];
    // Ciclo For che itera la parola in tutta la sua lunghezza partendo dall'ultimo carattere
    for (let i = word.length - 1; i >= 0; i--) {
        // Ogni carattere viene pushato in un nuovo array
        reversedWord.push(word[i]);
    }
    // L'array viene restituito sotto forma di stringa tramite il join
    return reversedWord.join('');
}


console.log('Stringa invertita: ', reverseString(word));