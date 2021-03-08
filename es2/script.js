var pariDispari = prompt("scegli o pari o dispari");
    numero = parseInt(prompt("scegli un numero da 1 a 5"));
    numeroPc = Math.floor(Math.random() * 5 + 1);

function somma(num1, num2) {
  var sum = num1 + num2;
  return sum;
}


if (somma(numero, numeroPc) % 2 == 0){

  var risultato = "pari";


} else {

  risultato = "dispari";

}

console.log(somma(numero, numeroPc) % 2);

if (pariDispari == risultato) {

  alert("Hai vinto");

} else {

  alert("Hai perso");

}
