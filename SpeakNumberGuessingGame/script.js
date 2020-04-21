


// Get DOM Elements 
const msgEl = document.getElementById('msg');

// Declare Function
const randomNum = getRandomNumber(); 




// Get Speech Recognition
window.SpeechRecognition = 
  window.SpeechRecognition || window.webkitSpeechRecognition;

let recognition = new window.SpeechRecognition();


//Start recognition and game 
recognition.start();


// Capture user speach. 
function onSpeak(e) { 
  //console.log(e); // shows the speak event, lots of results gotten from speaking event
  const msg = e.results[0][0].transcript;
  // console.log(msg);

  writeMessage(msg);
  checkNumber(msg);

}

// Write what user speaks 
function writeMessage(msg) {
  msgEl.innerHTML = `
  <div> You said: </div>
  <span class="box">${msg}</span>
  `
}

// Check msg against number 
function checkNumber(msg) {
  const num = +msg;

  // Check if valid number 
  if(Number.isNaN(num)) {
    msgEl.innerHTML += '<div>That is not a valid number </div>';
    return;
  }
  
  // Check if its in range 
  if(num > 100 || num < 1 ){
  msgEl.innerHTML += '<div> Number must be between 1 - 100</div>'}

  if(num === randomNum) {
    document.body.innerHTML = `
    <h2> Congrats! You have guessed the number! <br><br>
    It was ${num}</h2>
    <button class="play-again" id="play-again">Play Again</button>
    `;
  } else if (num > randomNum) {
    msgEl.innerHTML += '<div> GO LOWER</div>';
  } else {
    msgEl.innerHTML += '<div> GO HIGHER </div>';
  }

}






//console.log('Number:', randomNum);
// Generate Random number 
function getRandomNumber() { 
  // Gives us 1 - 99  + 1 
  return Math.floor(Math.random() * 100 ) + 1;
}


// Speak Result, on getting the result(speech) initialize onSpeak  **************************
recognition.addEventListener('result', onSpeak);

// End SR Service, on completion of the speech 
recognition.addEventListener('end', () => recognition.start());

// Play again 
document.body.addEventListener('click', (e) => {
  if(e.target.id == 'play-again'){
    window.location.reload();
  }
})





