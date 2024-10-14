let km = prompt('Quanti chilometri vuoi percorrere?');
let age = prompt('Quanti anni hai?');

const pricePerKm = 0.21;
let numberKm = parseInt(km);
let numberAge = parseInt(age);

let price = numberKm*pricePerKm;
let discount = 0;

if(numberAge<18){
    discount = 20;
}
else if(numberAge>65){
    discount=40;
}

if(discount!=0){
    console.log(`Importo da tariffario: €${price.toFixed(2)}`);
    console.log(`Hai diritto ad uno sconto del ${discount}%!`)
}

price = price - ((price * discount)/100);

console.log(`Importo dovuto: €${price.toFixed(2)}`);
