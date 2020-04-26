// const container = document.querySelector('.container'); 
// const seats = document.querySelectorAll('.row .seat:not(.occupied)'); 
// // not occupied 

// const count = document.getElementById('count'); 
// const total = document.getElementById('price');
// const movieSelect = document.getElementById('movie'); 

// // convert total from string to number with +
// let ticketPrice = +movieSelect.value;

// // Update total and count 
// function updateSelectedCount() { 
//   const selectedSeats = document.querySelectorAll('.row .seat.selected');

//   const selectedSeatsCount = selectedSeats.length;
//   count.innerText = selectedSeatsCount; 
//   total.innerText= selectedSeatsCount * ticketPrice;
// }

// // Movie select event 
// movieSelect.addEventListener('change', e=> { 
//   // change the value of the ticket price. 
//   ticketPrice = +e.target.value;
//   updateSelectedCount();
// })


// // Seat click event 
// container.addEventListener('click', e => { 
//   if(
//     e.target.classList.contains('seat') && !(e.target.classList.contains('occupied'))
//   ) { 
//     e.target.classList.toggle('selected'); 

//     updateSelectedCount(); 
//   }
// });

// //<------------- 14 SAVE TO LOCAL STORAGE ----------------> 
// // Copy the selected seats into an array 
// // Map throught the array 
// // return a new array of indexes  using spread operator.
// // We use the spread , indexOf , and map 


// const container = document.querySelector('.container'); 
// const seats = document.querySelectorAll('.row .seat:not(.occupied)'); 
// const count = document.getElementById('count'); 
// const total = document.getElementById('price');
// const movieSelect = document.getElementById('movie'); 


// let ticketPrice = +movieSelect.value; // + string>number

// //Save selected movie index and price 
// function setMovieData(movieIndex, moviePrice) {
//   localStorage.setItem('selectedMovieIndex', movieIndex);
//   localStorage.setItem('selectedMoviePrice', moviePrice);
// }


// // Update total and count 
// function updateSelectedCount() { 
//   const selectedSeats = document.querySelectorAll('.row .seat.selected');

//   // Use spread operator to select seats, spread operator passing individual inputs
//   // [...selectedSeatCount] - spread operator, get the  individual values. 
//   // map -- gets a new array with the required function
//   const seatsIndex = [...selectedSeats].map(seat => [...seats].indexOf(seat));
  

//   // Saving into local storage, movie index and price 
//   localStorage.setItem('selectedSeats', JSON.stringify(seatsIndex));
//   //localStorage.setItem('selectedMoviePrice', moviePrice);




//   const selectedSeatsCount = selectedSeats.length;
//   count.innerText = selectedSeatsCount; 
//   total.innerText= selectedSeatsCount * ticketPrice;

 
// }

// // Movie select event 
// movieSelect.addEventListener('change', e=> { 
//   // change the value of the ticket price. 
//   ticketPrice = +e.target.value;
//   //create a function setMovieData
//   setMovieData(e.target.selectedIndex, e.target.value);
//   updateSelectedCount();
// })


// // Seat click event 
// container.addEventListener('click', e => { 
//   if(
//     e.target.classList.contains('seat') && !(e.target.classList.contains('occupied'))
//   ) { 
//     e.target.classList.toggle('selected'); 

//     updateSelectedCount(); 
//   }
// });


//<------------- 15 POPULATE UI ----------------> 
//

const container = document.querySelector('.container'); 
const seats = document.querySelectorAll('.row .seat:not(.occupied)'); 
const count = document.getElementById('count'); 
const total = document.getElementById('price');
const movieSelect = document.getElementById('movie'); 


// Updating selected seats on the user interface
populateUI();



let ticketPrice = +movieSelect.value; // + string>number 

//Save selected movie index and price into LS
function setMovieData(movieIndex, moviePrice) {
  localStorage.setItem('selectedMovieIndex', movieIndex);
  localStorage.setItem('selectedMoviePrice', moviePrice);
}


// Update total and count 
function updateSelectedCount() { 
  const selectedSeats = document.querySelectorAll('.row .seat.selected');

  // Use spread operator to select seats, spread operator passing individual inputs
  // [...selectedSeatCount] - spread operator, get the  individual values. 
  // map -- gets a new array with the required function
  // This gives you the particular index of selected seats. 
  const seatsIndex = [...selectedSeats].map(seat => [...seats].indexOf(seat));
  

  // Saving into local storage, movie index and price, LS saves as strings, we use stringify to convert to a string.
  localStorage.setItem('selectedSeats', JSON.stringify(seatsIndex));
  //localStorage.setItem('selectedMoviePrice', moviePrice);




  const selectedSeatsCount = selectedSeats.length;
  count.innerText = selectedSeatsCount; 
  total.innerText= selectedSeatsCount * ticketPrice;

 
}

// Get data from local storage and populate UI, convert string > array
function populateUI() { 
  const selectedSeats = JSON.parse(localStorage.getItem('selectedSeats'));

  // Update the UI if the selected seats indexes are found in the LS
  if(selectedSeats !== null && selectedSeats.length > 0) {
    seats.forEach((seat, index) => {
      if(selectedSeats.indexOf(index > -1)) { 
        seat.classList.add('selected');
      }
    });
  }


  // getting movie index from LS 
  const selectedMovieIndex = localStorage.getItem('selectedMovieIndex');
    if(selectedMovieIndex !==null) { 
      movieSelect.selectedIndex = selectedMovieIndex;
    }

}

// Movie select event 
movieSelect.addEventListener('change', e=> { 
  // change the value of the ticket price. 
  ticketPrice = +e.target.value;
  //create a function setMovieData to store selected seat and movie value in LS
  setMovieData(e.target.selectedIndex, e.target.value);
  updateSelectedCount();
})


// Seat click event, toggle between selections 
container.addEventListener('click', e => { 
  if(
    e.target.classList.contains('seat') && !(e.target.classList.contains('occupied'))
  ) { 
    e.target.classList.toggle('selected'); 

    updateSelectedCount(); 
  }
});



// Initial count and total 

updateSelectedCount(); 