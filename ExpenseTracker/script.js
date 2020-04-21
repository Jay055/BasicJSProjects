//<--------------- Add / Remove Elements, local Storage ---------->

const balance = document.getElementById('balance');
const money_plus = document.getElementById('money-plus');
const money_minus = document.getElementById('money-minus');
const list = document.getElementById('list');
const form = document.getElementById('form');
const text = document.getElementById('text');
const amount = document.getElementById('amount');




const localStorageTransactions = JSON.parse(localStorage.getItem('transactions'));

// Check for data in local storage
let transactions = localStorage.getItem('transactions') !==null ? localStorageTransactions : [];

// Add transaction 
function addTransaction(e) { 
  e.preventDefault();

  if(text.value.trim() === '' || amount.value.trim() === '') {
    alert('Please add a text and amount');
  }else{
    const transaction = {
      id: generateID(),
      text: text.value, 
      amount: +amount.value
    };

    transactions.push(transaction);

    addTransactionDOM(transaction);

    updateValues();
    //Update Ls
    updateLocalStorage();

    text.value = '';
    amount.value = '';

  }
  }
//} Generate random ID
  function generateID() {
    return Math.floor(Math.random() * 10000000);
  }
// Add transactions to DOM list 
function addTransactionDOM(transaction) {
  //Get signs 
  const sign = transaction.amount < 0 ? '-' : '+';

  const item = document.createElement('li');

  // Add class based on value 
  item.classList.add(transaction.amount < 0 ? 'minus' : 'plus'); 

  item.innerHTML = ` 
  ${transaction.text}<span>${sign}${Math.abs(transaction.amount)}</span><button class="delete-btn" onclick="removeTransaction(${transaction.id})">x</button>
  `;

  list.appendChild(item);
}
// Update the balance, income and expense 
function updateValues() { 
  const amounts = transactions.map(transaction => transaction.amount);

  console.log(amounts);

// Get total, expense and income
  const total = amounts.reduce((acc, item) => (acc += item), 0).toFixed(2);

  const income = amounts
                        .filter(item => item > 0)
                        .reduce((acc, item) => (acc += item), 0)
                        .toFixed(2);

   const expense = (amounts
                        .filter(item => item < 0)
                        .reduce((acc, item) => (acc += item), 0) * -1)
                        .toFixed(2);
  
                        
  // Add to DOM elements 
  balance.innerText = `$${total}`;
  money_plus.innerText = `$${income}`;
  money_minus.innerText = `$${expense}`;
  }

  //Remove transaction by ID
  function removeTransaction(id){
    transactions = transactions.filter(transaction => transaction.id !==id);

    updateLocalStorage();

    init();
  }

  // console.log(expense);
  // console.log(income)
  // console.log(total);
  // console.log(amounts);



  //Update local storage transactions 
  function updateLocalStorage() {
    localStorage.setItem('transactions', JSON.stringify(transactions));

  }

// Init app
function init() {
  list.innerHTML = '';

  transactions.forEach(addTransactionDOM);
  updateValues();
}

init();
// Add Event listeners 
form.addEventListener('submit', addTransaction);
init();




//<--------------------------------->
// const balance = document.getElementById('balance');
// const money_plus = document.getElementById('money-plus');
// const money_minus = document.getElementById('money-minus');
// const list = document.getElementById('list');
// const form = document.getElementById('form');
// const text = document.getElementById('text');
// const amount = document.getElementById('amount');


// const dummyTransactions = [
//   { id: 1, text: 'Flower', amount: -20 },
//     { id: 2, text: 'Salary', amount: 300 },
//     { id: 3, text: 'Book', amount: -10 },
//     { id: 4, text: 'Camera', amount: 150} 
// ];

// let transactions = dummyTransactions;

// // Add transactions to DOM list 
// function addTransactionDOM(transaction) {
//   //Get signs 
//   const sign = transaction.amount < 0 ? '-' : '+';

//   const item = document.createElement('li');

//   // Add class based on value 
//   item.classList.add(transaction.amount < 0 ? 'minus' : 'plus'); 

//   item.innerHTML = ` 
//   ${transaction.text}<span>${sign}${Math.abs(transaction.amount)}</span><button class="delete-btn>x</button>
//   `;

//   list.appendChild(item);
// }
// // Update the balance, income and expense 
// function updateValues() { 
//   const amounts = transactions.map(transaction => transaction.amount);

// // Get total, expense and income
//   const total = amounts.reduce((acc, item) => (acc += item), 0).toFixed(2);

//   const income = amounts
//                         .filter(item => item > 0)
//                         .reduce((acc, item) => (acc += item), 0)
//                         .toFixed(2);

//    const expense = (amounts
//                         .filter(item => item < 0)
//                         .reduce((acc, item) => (acc += item), 0) * -1)
//                         .toFixed(2);
  
                        
//   // Add to DOM elements 
//   balance.innerText = `$${total}`;
//   money_plus.innerText = `$${income}`;
//   money_minus.innerText = `$${expense}`;


//   console.log(expense);
//   console.log(income)
//   console.log(total);
//   console.log(amounts);
// }



// // Init app
// function init() {
//   list.innerHTML = '';

//   transactions.forEach(addTransactionDOM);
//   updateValues();
// }

// init();