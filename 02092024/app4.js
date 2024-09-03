const frutas=["platano","Sandia","uva"];

frutas.push("jicama");

console.log(frutas);

//elimina el ultimo ingreso
const eliminaFruta = frutas.pop();
console.log(frutas);
console.log(eliminaFruta);

//elimina el primer elemento insertado

const eliminoFruta = frutas.shift();
console.log(frutas);
console.log(eliminoFruta);