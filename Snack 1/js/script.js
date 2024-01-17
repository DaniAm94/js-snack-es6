const tableName = 'Tavolo Vip';
const guests = [
    'Brad Pitt',
    'Johnny Depp',
    'Lady Gaga',
    'Cristiano Ronaldo',
    'Georgina Rodriguez',
    'Chiara Ferragni',
    'Fedez',
    'George Clooney',
    'Amal Clooney',
    'Maneskin'
];


const guestsList = guests.map((Element, index) => ({ table: tableName, guestName: Element, seat: index + 1 }));
console.log(guestsList);