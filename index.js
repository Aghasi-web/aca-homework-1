const PI = Math.PI;
const userInputRadius = prompt("Please enter radius");
const radiusNumber = parseFloat(userInputRadius);
const area = PI*(Math.pow(radiusNumber, 2));
const perimetr = 2*PI*radiusNumber;
console.log(area, 'area');
console.log(perimetr, 'perimetr');

