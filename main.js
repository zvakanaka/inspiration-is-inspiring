const SERVER_NAME = 'https://howtoterminal.com/inspiration';
// const SERVER_NAME = 'http://localhost:5555';
const BASE_URL = `${SERVER_NAME}`;
let background = document.getElementById("main");

function getJSONFromAPI(path) {
  return fetch(`${BASE_URL}${path}`, { mode: 'cors' })
    .then(res => {
      if (typeof res === 'string') return false;
      return res.json();
    });
}

getJSONFromAPI('/image')
  .then(backgroundURL => {
    background.style.background = `url('${backgroundURL}') no-repeat center center fixed`;
    background.style.backgroundSize = 'cover';
  });

getJSONFromAPI('/quote')
  .then(quote => {
    let quoteP = document.getElementById('quote');
    let authorP = document.getElementById('author');
    quoteP.innerHTML = quote.quote;
    authorP.innerHTML = quote.author;
  });
