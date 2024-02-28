const parDis = prompt('inserisci pari o dispari')
const numeroUtente = prompt('inserisci un numero da 1 a 5');
console.log(randomNum(1, 5));
const totNum = parseInt(numeroUtente) + randomNum(1, 5);
console.log(totNum);
pariDispari(totNum);
console.log(pariDispari());
if (parDis === pariDispari()) {
  console.log('vince Giocatore');
  
}else{
  console.log('vince PC');

}


function randomNum(min, max) {
  return Math.floor(Math.random() * (max - min) + min);
}
function pariDispari(num){
  if(num % 2 == 0){
    return 'pari'
  }
  return 'dispari'
}