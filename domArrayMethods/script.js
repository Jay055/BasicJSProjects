// const main = document.getElementById('main');
// const addUserBtn = document.getElementById('add-user');
// const doubleBtn = document.getElementById('show-millionaires');
// const showMillionaresBtn = document.getElementById('sort');
// const sortBtn = document.getElementById('main');
// const calculateWeathBtn = document.getElementById('calculate-wealth');


// let data = [];

// // Fetch random user and add money 


// // We work with the async await this time around. 
// // Fetch data and store in json format
// async function getRandomUser() {
//   const res = await fetch('https://randomuser.me/api');
//   const data = await res.json();
//   //console.log(data);
//   const user = data.results[0];

//   // Get a new user from the API
//   const newUser = {
//     name: `${user.name.first} ${user.name.last}`,
//     // Random money amount
//     money: Math.floor(Math.random() * 100000)
//   };
//   //  console.log(newUser);
// addData(newUser): 

// }

// getRandomUser();

// // pushes an objet into the array. 
// function addData(obj){
//   data.push(obj); 
// }


// //<-------------------------------29 ----------------------------------->
// // forEach() & DOM methods 
// const main = document.getElementById('main');
// const addUserBtn = document.getElementById('add-user');
// const doubleBtn = document.getElementById('show-millionaires');
// const showMillionaresBtn = document.getElementById('sort');
// const sortBtn = document.getElementById('main');
// const calculateWeathBtn = document.getElementById('calculate-wealth');


// let data = [];

// // Fetch random user and add money 


// // We work with the async await this time around. 
// // Fetch data and store in json format
// async function getRandomUser() {
//   const res = await fetch('https://randomuser.me/api');
//   const data = await res.json();
//   //console.log(data);
//   const user = data.results[0];

//   // Get a new user from the API
//   const newUser = {
//     name: `${user.name.first} ${user.name.last}`,
//     // Random money amount
//     money: Math.floor(Math.random() * 100000)
//   };
//   //console.log(newUser);
// addData(newUser);

// }

// getRandomUser();

// // pushes an objet into the array then updates the DOM. 
// function addData(obj){
//   data.push(obj); 
//   updateDOM();
// }
  
//   // Create an oupdate dorm function inside our addData()
//   // default parameter would be data if none is provided

//   function updateDOM(providedData = data) { 
//     //Clear main div 
//     main.innerHTML = `<h2><strong>Person</strong>Wealth</h2>`;
//     // Before the forEach we needed to create the for loop
    
//     providedData.forEach(item => {
//       const element = document.createElement('div');
//       element.classList.add('person');
      
//       element.innerHTML = `<strong>${item.name}</strong> ${formatMoney(item.money)}`;
      
//       main.appendChild(element); 
      
//     });

//   }

//   // Format Money https://stackoverflow.com/questions/149055/how-to-format-numbers-as-currency-string

//   function formatMoney(number) {
//     return '$' + number.toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,'); 
//   };

//   // // Event Listeners to add users 
//   addUserBtn.addEventListener('click', getRandomUser);





// //<-------------------------------30 DOUBLE MONEY MAP()----------------------------------->
// // forEach() & DOM methods 
// const main = document.getElementById('main');
// const addUserBtn = document.getElementById('add-user');
// const doubleBtn = document.getElementById('double');
// const showMillionaresBtn = document.getElementById('show-millionaires');
// const sortBtn = document.getElementById('sort');
// const calculateWeathBtn = document.getElementById('calculate-wealth');


// let data = [];

// // Fetch random user and add money 


// // We work with the async await this time around. 
// // Fetch data and store in json format
// async function getRandomUser() {
//   const res = await fetch('https://randomuser.me/api');
//   const data = await res.json();
//   //console.log(data);
//   const user = data.results[0];

//   // Get a new user from the API
//   const newUser = {
//     name: `${user.name.first} ${user.name.last}`,
//     // Random money amount
//     money: Math.floor(Math.random() * 100000)
//   };
//   //console.log(newUser);
// addData(newUser);

// }

// getRandomUser();

// // pushes an objet into the array then updates the DOM. 
// function addData(obj){
//   data.push(obj); 
//   updateDOM();
// }
  
//   // Create an oupdate dorm function inside our addData()
//   // default parameter would be data if none is provided

//   function updateDOM(providedData = data) { 
//     //Clear main div 
//     main.innerHTML = `<h2><strong>Person</strong>Wealth</h2>`;
//     // Before the forEach we needed to create the for loop
    
//     providedData.forEach(item => {
//       const element = document.createElement('div');
//       element.classList.add('person');
      
//       element.innerHTML = `<strong>${item.name}</strong> ${formatMoney(item.money)}`;
      
//       main.appendChild(element); 
      
//     });

//   }

//   // Format Money https://stackoverflow.com/questions/149055/how-to-format-numbers-as-currency-string

//   function formatMoney(number) {
//     return '$' + number.toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,'); 
//   };

//   // // Event Listeners to add users 
//   addUserBtn.addEventListener('click', getRandomUser);
//   doubleBtn.addEventListener('click', doubleMoney);


//   //Double everyone's money
// function doubleMoney(num) { 
//   data = data.map((user) => {
//     return {...user, money: user.money *2};
//   });
// updateDOM();
// }



// //<-------------------------------30  SORT BY RICHEST ----------------------------------->
// // forEach() & DOM methods 
// const main = document.getElementById('main');
// const addUserBtn = document.getElementById('add-user');
// const doubleBtn = document.getElementById('double');
// const showMillionaresBtn = document.getElementById('show-millionaires');
// const sortBtn = document.getElementById('sort');
// const calculateWeathBtn = document.getElementById('calculate-wealth');


// let data = [];

// // Fetch random user and add money 


// // We work with the async await this time around. 
// // Fetch data and store in json format
// async function getRandomUser() {
//   const res = await fetch('https://randomuser.me/api');
//   const data = await res.json();
//   //console.log(data);
//   const user = data.results[0];

//   // Get a new user from the API
//   const newUser = {
//     name: `${user.name.first} ${user.name.last}`,
//     // Random money amount
//     money: Math.floor(Math.random() * 100000)
//   };
//   //console.log(newUser);
// addData(newUser);

// }

// getRandomUser();

// // pushes an objet into the array then updates the DOM. 
// function addData(obj){
//   data.push(obj); 
//   updateDOM();
// }
  
//   // Create an oupdate dorm function inside our addData()
//   // default parameter would be data if none is provided

//   function updateDOM(providedData = data) { 
//     //Clear main div 
//     main.innerHTML = `<h2><strong>Person</strong>Wealth</h2>`;
//     // Before the forEach we needed to create the for loop
    
//     providedData.forEach(item => {
//       const element = document.createElement('div');
//       element.classList.add('person');
      
//       element.innerHTML = `<strong>${item.name}</strong> ${formatMoney(item.money)}`;
      
//       main.appendChild(element); 
      
//     });

//   }

//   // Format Money https://stackoverflow.com/questions/149055/how-to-format-numbers-as-currency-string

//   function formatMoney(number) {
//     return '$' + number.toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,'); 
//   };

//   // // Event Listeners to add users 
//   addUserBtn.addEventListener('click', getRandomUser);
//   doubleBtn.addEventListener('click', doubleMoney);
//   sortBtn.addEventListener('click', sortByRichest);


//   //Double everyone's money
// function doubleMoney(num) { 
//   data = data.map((user) => {
//     return {...user, money: user.money *2};
//   });
// updateDOM();
// }


// //Sort from Richest
// function sortByRichest() {
//   data.sort((a,b) => a.money - b.money)
 
//   updateDOM();
//   };



//<-------------------------------13 FILTER() ----------------------------------->
// forEach() & DOM methods 
const main = document.getElementById('main');
const addUserBtn = document.getElementById('add-user');
const doubleBtn = document.getElementById('double');
const showMillionaresBtn = document.getElementById('show-millionaires');
const sortBtn = document.getElementById('sort');
const calculateWeathBtn = document.getElementById('calculate-wealth');


let data = [];

// Fetch random user and add money 


// We work with the async await this time around. 
// Fetch data and store in json format
async function getRandomUser() {
  const res = await fetch('https://randomuser.me/api');
  const data = await res.json();
  //console.log(data);
  const user = data.results[0];

  // Get a new user from the API
  const newUser = {
    name: `${user.name.first} ${user.name.last}`,
    // Random money amount
    money: Math.floor(Math.random() * 100000)
  };
  //console.log(newUser);
addData(newUser);

}

getRandomUser();

// pushes an objet into the array then updates the DOM. 
function addData(obj){
  data.push(obj); 
  updateDOM();
}
  
  // Create an oupdate dorm function inside our addData()
  // default parameter would be data if none is provided

  function updateDOM(providedData = data) { 
    //Clear main div 
    main.innerHTML = `<h2><strong>Person</strong>Wealth</h2>`;
    // Before the forEach we needed to create the for loop
    
    providedData.forEach(item => {
      const element = document.createElement('div');
      element.classList.add('person');
      
      element.innerHTML = `<strong>${item.name}</strong> ${formatMoney(item.money)}`;
      
      main.appendChild(element); 
      
    });

  }

  // Format Money https://stackoverflow.com/questions/149055/how-to-format-numbers-as-currency-string

  function formatMoney(number) {
    return '$' + number.toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,'); 
  };

  // // Event Listeners to add users 
  addUserBtn.addEventListener('click', getRandomUser);
  doubleBtn.addEventListener('click', doubleMoney);
  sortBtn.addEventListener('click', sortByRichest);
  showMillionaresBtn.addEventListener('click', showMillionares);
  calculateWeathBtn.addEventListener('click', calculateWealth);

  //Double everyone's money
function doubleMoney(num) { 
  data = data.map((user) => {
    return {...user, money: user.money *2};
  });
updateDOM();
}


//Sort from Richest
function sortByRichest() {
  data.sort((a,b) => a.money - b.money)
 
  updateDOM();
  };

//


// Filter only millionaires 
function showMillionares (){
 data = data.filter(user => user.money > 1000000);
  
updateDOM();
}

// Reduce method calculate Wealth 

// Reduce method, uses the acc and amount.
function calculateWealth(){
 const wealth = data.reduce((acc,cur) => (acc += cur.money), 0);
  const wealthEl = document.createElement('div');
  wealthEl.innerHTML = `<h3>Total Wealth: <strong>${formatMoney(wealth)}</strong> </h3>`
  console.log(wealthEl);

  main.appendChild(wealthEl);
}


console.log('still working');