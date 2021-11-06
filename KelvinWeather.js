const kelvin = 294;//I choosed const variable because theis variable is not going to change it’s value

//const Celsius = 273;
var Celsius = kelvin - 273;

let fahrenheit;
var fahrenheit = Celsius * (9/5) + 32;
// I wrote the formula of converting from fahrenheit to Celsius in order to set the fahrenheit varaible in it’s value

fahrenheit = Math.floor(fahrenheit);

console.log(The temperature is ${fahrenheitE} degrees fahrenheit);