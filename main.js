document.getElementById('display-quote').innerHTML = document.getElementById('quote').innerHTML;

document.getElementById('form').addEventListener("submit", function() {
  var q = document.getElementById('m-text').value;
  console.log('q', q);
  window.open(`https://google.com/search?q=${q}`);
  chrome.tabs.getCurrent(function(tab) {
    chrome.tabs.remove(tab.id, function() { });
  });
});

var displayQuote = document.getElementById('display-quote');
displayQuote.addEventListener("mouseover", function useAuthor() {
  displayQuote.innerHTML = document.getElementById('author').innerHTML;
});

displayQuote.addEventListener("mouseleave", function useQuote() {
  displayQuote.innerHTML = document.getElementById('quote').innerHTML;
});
