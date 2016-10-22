
var authoredQuotes = [{ author: "Albert Einstein",
                        quote: "Inspiration is more than knowledge."
                      },
                      {
                        author: "Albert Einstein",
                        quote: "Two things are infinite: the universe and human stupidity; and I'm not sure about the universe."
                      },
                      {
                        author: "Henry Ford",
                        quote: "Quality means doing it right when no one is looking."
                      },
                      {
                        author: "Henry Ford",
                        quote: "Don't find fault, find a remedy."
                      },
                      {
                        author: "Henry Ford",
                        quote: "My best friend is the one who brings out the best in me."
                      },
                      {
                        author: "Mahatma Gandhi",
                        quote: "You must be the change you wish to see in the world."
                      },
                      {
                        author: "Mahatma Gandhi",
                        quote: "The weak can never forgive. Forgiveness is the attribute of the strong."
                      },
                      {
                        author: "Mahatma Gandhi",
                        quote: "Happiness is when what you think, what you say, and what you do are in harmony."
                      },
                      {
                        author: "Mahatma Gandhi",
                        quote: "An eye for eye only ends up making the whole world blind."
                      },
                      {
                        author: "Mahatma Gandhi",
                        quote: "You must not lose faith in humanity. Humanity is an ocean; if a few drops of the ocean are dirty, the ocean does not become dirty."
                      },
                      {
                        author: "Mahatma Gandhi",
                        quote: "The best way to find yourself is to lose yourself in the service of others."
                      },
                      {
                        author: "Mahatma Gandhi",
                        quote: "A man is but the product of his thoughts; what he thinks, he becomes."
                      },
                      {
                        author: "C.S. Lewis",
                        quote: "Love is not affectionate feeling, but a steady wish for the loved person's ultimate good as far as it can be obtained."
                      },
                      {
                        author: "C.S. Lewis",
                        quote: "Aim at heaven and you will get earth thrown in. Aim at earth and you get neither."
                      },
                      {
                        author: "C.S. Lewis",
                        quote: "Faith, in the sense in which I am here using the word, is the art of holding on to things your reason has once accepted, in spite of your changing moods."
                      },
                      {
                        author: "C.S. Lewis",
                        quote: "Don't let your happiness depend on something you may lose."
                      },
                      {
                        author: "Nelson Mandela",
                        quote: "Education is the most powerful weapon which you can use to change the world."
                      },
                      {
                        author: "Nelson Mandela",
                        quote: "I learned that courage was not the absence of fear, but the triumph over it. The brave man is not he who does not feel afraid, but he who conquers that fear."
                      },
                      {
                        author: "Nelson Mandela",
                        quote: "It always seems impossible until it's done"
                      },
                      {
                        author: "Nelson Mandela",
                        quote: "For to be free is not merely to cast off one's chains, but to live in a way that respects and enhances the freedom of others."
                      },
                      {
                        author: "Nelson Mandela",
                        quote: "There is nothing like returning to a place that remains unchanged to find the ways in which you yourself have altered."
                      },
                      {
                        author: "Nelson Mandela",
                        quote: "The greatest glory in living lies not in never falling, but in rising every time we fall."
                      },
                      {
                        author: "Nelson Mandela",
                        quote: "There is no passion to be found playing small - in settling for a life that is less than the one you are capable of living."
                      },
                      {
                        author: "Nelson Mandela",
                        quote: "I am the master of my fate; I am the captain of my soul."
                      },
                      {
                        author: "Nelson Mandela",
                        quote: "I am not a saint, unless you think of a saint as a sinner who keeps on trying."
                      },
                      {
                        author: "Mr. Rogers",
                        quote: "When I was a boy and I would see scary things in the news, my mother would say to me, \"Look for the helpers. You will always find people who are helping.\""
                      },
                      {
                        author: "Mr. Rogers",
                        quote: "Knowing that we can be loved exactly as we are gives us all the best opportunity for growing into the healthiest of people."
                      },
                      {
                        author: "Mr. Rogers",
                        quote: "How sad it is that we give up on people who are just like us."
                      },
                      {
                        author: "Mr. Rogers",
                        quote: "Feeling good about ourselves is as essential in our being able to love others."
                      }];

//based on MDN's random funtion
function getRandomIndex(arr) {
    var min = 0;
    var max = arr.length-1;
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

var quote = authoredQuotes[getRandomIndex(authoredQuotes)];
var quoteP = document.getElementById('quote');
var authorP = document.getElementById('author');
quoteP.innerHTML = quote.quote;
authorP.innerHTML = quote.author;

document.getElementById('form').addEventListener("submit", function() {
  var q = document.getElementById('m-text').value;
  console.log('q', q);
  window.open(`https://google.com/search?q=${q}`);
  chrome.tabs.getCurrent(function(tab) {
    chrome.tabs.remove(tab.id, function() { });
  });
});