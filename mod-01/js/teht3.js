// käytetään ns.tiukkaa moodia
'use strict';

// kysytään käyttäjältä kolme kokonaislukua,
// kaksi ekaa luetaan nyt merkkijonona.
const luku1String = prompt("Anna kokonaisluku 1/3: ");
const luku2String = prompt("Anna kokonaisluku 2/3: ");
// muutetaan viimeinen luku suoraan luvuksi, huomaa etuplussa +prompt()
const luku3 = +prompt("Anna kokonaisluku 3/3: ");

// muunnetaan 2 ekaa merkkijonoa kokonaisluvuksi
const luku1 = parseInt(luku1String);
const luku2 = parseInt(luku2String);

// tehdään halutut laskutoimitukset
const summa = luku1 + luku2 + luku3;
const tulo = luku1 * luku2 * luku3;
const ka = (luku1 + luku2 + luku3) / 3;

// etsitään tulostuspaikka html-sivulta
const tulostusElem = document.querySelector('#target');

// nyt html-sivun elementissä on jo tekstiä, joten käytetään +=
// tällöin uudet tulostukset tulevat entisten perään
tulostusElem.innerHTML += `summa: ${summa} <br>`;
tulostusElem.innerHTML += `tulo: ${tulo} <br>`;
// tulostetaan keskiarvo 2 desimaalilla
tulostusElem.innerHTML += `keskiarvo: ${ka.toFixed(2)} <br>`;

