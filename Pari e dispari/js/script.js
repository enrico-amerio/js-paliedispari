const parDis = prompt('inserisci pari o dispari')
const numeroUtente = prompt('inserisci un numero da 1 a 5');
console.log(randomNum(1, 5));
const totNum = parseInt(numeroUtente) + randomNum(1, 5);
console.log(totNum);
pariDispari(totNum);
console.log(pariDispari(totNum));

if(pariDispari(totNum) == false && parDis == 'dispari'){
  console.log('vince il Giocatore');
} else if (pariDispari(totNum) == true && parDis == 'pari') {
  console.log('vince il Giocatore');
}else{
  console.log('vince PC');
}
  

function randomNum(min, max) {
  return Math.floor(Math.random() * (max - min) + min);
}
function pariDispari(num){
  return num % 2 == 0;
  
}