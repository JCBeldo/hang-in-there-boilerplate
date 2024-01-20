// query selector variables go here 👇
// main poster
const posterImage = document.querySelector('.poster-img');
const posterTitle = document.querySelector('.poster-title');
const posterQuote = document.querySelector('.poster-quote');
const mainPoster = document.querySelector('.main-poster');
//buttons
const savePoster = document.querySelector('.save-poster');
const showSaved = document.querySelector('.show-saved');
const showRandom = document.querySelector('.show-random');
const showForm = document.querySelector('.show-form');
const showMain = document.querySelector('.show-main');
const backToMain = document.querySelector('.back-to-main');
const makePoster = document.querySelector('#make-poster');
// pages/forms
const savedPostersView = document.querySelector('.saved-posters')
const posterForm = document.querySelector('.poster-form')

let savedPosterGrid = document.querySelector('.saved-posters-grid');

// we've provided you with some data to work with 👇
var images = [
  "./assets/bees.jpg",
  "./assets/bridge.jpg",
  "./assets/butterfly.jpg",
  "./assets/cliff.jpg",
  "./assets/elephant.jpg",
  "./assets/flock.jpg",
  "./assets/fox.jpg",
  "./assets/frog.jpg",
  "./assets/horse.jpg",
  "./assets/lion.jpg",
  "./assets/mountain.jpg",
  "./assets/pier.jpg",
  "./assets/puffins.jpg",
  "./assets/pug.jpg",
  "./assets/runner.jpg",
  "./assets/squirrel.jpg",
  "./assets/tiger.jpg",
  "./assets/turtle.jpg"
];
var titles = [
  "determination",
  "success",
  "inspiration",
  "perspiration",
  "grit",
  "empathy",
  "feelings",
  "hope",
  "believe",
  "try",
  "conviction",
  "accomplishment",
  "achievement",
  "ambition",
  "clarity",
  "challenge",
  "commitment",
  "confidence",
  "action",
  "courage",
  "focus",
  "breathe",
  "gratitude",
  "imagination",
  "kindness",
  "mindfulness",
  "knowledge",
  "opportunity",
  "passion",
  "patience",
  "practice",
  "smile",
  "trust",
  "understanding",
  "wisdom"
];
var quotes = [
  "Don’t downgrade your dream just to fit your reality, upgrade your conviction to match your destiny.",
  "You are braver than you believe, stronger than you seem and smarter than you think.",
  "You are confined only by the walls you build yourself.",
  "The one who has confidence gains the confidence of others.",
  "Act as if what you do makes a difference. It does.",
  "Success is not final, failure is not fatal: it is the courage to continue that counts.",
  "Never bend your head. Always hold it high. Look the world straight in the eye.",
  "What you get by achieving your goals is not as important as what you become by achieving your goals.",
  "Believe you can and you're halfway there.",
  "When you have a dream, you've got to grab it and never let go.",
  "I can't change the direction of the wind, but I can adjust my sails to always reach my destination.",
  "No matter what you're going through, there's a light at the end of the tunnel.",
  "It is our attitude at the beginning of a difficult task which, more than anything else, will affect its successful outcome.",
  "Life is like riding a bicycle. To keep your balance, you must keep moving.",
  "Just don't give up trying to do what you really want to do. Where there is love and inspiration, I don't think you can go wrong.",
  'Limit your "always" and your "nevers."',
  "You are never too old to set another goal or to dream a new dream.",
  "Try to be a rainbow in someone else's cloud.",
  "You do not find the happy life. You make it.",
  "Inspiration comes from within yourself. One has to be positive. When you're positive, good things happen.",
  "Sometimes you will never know the value of a moment, until it becomes a memory.",
  "The most wasted of days is one without laughter.",
  "You must do the things you think you cannot do.",
  "It isn't where you came from. It's where you're going that counts.",
  "It is never too late to be what you might have been.",
  "Happiness often sneaks in through a door you didn't know you left open.",
  "We must be willing to let go of the life we planned so as to have the life that is waiting for us.",
  "Never limit yourself because of others’ limited imagination; never limit others because of your own limited imagination.",
  "Be the change that you wish to see in the world.",
  "Let us make our future now, and let us make our dreams tomorrow's reality.",
  "You don't always need a plan. Sometimes you just need to breathe, trust, let go, and see what happens.",
  "If I cannot do great things, I can do small things in a great way.",
  "Don't wait. The time will never be just right.",
  "With the right kind of coaching and determination you can accomplish anything.",
  "If you have good thoughts they will shine out of your face like sunbeams and you will always look lovely.",
  "No matter what people tell you, words and ideas can change the world.",
  "Each person must live their life as a model for others.",
  "A champion is defined not by their wins but by how they can recover when they fall."
];
var savedPosters = [];
var currentPoster;
var miniPoster;

var randomPoster = createPoster(images[getRandomIndex(images)], titles[getRandomIndex(titles)], quotes[getRandomIndex(quotes)]);
posterImage.src = randomPoster.imageURL;
posterTitle.innerText = randomPoster.title;
posterQuote.innerText = randomPoster.quote;
currentPoster = randomPoster;

// initialize buttons
savePoster.onclick = function() {addPoster()};
showSaved.onclick = function() {showSavedPosters()};
showRandom.onclick = function() {updatePoster()};
showForm.onclick = function() {unhideForm()};
// makePoster.onchange = function() {userPoster()};
backToMain.onclick = function() {unhideSaved()};
showMain.onclick = function() {unhideForm()};


// event listeners go here 👇
savedPosterGrid.addEventListener('dblclick', function(event) { //need to pass in event in both function() and block.
  removeSavedPoster(event)
});

// document.addEventListener('DOMContentLoaded', function() {addPoster()});

// functions and event handlers go here 👇

// function createRemoveHandler(event, id) {
//   console.log('handler invoked');
//     removeSavedPoster(event, id);
// }

function getRandomIndex(array) {
  return Math.floor(Math.random() * array.length);
}

function createPoster(imageURL, title, quote) {
  return {
    id: Date.now(), 
    imageURL: imageURL, 
    title: title, 
    quote: quote
  }
}

function unhideSaved() {
  savedPostersView.classList.toggle('hidden');
  mainPoster.classList.toggle('hidden');
}

function unhideForm() {
  posterForm.classList.toggle('hidden');
  mainPoster.classList.toggle('hidden');
}

function userPoster(event) {
  event.preventDefault();
  let userPosterImage = document.querySelector('#poster-image-url').value;
  let userPosterTitle = document.querySelector('#poster-title').value;
  let userPosterQuote = document.querySelector('#poster-quote').value;

  var poster = createPoster(userPosterImage, userPosterTitle, userPosterQuote);
  images.push(poster.imageURL);
  titles.push(poster.title);
  quotes.push(poster.quote);

  currentPoster = poster;

  posterImage.src = poster.imageURL;
  posterTitle.innerText = poster.title;
  posterQuote.innerText = poster.quote;
  unhideForm();
}

function addPoster() {
  if (!savedPosters.includes(currentPoster)) {
  savedPosters.push(currentPoster);
  console.log(savedPosters);
  }
  else {
    console.log(`You already saved ${currentPoster.title}!`);
  }
}

function createMiniPosters() {
  const mpi = 'miniPosterImg'
  const mpt = 'miniPosterTitle'
  const mpq = 'miniPosterQuote'
  savedPosterGrid.innerHTML = '';
  for (i = 0; i < savedPosters.length; i++) {
    var imgOb = savedPosters[i];
    let miniImg = `<img id="mini-poster-img${i}" src="">`;
    let miniTitle = `<h2 id="mini-poster-title${i}"> </h2>`;
    let miniQuote = `<h4 id="mini-poster-quote${i}"> </h4>`;

    const article = document.createElement('article');
    article.className = 'mini-poster';
    article.id = `article-id-${i}`;
    article.innerHTML = miniImg + miniTitle + miniQuote;
    eval(`let miniPoster${i} = document.querySelector("#article-id-${i}");`)
    savedPosterGrid.appendChild(article);
    
    eval(`var ${mpi}${i} = document.querySelector('#mini-poster-img${i}');`)
    eval(`var ${mpt}${i} = document.querySelector('#mini-poster-title${i}');`)
    eval(`var ${mpq}${i} = document.querySelector('#mini-poster-quote${i}');`)

    eval(`${mpi}${i}`).src = imgOb.imageURL;
    eval(`${mpt}${i}`).innerText = imgOb.title;
    eval(`${mpq}${i}`).innerText = imgOb.quote;
  }
}

function removeSavedPoster(event) {
  console.log('function invoked')
  var mPI = event.target.id;
  var deleteById;
  for (i = 0; i < mPI.length; i++) { //edgecase if user saves over 10 and tries to delete after 10
    if (i === 11) {
      deleteById = mPI.charAt(i)
    }
  }
  miniPoster = document.querySelector(`#${mPI}`)
  if (miniPoster) {
    console.log(miniPoster)
    miniPoster.parentNode.removeChild(miniPoster);
    savedPosters.splice(deleteById,1)
  }
  else {
    console.log('Child not found!')
  }
}

function showSavedPosters() {
  createMiniPosters();
  unhideSaved();
}

function updatePoster() {
  var poster = createPoster(images[getRandomIndex(images)], titles[getRandomIndex(titles)], quotes[getRandomIndex(quotes)]);
  posterImage.src = poster.imageURL;
  posterTitle.innerText = poster.title;
  posterQuote.innerText = poster.quote;
  currentPoster = poster;
}