const parola = prompt('inserisci una parola');
console.log(palindroCheck(parola));



function palindroCheck(word) {
  let alorap = word.split("").reverse().join("");
  console.log(alorap);
  if (alorap.toLowerCase() == parola.toLowerCase() ){
    return 'Si è palindromo'
  }
  return 'No non è palindromo'
}