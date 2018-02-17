let background = document.getElementById("main");

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

chrome.storage.sync.get(apiMap[0], function(item) {
  getJSONFromAPI(`${item.url}/image`)
    .then(backgroundURL => {
      background.style.background = `url('${backgroundURL}') no-repeat center center fixed`;
      background.style.backgroundSize = 'cover';
    });

  getJSONFromAPI(`${item.url}/quote`)
    .then(quote => {
      let quoteP = document.getElementById('quote');
      let authorP = document.getElementById('author');
      quoteP.innerHTML = quote.quote;
      authorP.innerHTML = quote.author;
    });
});
