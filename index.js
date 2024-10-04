for (let age = 30; age < 40; age++) {
    console.log(`I'm ${age} years old. Happy birthday to me!`);
}

const gifts = ["teddy bear", "drone", "doll"];

function wrapGifts(gifts) {
    for (let i = 0; i < gifts.length; i++) {
        console.log(`Wrapped ${gifts[i]} and added a bow!`);
    }
    return gifts;
}

wrapGifts(gifts);


function writeCards(names, event) {
    const cards = [];
    for (let i = 0; i < names.length; i++) {
        const card = `Thank you, ${names[i]}, for the wonderful ${event} gift!`;
        cards.push(card);
}
return cards;
}

console.log(writeCards("Johnny", "Alexandra", "Jaime"));

function countDown(startingNumber) {
    let countDown = startingNumber;
    while (countDown >= 0) {
      console.log(countDown);
      countDown--;
    }
}
countDown(10);
