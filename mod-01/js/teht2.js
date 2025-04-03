// käytetään ns. tiukkaa moodia, löydetään helpommin mahdolliset virheet
'use strict';

// kysytään käyttäjältä nimi
let nimi = prompt("Mikä on nimesi? ")

// etsitään html-sivulta tulostuskohta
const tulostusElem = document.querySelector('#target');

// tulostetaan vastaus html-sivulle,
// huomaa erikoiset heittomerkit `...`,
// pakko olla koska tulostetaan myös html-koodeja
tulostusElem.innerHTML = `Hello, ${nimi}!`;