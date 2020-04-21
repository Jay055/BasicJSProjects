//Set and Get card Data from Local Storage 





const cardsContainer = document.getElementById('cards-container');
const prevBtn = document.getElementById('prev');
const nextBtn = document.getElementById('next');
const currentEl = document.getElementById('current');
const showBtn = document.getElementById('show');
const hideBtn = document.getElementById('hide');
const questionEl = document.getElementById('question');
const answerEl = document.getElementById('answer');
const addCardBtn = document.getElementById('add-card');
const clearBtn = document.getElementById('clear');
const addContainer = document.getElementById('add-container');



// Keep track of current card
let currentActiveCard = 0; 

//Store DOM cards 
const cardsEl = [];




// Store card data
const cardsData = getCardsData();


  //Create all cards, loop through the data and create a card for each

  function createCards() {
    cardsData.forEach((data, index) => createCard(data, index));
  }

  //Create a single card in DOM
  function createCard(data, index) {
    const card = document.createElement('div');
    card.classList.add('card');
    // Add active class to the first card
    if (index === 0) {
      card.classList.add('active');
    }
    card.innerHTML = `
    <div class="inner-card">
    <div class="inner-card-front">
      <p> 
        ${data.question}
      </p>
    </div>
    <div class="inner-card-back">
      <p>
      ${data.answer}</p>
    
    </div>
  </div>
    `;


    // Switch the cards
    card.addEventListener('click', () => card.classList.toggle('show-answer'));
    // Add to DOM cards  array
    cardsEl.push(card);
    //Display in DOM 
    cardsContainer.appendChild(card);

    updateCurrentText();
  }

  // Show number of cards, paging
  function updateCurrentText() {
    currentEl.innerText = `${currentActiveCard + 1 }/${cardsEl.length}`;
  }

  //Get cards from Local Storage 
  function getCardsData() {
    const cards= JSON.parse(localStorage.getItem('cards'));
    // if cards is null return an empty array else cards 
    return cards === null ? [] : cards;
  }


  // Add card to local storage 
  function setCardsData(cards){
    localStorage.setItem('cards', JSON.stringify(cards));
    // reload page to show on DOM
    window.location.reload();
  }


  createCards();


  // Event listeners 


  // Classname overwrites the card 
  // next button
  nextBtn.addEventListener('click', () => {
    // Give a class name
    cardsEl[currentActiveCard].className = 'card left';
    // Add a number 
    currentActiveCard = currentActiveCard + 1;
    // -1 zero based.
    if(currentActiveCard > cardsEl.length - 1){
      currentActiveCard = 0;

    }

    cardsEl[currentActiveCard].className = 'card active';

    updateCurrentText();
  });



  // Previous button
  prevBtn.addEventListener('click', () => {
    cardsEl[currentActiveCard].className = 'card right';

    currentActiveCard = currentActiveCard - 1;
    // -1 zero based, loop to go round.
    if(currentActiveCard < 0){
      currentActiveCard = cardsEl.length-1;

    }

    cardsEl[currentActiveCard].className = 'card active';

    updateCurrentText();
  });


// Show add Container 
showBtn.addEventListener('click', () => {
  addContainer.classList.add('show');
});

// Hide button 
hideBtn.addEventListener('click', () => { 
  addContainer.classList.remove('show');
});


// Add  new card 

addCardBtn.addEventListener('click', ()=> {
  // get from the text input 
  const question = questionEl.value;
  const answer = answerEl.value; 
  // console.log(question, answer);
// if its not empty > 
  if(question.trim() && answer.trim()) {
    const newCard = {question: question, answer:answer};

    //  create new card 
    createCard(newCard);
// Empty text input after creation
    questionEl.value = '';
    answerEl.value = '';
    
    // Hide the Add New card container
    addContainer.classList.remove('show');

    // Push to cardsData Array
    cardsData.push(newCard);
    // Store in Local Storage.
    setCardsData(cardsData);
  }
})

// Clear cards button 
clearBtn.addEventListener('click', () => {
  localStorage.clear();
  cardsContainer.innerHTML = '';
  window.location.reload();
})






