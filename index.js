/*
for (let age = 30; age < 40; age++) {
    console.log(`I'm ${age} years old. Happy birthday to me!`);
}
*/

/*
const gifts = ["teddy bear", "drone", "doll"];

function wrapGifts(gifts) {
    for (let i = 0; i < gifts.length; i++) {
        console.log(`Wrapped ${gifts[i]} and added a bow!`);
    }

    return gifts;
}

wrapGifts(gifts);
*/

const names = [];
const messages = [];

function writeCards(names, event) {
    for (let c = 0; c < names.length; c++) {
      messages.push(`Thank you, ${names[c]}, for the wonderful ${event} gift!`);

    }
    return names, messages;
}

writeCards(["Guadalupe", "Ollie", "Aki"], "surprise");


function countDown(x) {
    let count = x
      while (count > -1) {
          console.log(count--);
      }
  }
  
  countDown(10);