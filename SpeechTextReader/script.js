
//<<<<<<<<<<<<<<<----------------- CHANGE VOICE AND CUSTOM TEXT BOX --------------------->>>>>>>>>>>>>>>>>>>>>> //


const main = document.querySelector('main');
const voicesSelect = document.getElementById('voice');
const textArea = document.getElementById('text');
const readBtn = document.getElementById('read');
const toggleBtn = document.getElementById('toggle');
const closeBtn = document.getElementById('close');

// Create images and text for UI, we can get from an API also
const data = [
  {
    image: './img/drink.jpg',
    text: "I'm Thirsty"
  },
  {
    image: './img/food.jpg',
    text: "I'm Hungry"
  },
  {
    image: './img/tired.jpg',
    text: "I'm Tired"
  },
  {
    image: './img/hurt.jpg',
    text: "I'm Hurt"
  },
  {
    image: './img/happy.jpg',
    text: "I'm Happy"
  },
  {
    image: './img/angry.jpg',
    text: "I'm Angry"
  },
  {
    image: './img/sad.jpg',
    text: "I'm Sad"
  },
  {
    image: './img/scared.jpg',
    text: "I'm Scared"
  },
  {
    image: './img/outside.jpg',
    text: 'I Want To Go Outside'
  },
  {
    image: './img/home.jpg',
    text: 'I Want To Go Home'
  },
  {
    image: './img/school.jpg',
    text: 'I Want To Go To School'
  },
  {
    image: './img/grandma.jpg',
    text: 'I Want To Go To Grandmas'
  }
];


data.forEach(createBox);


// Create speech Boxes , loops through the entire data
function createBox(item){
  const box = document.createElement('div');


  //Destructure the image and text from the object  
  const {image, text} = item;

  box.classList.add('box');
  box.innerHTML = `
  <img src= "${image}" alt="${text}"/>
  <p class="info">${text}</p>

  `;

// Add event listener on click to read out $(text)
  box.addEventListener('click', () => {
    setTextMessage(text);
    speakText();

    // Add show effects for active box
    box.classList.add('active');
    setTimeout(() => box.classList.remove('active'), 800);
  });
  // Append Box to the DOM 
  main.appendChild(box);
}


//Init Speech sync 
const message = new  SpeechSynthesisUtterance();

  // Store voices 
  // Create array to store voices 
  let voices = [];

  function getVoices() { 
    voices = speechSynthesis.getVoices(); 

    voices.forEach(voice =>  {
      const option = document.createElement('option');

      option.value = voice.name; 
      option.innerText = `${voice.name} ${voice.lang}`;
        // console.log(option);

      voicesSelect.appendChild(option);
      // postsContainer.appendChild(postEl);
    });
  }

  //Set text, 
  function setTextMessage(text) { 
    message.text = text;
     }

  // Speak text 
  function speakText() {
    speechSynthesis.speak(message);
  }


//Set voice 
function setVoice(e) {
  message.voice = voices.find(voice => voice.name === e.target.value);
}



// Voices changed 
speechSynthesis.addEventListener('voiceschanged', getVoices);


// Toggle text box 
toggleBtn.addEventListener('click', () => document.getElementById('text-box').classList.toggle('show'));

// Close button
closeBtn.addEventListener('click', () => document.getElementById('text-box').classList.remove('show'));


//Read text button, set message to be textArea.value
readBtn.addEventListener('click', () => {
  setTextMessage(textArea.value);
  speakText();
});



//Change Voice
voicesSelect.addEventListener('change', setVoice);
getVoices();




































//<--------------------->>>>>>>>>>>>>>>>>>>>>> //


// const main = document.querySelector('main');
// const voicesSelect = document.getElementById('voice');
// const textArea = document.getElementById('text');
// const readBtn = document.getElementById('read');
// const toggleBtn = document.getElementById('toggle');
// const closeBtn = document.getElementById('close');

// // Create images and text for UI, we can get from an API also
// const data = [
//   {
//     image: './img/drink.jpg',
//     text: "I'm Thirsty"
//   },
//   {
//     image: './img/food.jpg',
//     text: "I'm Hungry"
//   },
//   {
//     image: './img/tired.jpg',
//     text: "I'm Tired"
//   },
//   {
//     image: './img/hurt.jpg',
//     text: "I'm Hurt"
//   },
//   {
//     image: './img/happy.jpg',
//     text: "I'm Happy"
//   },
//   {
//     image: './img/angry.jpg',
//     text: "I'm Angry"
//   },
//   {
//     image: './img/sad.jpg',
//     text: "I'm Sad"
//   },
//   {
//     image: './img/scared.jpg',
//     text: "I'm Scared"
//   },
//   {
//     image: './img/outside.jpg',
//     text: 'I Want To Go Outside'
//   },
//   {
//     image: './img/home.jpg',
//     text: 'I Want To Go Home'
//   },
//   {
//     image: './img/school.jpg',
//     text: 'I Want To Go To School'
//   },
//   {
//     image: './img/grandma.jpg',
//     text: 'I Want To Go To Grandmas'
//   }
// ];


// data.forEach(createBox);


// // Create speech Boxes , loops through the entire data
// function createBox(item){
//   const box = document.createElement('div');


//   //Destructure the image and text from the object  
//   const {image, text} = item;

//   box.classList.add('box');
//   box.innerHTML = `
//   <img src= "${image}" alt="${text}"/>
//   <p class="info">${text}</p>

//   `;

// // 
//   box.addEventListener('click', () => {
//     setTextMessage(text);
//     speakText();

//     // Add active effect 
//     box.classList.add('active');
//     setTimeout(() => box.classList.remove('active'), 800);
//   });




  
//   // Append Box to the DOM 
//   main.appendChild(box);
// }


// //Init Speech sync 
// const message = new  SpeechSynthesisUtterance();

//   // Store voices 
//   // Create array to store voices 
//   let voices = [];

//   function getVoices() { 
//     voices = speechSynthesis.getVoices(); 

//     voices.forEach(voice =>  {
//       const option = document.createElement('option');

//       option.value = voice.name; 
//       option.innerText = `${voice.name} ${voice.lang}`;
//         // console.log(option);

//       voicesSelect.appendChild(option);
//       // postsContainer.appendChild(postEl);
//     });
//   }

//   //Set text 
//   function setTextMessage(text) { 
//     message.text = text;
//   }

//   // Speak text 
//   function speakText() {
//     speechSynthesis.speak(message);
//   }



// // Voices changed 
// speechSynthesis.addEventListener('voiceschanged', getVoices);



// // }

// // Toggle text box 
// toggleBtn.addEventListener('click', () => document.getElementById('text-box').classList.toggle('show'));

// // Close button
// closeBtn.addEventListener('click', () => document.getElementById('text-box').classList.remove('show'));


// getVoices();



































// const main = document.querySelector('main');
// const voicesSelect = document.getElementById('voice');
// const textArea = document.getElementById('text');
// const readBtn = document.getElementById('read');
// const toggleBtn = document.getElementById('toggle');
// const closeBtn = document.getElementById('close');

// // Create images and text for UI, we can get from an API also
// const data = [
//   {
//     image: './img/drink.jpg',
//     text: "I'm Thirsty"
//   },
//   {
//     image: './img/food.jpg',
//     text: "I'm Hungry"
//   },
//   {
//     image: './img/tired.jpg',
//     text: "I'm Tired"
//   },
//   {
//     image: './img/hurt.jpg',
//     text: "I'm Hurt"
//   },
//   {
//     image: './img/happy.jpg',
//     text: "I'm Happy"
//   },
//   {
//     image: './img/angry.jpg',
//     text: "I'm Angry"
//   },
//   {
//     image: './img/sad.jpg',
//     text: "I'm Sad"
//   },
//   {
//     image: './img/scared.jpg',
//     text: "I'm Scared"
//   },
//   {
//     image: './img/outside.jpg',
//     text: 'I Want To Go Outside'
//   },
//   {
//     image: './img/home.jpg',
//     text: 'I Want To Go Home'
//   },
//   {
//     image: './img/school.jpg',
//     text: 'I Want To Go To School'
//   },
//   {
//     image: './img/grandma.jpg',
//     text: 'I Want To Go To Grandmas'
//   }
// ];


// data.forEach(createBox);


// // Create speech Boxes , loops through the entire data
// function createBox(item){
//   const box = document.createElement('div');


//   //Destructure the image and text from the object  
//   const {image, text} = item;

//   box.classList.add('box');
//   box.innerHTML = `
//   <img src= "${image}" alt="${text}"/>
//   <p class="info">${text}</p>

//   `;

  
//   // Append Box to the DOM 
//   main.appendChild(box);



// }
//   // Store voices 
//   // Create array to store voices 
//   let voices = [];

//   function getVoices() { 
//     voices = speechSynthesis.getVoices(); 

//     voices.forEach(voice =>  {
//       const option = document.createElement('option');

//       option.value = voice.name; 
//       option.innerText = `${voice.name} ${voice.lang}`;
//         // console.log(option);

//       voicesSelect.appendChild(option);
//       // postsContainer.appendChild(postEl);
//     });
//   }

// // Voices changed 
// speechSynthesis.addEventListener('voiceschanged', getVoices);



// // }

// // Toggle text box 
// toggleBtn.addEventListener('click', () => document.getElementById('text-box').classList.toggle('show'));

// // Close button
// closeBtn.addEventListener('click', () => document.getElementById('text-box').classList.remove('show'));


// getVoices();