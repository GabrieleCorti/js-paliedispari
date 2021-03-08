var userParola = prompt("dimmi una parola");

function reversWord(string) {

 return string.split("").reverse().join("");

}

function palindromo(parola) {

  if (parola == reversWord(parola)) {

    return true;

  }

  return false;

}

if (palindromo(userParola)) {

  alert("la parole è palindroma");

} else {

  alert("la parola non è palindroma");
  
}
