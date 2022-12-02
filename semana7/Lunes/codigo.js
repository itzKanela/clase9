let name = 'Riot ' + 'Games.';
let intro = "Les damos la bienvenida a ";
let fraseCompleta = saludo + nombre;

console.log(fraseCompleta);

let frase = "Valorant" + "es el primer " + "shooter táctico 5v5 " + "basado en personajes " + "de nuestra empresa.";

console.log(frase);

let nStr1 = "10";
let nStr2 = "20";
let nStr3 = "30";

let concatenarNro = nStr1 + " " + nStr2 + " " + nStr3;

console.log(concatenarNro);

let edad;

edad = prompt('Cuantos años tenes?');
console.warn(edad);

if (edad >= 18){
    alert("Tu entrada esta permitida ya que sos mayor de edad.");
} else {
    alert("Tu entrada no esta permitida ya que sos menor de edad.");
}