
//<---------------- Check List------------------------> 

// Create DOM Elements 
const draggableList = document.getElementById('draggable-list');
const check = document.getElementById('check');

//Create Correct Array index 
const richestPeople = [
  'Jeff Bezos',
  'Bill Gates',
  'Warren Buffett',
  'Bernard Arnault',
  'Carlos Slim Helu',
  'Amancio Ortega',
  'Larry Ellison',
  'Mark Zuckerberg',
  'Michael Bloomberg',
  'Larry Page'
];

//Store JS generated List Items 
const listItems = [];


let dragStartIndex; 

createList();


// Insert list items into DOM
function createList() {
  // use spread operator to get each element of the array
  [...richestPeople]
  // Scramble the list 
  // Use map to change it to an object with a value  create a sort key with random numbers 
  .map(a => ({ value: a, sort: Math.random() }))
  // sort with the random value
  .sort((a,b) => a.sort - b.sort)
 // map back  into an array of strings this type scrambled, showing only the value
  .map(a => a.value)
    .forEach((person, index) => {
      // console.log(person)
      // console.log(index) // numbering 
      // create List items
      const listItem = document.createElement('li');


      // Give the list items a class of data-index, passing a value of index     ****************
      listItem.setAttribute('data-index', index);

      // Create the DOM output 
      // Things to note: draggble is a html 5 class than enables elements to be dragged. 
      listItem.innerHTML = `
      <span class="number">${index + 1}</span>
      <div class="draggable" draggable="true">
        <p class="person-name">${person}</p>
        <i class="fas fa-grip-lines"></i>
        </div>
        `;

        // Push each item into the array
        listItems.push(listItem);
      // Append to DOM
      draggableList.appendChild(listItem);

    });
    // Listen to drag and click events 
    addEventListener();

}

// Start dragging
function dragStart() {

  // closest li (method to get the closest), get index. Get the index of the list you started dragging
  dragStartIndex = +this.closest('li').getAttribute('data-index');
  // console.log(dragStartIndex);
}


//A dragged item enters a valid drop target 
function dragEnter() {
  
  // this for the add event listeners 
  this.classList.add('over');
  // console.log('enter');
}

// Leaves a valid drop target 
function dragLeave() {

  this.classList.remove('over');
 
}

// Dragged over a drop target, we need to prevent default here to enable the swap work.
function dragOver(e) {
  
  e.preventDefault();
 
}

// Dropped on a valid drop target
function dragDrop() {
  // Get the index location of the dropped li, + converts to a number 
  const dragEndIndex = +this.getAttribute('data-index');
  // console.log(dragEndIndex);
  // We need to swap the li's
  swapItems(dragStartIndex, dragEndIndex);

  // remove over after swap 

  this.classList.remove('over')

}


// Swap items on Drag and Drop, passing in the parameters gotten from the dragging


function swapItems(fromIndex, toIndex) {
  // Get items from the index positions.
  const itemOne = listItems[fromIndex].querySelector('.draggable');
  const itemTwo = listItems[toIndex].querySelector('.draggable');

  //Swap elements through index position.
  listItems[fromIndex].appendChild(itemTwo);
  listItems[toIndex].appendChild(itemOne);
}





// Check the order of the List to confirm it's correct 
function checkOrder() {
  listItems.forEach((listItem, index) => { 
    //Get the name 
    const personName = listItem.querySelector('.draggable').innerText.trim();
//Comparing the trimmed text of both arrays and index
    if(personName !== richestPeople[index]) {

      listItem.classList.add('wrong');
    } else {
      listItem.classList.remove('wrong');
      listItem.classList.add('right');
    }
  }
  )}




  

// Our Event Listeners 

function addEventListener() {
  // Get all draggables from HTML 5 draggables 
  const draggables = document.querySelectorAll('.draggable');
// Get all list elements 
  const dragListItems = document.querySelectorAll('.draggable-list li');


  draggables.forEach(draggable => {
    draggable.addEventListener('dragstart', dragStart);
  });

  dragListItems.forEach(item => {
    // item.addEventListener('dragstart', dragStart);
    item.addEventListener('dragover', dragOver);
    item.addEventListener('drop', dragDrop);
    item.addEventListener('dragenter', dragEnter);
    item.addEventListener('dragleave', dragLeave);

  });
}


//Check other. 
check.addEventListener('click', checkOrder);























// // Just a reminder of Sorting 
// const numbers = [1, 3, 110, 40, 302];
// console.log(numbers.sort(function(a,b) {
//   return a-b}));

// https://developer.mozilla.org/en-US/docs/Web/API/HTML_Drag_and_Drop_API

//<<<-------------- INSERT LIST ITEMS INTO DOM -------------------> 
// const draggableList = document.getElementById('draggable-list');
// const check = document.getElementById('check');

// const richestPeople = [
//   'Jeff Bezos',
//   'Bill Gates',
//   'Warren Buffett',
//   'Bernard Arnault',
//   'Carlos Slim Helu',
//   'Amancio Ortega',
//   'Larry Ellison',
//   'Mark Zuckerberg',
//   'Michael Bloomberg',
//   'Larry Page'
// ];

// //Store list items
// const listItems = [];

// let dragStartIndex; 

// createList();

// // Insert list items into DOM
// function createList() {
//   [...richestPeople]
//     .forEach((person, index) => {
//       const listItem = document.createElement('li');

//       // Give it a class name 
//       listItem.setAttribute('data-index', index);

//       listItem.innerHTML = `
//       <span class="number">${index + 1}</span>
//       <div class="draggable" draggable="true">
//         <p class="person-name">${person}</p>
//         <i class="fas fa-grip-lines"></i>
//         </div>
//         `;

//         listItems.push(listItem);

//       draggableList.appendChild(listItem);

//     })
// }










// //<---------------- SCRAMBLE LIST ITEMS ------------------------> 

// const draggableList = document.getElementById('draggable-list');
// const check = document.getElementById('check');

// const richestPeople = [
//   'Jeff Bezos',
//   'Bill Gates',
//   'Warren Buffett',
//   'Bernard Arnault',
//   'Carlos Slim Helu',
//   'Amancio Ortega',
//   'Larry Ellison',
//   'Mark Zuckerberg',
//   'Michael Bloomberg',
//   'Larry Page'
// ];

// //Store list items
// const listItems = [];

// let dragStartIndex; 

// createList();


// // Insert list items into DOM
// function createList() {
//   [...richestPeople]
//   // Scramble the list 
//   // Use map to change it to an object with a value and a sort 
//   .map(a => ({ value: a, sort: Math.random() }))
//   // sort with the random value
//   .sort((a,b) => a.sort - b.sort)
//  // map back  into an array of strings this type scrambled 
//   .map(a => a.value)
//     .forEach((person, index) => {
//       // console.log(person)
//       const listItem = document.createElement('li');


//       // Give it a class name 
//       listItem.setAttribute('data-index', index);

//       listItem.innerHTML = `
//       <span class="number">${index + 1}</span>
//       <div class="draggable" draggable="true">
//         <p class="person-name">${person}</p>
//         <i class="fas fa-grip-lines"></i>
//         </div>
//         `;

//         listItems.push(listItem);

//       draggableList.appendChild(listItem);

//     });

//     addEventListener();

// }
// function dragStart() {
//   // console.log("Event:", 'dragstart');
//   // closest li (method to get the closest), get index
//   dragStartIndex = +this.closest('li').getAttribute('data-index');
//   console.log(dragStartIndex);
// }

// function dragEnter() {
//   // console.log('Event: ','dragEnter');
//   // this for the add event listeners 
//   this.classList.add('over');
// }

// function dragLeave() {
//   // console.log("Event:", 'dragleave');
//   this.classList.remove('over');
// }

// function dragOver(e) {
//   // Drag over we need to prevent default action so the swap works
//   e.preventDefault();
//   // 
  
// }

// function dragDrop() {
//   // console.log("Event:", 'drop');
//   // this.classList.add('over');
//   const dragEndIndex = +this.getAttribute('data-index');
//   // console.log(dragEndIndex);
//   swapItems(dragStartIndex, dragEndIndex);

//   this.classList.remove('over')

// }
// // Swap Iteps on drag 
// function swapItems(fromIndex, toIndex) {
//   const itemOne = listItems[fromIndex].querySelector('.draggable');
//   const itemTwo = listItems[toIndex].querySelector('.draggable');

//   listItems[fromIndex].appendChild(itemTwo);
//   listItems[toIndex].appendChild(itemOne);
// }




// function addEventListener() {
//   const draggables = document.querySelectorAll('.draggable');

//   const dragListItems = document.querySelectorAll('.draggable-list li');


//   draggables.forEach(draggable => {
//     draggable.addEventListener('dragstart', dragStart)
//   });

//   dragListItems.forEach(item => {
//     // item.addEventListener('dragstart', dragStart);
//     item.addEventListener('dragover', dragOver);
//     item.addEventListener('drop', dragDrop);
//     item.addEventListener('dragenter', dragEnter);
//     item.addEventListener('dragleave', dragLeave);

//   });
// }





// // // Just a reminder of Sorting 
// // const numbers = [1, 3, 110, 40, 302];
// // console.log(numbers.sort(function(a,b) {
// //   return a-b}));



// //<<<-------------- INSERT LIST ITEMS INTO DOM -------------------> 
// // const draggableList = document.getElementById('draggable-list');
// // const check = document.getElementById('check');

// // const richestPeople = [
// //   'Jeff Bezos',
// //   'Bill Gates',
// //   'Warren Buffett',
// //   'Bernard Arnault',
// //   'Carlos Slim Helu',
// //   'Amancio Ortega',
// //   'Larry Ellison',
// //   'Mark Zuckerberg',
// //   'Michael Bloomberg',
// //   'Larry Page'
// // ];

// // //Store list items
// // const listItems = [];

// // let dragStartIndex; 

// // createList();

// // // Insert list items into DOM
// // function createList() {
// //   [...richestPeople]
// //     .forEach((person, index) => {
// //       const listItem = document.createElement('li');

// //       // Give it a class name 
// //       listItem.setAttribute('data-index', index);

// //       listItem.innerHTML = `
// //       <span class="number">${index + 1}</span>
// //       <div class="draggable" draggable="true">
// //         <p class="person-name">${person}</p>
// //         <i class="fas fa-grip-lines"></i>
// //         </div>
// //         `;

// //         listItems.push(listItem);

// //       draggableList.appendChild(listItem);

// //     })
// // }
