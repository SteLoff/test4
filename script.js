import { greet } from "./modules/greet.js";

greet();


import { concatStrings } from "./modules/concatStrings.js";

console.log(concatStrings("яблоко","киви"));


import { celsiusToFahrenheit } from "./modules/celsiusToFahrenheit.js";

const n = 10;
console.log(celsiusToFahrenheit( n ));


import { calculateFallDistance } from "./modules/calculateFallDistance.js";

const t = 100;  
console.log(calculateFallDistance( t ));


import { calculateAverage } from "./modules/calculateAverage.js";

console.log(calculateAverage(85, 45, 50));