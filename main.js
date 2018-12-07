const background = document.getElementById("main");
const quoteP = document.getElementById('quote');
const authorEl = document.getElementById('author');

function getJSONFromAPI(path) {
  return fetch(path, { mode: 'cors' })
    .then(res => {
      if (typeof res === 'string') return false;
      return res.json();
    });
}

const apiMap = [
  {
    name: 'default',
    url: 'https://inspiration-api.herokuapp.com',
    description: 'Wise old men.'
  },
  {
    name: 'lds',
    url: 'https://lds-inspiration-api.herokuapp.com',
    descrition: 'Gospel quotes from General Conferences'
  },
  {
    name: 'alternative'
  }
];

function setError(err) {
  background.style.background = 'black';
  const footer = document.querySelector('footer');
  footer.textContent = `Error; ${err}`;
  authorEl.textContent = '';
}

chrome.storage.sync.get(apiMap[0], function(item) {
  getJSONFromAPI(`${item.url}/image`)
    .then(backgroundURL => {
      background.style.background = `url('${backgroundURL}') no-repeat center center fixed`;
      background.style.backgroundSize = 'cover';
    }).catch(err => {
      setError(err);
    });

  getJSONFromAPI(`${item.url}/quote`)
    .then(quote => {
      quoteP.textContent = quote.quote;
      authorEl.textContent = quote.author;
      if (quote.hasOwnProperty('link')) authorEl.href = quote.link;
    }).catch(err => {
      setError(err);
    });
});
