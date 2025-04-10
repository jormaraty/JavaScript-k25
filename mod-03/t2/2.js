'use strict';

// etsitään ul-tagi html-sivulta
const ulElem = document.querySelector('#target');

// luodaan uusi li-elementti
const li1Elem = document.createElement('li');
// lisätään li-elementille sen sisältö
li1Elem.innerHTML = `First item`;
// lisään ul-elementin lapseksi äsken luodun li-elementin
// luotu li-elementti näkyy heti html-sivulla
ulElem.appendChild(li1Elem);

// luodaan toinen ja kolmas li-elementti
const li2Elem = document.createElement('li');
const text2 = document.createTextNode('Second item');
// lisätään luotu teksti-elementti li-elementin sisään
li2Elem.appendChild(text2);

const li3Elem = document.createElement('li');
const text3 = document.createTextNode('Third item');
li3Elem.appendChild(text3);

// lisätään toinen ja kolmas li-elementti ul-elementin sisään
// eli ul-elementin lapseksi
ulElem.appendChild(li2Elem);
ulElem.appendChild(li3Elem);

// lisätään css-luokkamääritys toiselle li-elementille
li2Elem.classList.add('my-item');


