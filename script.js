alert('Salam')

let azn = prompt('Nece manat cevirmek isteyirsiniz?')
let usd
let rub
let tl
let euro
let yuan

usd = azn * 0.68;
rub = azn * 35.92;
tl = azn * 10.94;
euro = azn * 0.55; 
yuan = azn * 4.26;

let pul = azn + '₼ = ' + usd + '$, ' + rub + '₽, ' + tl + 'TL, ' + euro + '€, ' + yuan + '¥, ';

document.getElementById('murad').innerHTML = pul;
