'use strict';

// etsitään syöttölomake html-sivulta
const tvForm = document.querySelector('#tv');
// etsitään tulosten asitysalue html-sivulta
const results = document.querySelector('#results');

// funktio, joka esittää saadut tulokset html-sivulle.
// Funktion täytyy olla asynkroninen, koska funktiossa on asynkronisia kutsuja (await).
// funktiolla on nyt oltava parametri evt, jotta voidaan estää lomakkeen oletustoiminto.
async function printResults(evt) {
  // estetään lomakkeen oletustoiminto
  evt.preventDefault();
  // luetaan käyttäjän antama arvo hrml-sivun lomakkeelta
  const query = document.querySelector('input[name=q]').value;

  // suoritetaan varsinainen datan haku, voi tulla virheitä => try-catch-finally rakenne
  try {
    // datan hakeminen netin yli, käytetään Fetch-APIa
    const response = await fetch(
        `https://api.tvmaze.com/search/shows?q=${query}`,
    ); // starting data download, fetch returns a promise which contains an object of type 'response'
    const jsonData = await response.json(); // retrieving the data retrieved from the response object using the json() function
    //console.log(jsonData); // log the result to the console

    // tulosten esittäminen html-sivulle
    // tyhjjennetään aluksi tulosalue entisestä datasta
    results.innerHTML = '';

    // esitetään halutut tiedot jokaisesta tv-sarjasta
    // json-muotoinen data tuli listassa => for..of rakenne on tehokas
    for (const tvShow of jsonData) {
      const h2 = document.createElement('h2');
      h2.innerText = tvShow.show.name;
      const img = document.createElement('img');
      img.src = tvShow.show.image?.medium;
      img.alt = tvShow.show.name;
      const a = document.createElement('a');
      a.href = tvShow.show.url;
      a.innerText = 'Go to TV Show';
      const div = document.createElement('div');
      div.innerHTML = tvShow.show.summary;
      const article = document.createElement('article');
      article.append(h2, img, a, div);
      results.append(article);
    }
  } catch (error) {
    console.log(error.message);
  }


}

// tapahtumankäsittelijä html-sivun syöttölomakkeelle,
// siirtää vain toiminnon funktiolle printResults()
tvForm.addEventListener('submit', printResults);



