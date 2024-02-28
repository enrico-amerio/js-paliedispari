const parola = prompt('inserisci una parola');
// console.log(palindroCheck(parola));
console.log(reverseString(parola));



// function palindroCheck(word) {
//   let alorap = word.split("").reverse().join("");
//   console.log(alorap);
//   if (alorap.toLowerCase() == parola.toLowerCase() ){
//     return 'Si è palindromo'
//   }
//   return 'No non è palindromo'
// }

function reverseString(word) {
  var alorap = "";
  for (var i = word.length - 1; i >= 0; i--) {
      alorap += word[i];
  }
  if (alorap.toLowerCase() == parola.toLowerCase() ){
         return 'Si è palindromo'
       }
       return 'No non è palindromo'
  
}
