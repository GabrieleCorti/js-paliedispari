// var pariDispari = prompt("scegli o pari o dispari");
//     numero = parseInt(prompt("scegli un numero da 1 a 5"));
//   var numeroPc = Math.floor(Math.random() * 5 + 1);
//
function somma(num1, num2) {
  var sum = num1 + num2;
  return sum;
}


// if (somma(numero, numeroPc) % 2 == 0){
//
//   var risultato = "pari";
//
//
// } else {
//
//   risultato = "dispari";
//
// }

// console.log(somma(numero, numeroPc) % 2);
//
// if (pariDispari == risultato) {
//
//   alert("Hai vinto");
//
// } else {
//
//   alert("Hai perso");
//
// }

var calcolaVittori = document.getElementById("calcolo");
var sceltaPariDispari = document.getElementsByClassName("paridispari");
var numeri = document.getElementsByClassName("numero");
var scelta;
var valore;
var risultato;
var numeroPc;

calcolaVittori.addEventListener("click",

  function (){

    numeroPc = Math.floor(Math.random() * 5 + 1);
    for (var i = 0; i < sceltaPariDispari.length; i++) {

      if (sceltaPariDispari[i].checked == true) {

        scelta = sceltaPariDispari[i].value;

      }

    }

    for (var i = 0; i < numeri.length; i++) {

      if (numeri[i].checked == true){

        valore = parseInt(numeri[i].value);

      }

    }

    console.log(numeroPc);
    if( !isNaN(somma(valore, numeroPc)) && typeof scelta != undefined ){

      if (somma(valore, numeroPc) % 2 == 0){

        risultato = "pari";


      } else {

        risultato = "dispari";

      }

      if (scelta == risultato) {

        alert("Hai vinto");

      } else {

        alert("Hai perso");

      }
    } else {

      alert("tutti i campi sono obbligatori");

    }

  }
);
