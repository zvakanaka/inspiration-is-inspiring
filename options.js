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
const apiChoiceSelect = document.querySelector('#api-choices');
let choice = apiChoiceSelect.value;
const alternativeApi = document.querySelector('#alternative-api');
if (choice === 'alternative') alternativeApi.classList.remove('hidden');
function showHideAlternative() {
  choice = apiChoiceSelect.value;
  if (choice === 'alternative') alternativeApi.classList.remove('hidden');
  else alternativeApi.classList.add('hidden');
}
apiChoiceSelect.onchange = showHideAlternative;
function save_options() {
  let chosen = apiMap.find(api => api.name === choice);
  if (chosen.name === 'alternative') {
    chosen.url = document.querySelector('#alternative-text').value;
    chosen.description = '';
  }
  chrome.storage.sync.set({
    url: chosen.url,
    name: chosen.name,
    description: chosen.description
  }, function() {
    // Update status to let user know options were saved.
    var status = document.getElementById('status');
    status.textContent = 'Options saved.';
    setTimeout(function() {
      status.textContent = '';
    }, 750);
  });
}

// Restores select box state using the preferences
function restore_options() {
  chrome.storage.sync.get(apiMap[0], function(items) {
    document.getElementById('api-choices').value = items.name;
    document.querySelector('#alternative-text').value = items.url;
    showHideAlternative();
  });
}
document.addEventListener('DOMContentLoaded', restore_options);
document.getElementById('save').addEventListener('click',
    save_options);
