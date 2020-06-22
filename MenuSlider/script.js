const toggle = document.getElementById('toggle');
const close = document.getElementById('close');
const open = document.getElementById('open');
const modal = document.getElementById('modal');
const body= document.querySelector('body');

const all = document.querySelector('.all');
const header = document.querySelector('.header');

//Toggle new 


toggle.addEventListener('click', ()=> {
  document.body.classList.toggle('show-nav')
});





// Show Modal 
open.addEventListener('click', () => modal.classList.add('show-modal'));

// Hide Modal 
close.addEventListener('click', () => modal.classList.remove('show-modal'));

// //Hide Modal outside click 
// window.addEventListener('click' , e => e.target == modal?
// moda.classList.remove('show-modal') : false );

// The entire window is in the modal but the show-modal id isn't in the model thereby this code can work properly.

window.addEventListener('click', e => {
  if(e.target == modal){
    modal.classList.remove('show-modal')
  };
});




// window.addEventListener('click', e => {
//   if(e.target == document.body) {
//    document.body.classList.remove('show-nav')
//   };
// });

window.addEventListener('click', e => {
  if((e.target == all) || (e.target == header) || (e.target == modal)){
  document.body.classList.remove('show-nav')
  };
});


//Added Div all and  a class to header for toggling nav bar .
