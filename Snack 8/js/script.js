const alphabeticArray = ['a', 'b', 'c', 'd', 'e'];
const numericArray = [1, 2, 3, 4, 5];

const mergeArray = (arr1, arr2) => {
    if (arr1.length !== arr2.length) return;
    const finalArray = [];
    for (let i = 0; i < arr1.length; i++) {
        finalArray.push(arr1[i]);
        finalArray.push(arr2[i]);
    }
    return finalArray;
};
console.log('Primo array di partenza: ', alphabeticArray);
console.log('Secondo array di partenza: ', numericArray);
console.log('Array finale: ', mergeArray(alphabeticArray, numericArray));