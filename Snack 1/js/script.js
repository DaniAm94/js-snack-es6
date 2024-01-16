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


const guestsList = guests.map((Element, index) => {
    const guest = {
        table: tableName,
        guestName: Element,
        seat: index + 1,
    };
    return guest;
});
console.log(guestsList);