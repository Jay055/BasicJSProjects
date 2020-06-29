// Initialize Speech Synthesis API
const speechSyn = window.speechSynthesis;

//Grab DOM Elements 
// grab the entire form since it's just one
const textForm = document.querySelector('form');
const textInput = document.querySelector('#text-input'); 
const selectVoice = document.querySelector('#voice-select');
const pitchValue = document.querySelector('#pitch-value');     // text 
const rateValue = document.querySelector('#rate-value'); 
const button = document.querySelector('.btn'); 
const pitch = document.querySelector('#pitch');      // range 
const rate = document.querySelector('#rate'); 


// Init voices array 
let voices = [];

const dankeVoice = () => {
    voices = speechSyn.getVoices(); 
    console.log(voices); 

    // Loop through the voices and create an option for each one
    voices.forEach(voice => {
   // create option element 
    const option = document.createElement('option');
    // Fill option with the voice and language 
    option.textContent = voice.name + '(' + voice.lang + ')';

    
    // Set needed option attributes
    option.setAttribute('data-lang', voice.lang);
    option.setAttribute('data-name', voice.name);
    selectVoice.appendChild(option);
    });
}

// The event is not surported on firefox.
dankeVoice();
if(speechSyn.onvoiceschanged !== undefined ) {
    speechSyn.onvoiceschanged = dankeVoice; // syn
    
}


//     // Loop throught voices and create an option for each one 
//     voices.forEach(voice => { 
//         //Create option element
     
//     })
// }



// Speaking 

const speak = () => {
    // check if speaking , 
    if (speechSyn.speaking){
        console.error('Speaking already..'); 
        return; 
    }
    if (textInput.value !== ''){
        // Get speak text 
        const speakText = new SpeechSynthesisUtterance(textInput.value)
    ;
        // Speak End, event runs when it's done speaking 
        speakText.onend = e => { 
            console.log('Completed Speaking..'); 
        }


        //Speak Error 
        speakText.onerror = e => {
            console.error('Something went wrong');
    }
        // Selected Voice 
        const selectedVoice = selectVoice.selectedOptions[0]
        .getAttribute('data-name');

        // Loop through voices 
        voices.forEach(voice => { 
            if(voice.name === selectedVoice) { 
                speakText.voice = voice; 
            }
        }); 
        // Set pitch and rate 
        speakText.rate = rate.value; 
        speakText.pitch = pitch.value; 
        // Speak 
        speechSyn.speak(speakText);

    }
};

// Event Listeners 

// Text form submit 
textForm.addEventListener('submit', e=> {
    e.preventDefault();
    speak();
    textInput.blur();
});

// Set the rate 
rate.addEventListener ('change', e =>    (rateValue.textContent = rate.value));   // rate.textContent = rateValue

// Set the pitch , we add an event listener to listen to the range changes, then give the current value of the range to the 
// text content 
pitch.addEventListener ('change', e => (pitchValue.textContent = pitch.value));



// Voice Select change 
selectVoice.addEventListener('change', e=> speak());

// button 
button.addEventListener('click', e => speak());


