'use strict';

// lista käyttäjän numeroita varten
const numbers = [];

// kysytään käyttäjältä 5 numeroa, muunnetaan ne heti numeroksi
for (let nr = 0; nr < 5; nr++ )  {
    // huomaa (nr+1) => käyttäjälle ilmoitetaan ekana 1/5 eikä 0/5
    let value = parseInt( prompt(`Anna numero ${nr+1} / 5: `));
    // lisätään saatu numero listan loppuun
    numbers.push(value);
}

// etsitään tulostuksen kohta web-sivulta
const targetElem = document.querySelector('#target');

targetElem.innerHTML = `Syöttämäsi luvut takaperin: <br>`;

// Pahus, ei saakaan käyttää numbers.reverse()
for (let index = numbers.length - 1; index >= 0; index-- ) {
    targetElem.innerHTML += `${numbers[index]} <br>`;
}
