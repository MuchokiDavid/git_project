const order= "cheeseburger";
let ingredients;
switch (order) {
    case "cheeseburger":
        ingredients= 'bun, burger, cheese, lettuce, tomato, onion';
        break;
    case "hamburger":
        ingredients= 'bun, burger, lettuce, tomato, onion';
        break;
    case "malted":
        ingredients= 'milk, ice cream, malted milk powder';
        break;

    default:
        console.log("Sorry, that's not on the menu right now.");
        break;
}
console.log(ingredients);

//Teenagers
/*const age = 15;

let isTeenager;

switch (age) {
    case 13:
    case 14:
    case 15:
    case 16:
    case 17:
    case 18:
    case 19:
        isTeenager = true;
        break;
    default:
        isTeenager = false;
}

console.log(isTeenager);*/