'use strict';

// etsitään kuvan paikka html-sivulta (id=target)
const imgElem = document.querySelector('#target');

// etsitään tekstikappale html-sivulta laukaisee tapahtumia
const pElem = document.querySelector('#trigger');

// funktio, mitä tehdään kun hiiri tulee päälle
function hiiriPaalle(evt) {
    imgElem.src = "img/picB.jpg";
}

//funktio, mitä tehdään kun hiiri lähtee pois
function hiiriPois(evt) {
    imgElem.src = "img/picA.jpg";
}

// tapahtumankäsittelijä, kun hiiri tulee tekstin päälle
pElem.addEventListener('mouseenter', hiiriPaalle);

// tapahtumankäsittelijä, kuun hiiri lähtee tekstin päältä pois
pElem.addEventListener('mouseleave', hiiriPois);

