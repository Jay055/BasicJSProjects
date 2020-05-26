
// initializing the init function on loading 
window.addEventListener('load', init); 


//Global varaibles 

// Available levels 
const levels = { 
    easy: 5,
    medium: 3,
    hard: 2
}
// To change level 
const currentLevel = levels.hard;
let time = currentLevel; 
let score = 0; 
// if the game is going on
let isPlaying

//DOM Elements // DOM Elements
const wordInput = document.querySelector('#word-input');
const currentWord = document.querySelector('#current-word');
const scoreDisplay = document.querySelector('#score');
const timeDisplay = document.querySelector('#time');
const message = document.querySelector('#message');
const seconds = document.querySelector('#seconds');

let selectList= document.getElementById("list");
var chooseLevel = selectList.options[selectList.selectedIndex].value;

console.log(chooseLevel);
// const levelMedium =document.querySelector('#Medium');
// const levelHard =document.querySelector('Hard');
// Words to be typesd 
const words = [
    'hat',
    'river',
    'lucky',
    'statue',
    'generate',
    'stubborn',
    'cocktail',
    'runaway',
    'joke',
    'developer',
    'establishment',
    'hero',
    'javascript',
    'nutrition',
    'revolver',
    'echo',
    'siblings',
    'investigate',
    'horrendous',
    'symptom',
    'laughter',
    'magic',
    'master',
    'space',
    'definition'
  ];

  // Initialize Game 
  function init() {
      // show number of seconds 
      seconds.innerHTML = chooseLevel;
      // load word from array 
      showWord(words); 
      // Start matching on word input, on keyboard input initiate stattmartch
      wordInput.addEventListener('input', startMatch);
      //Call countdown every second 
      setInterval(countdown, 1000); 
       // Check game status, if the game is still on

    setInterval(checkStatus, 50);
  }
      // Start Match 
      function startMatch() { 
          if(matchWords()){ 
             isPlaying = true; 
             time = chooseLevel + 1; 
             showWord(words); 
             // clear the input 
             wordInput.value = '';
             score++; 
          }      

          // If score is -1, display 0
          if(score === -1) { 
            scoreDisplay.innerHTML = 0;
          } else {
              scoreDisplay.innerHTML = score;
          }              
      }
      // Match current word to word input 
      function matchWords(){ 
        if(wordInput.value === currentWord.innerHTML){
            message.innerHTML = 'Correct!!!'; 
            return true; 
      } else {
          message.innerHTML = '';
          return false;
      }
    }
      // Pick & show random word 
      function showWord(words){
          // Generate random array index 
          const randIndex = Math.floor(Math.random() * words.length); 
          // Output random word 
          currentWord.innerHTML = words[randIndex]; 
      }

      // Countdown timer 
      function countdown() { 
          // Make sure time is not run out, starts from default of 5-html 
          if(time>0) { 
              // Decrement
              time--;
          }else if(time===0){ 
              // Game is over 
              isPlaying = false; 
            
          }
          // Show time 
          timeDisplay.innerHTML = time;
      }

      // Check game status 
      function checkStatus() { 
          if(!isPlaying && time ===0) { 
              message.innerHTML = 'Game Over!!!'; 
              score = -1;
          }
      };
   