//<-----------------------GET AND DISPLAY SONG LYRICS ------>

const form = document.getElementById('form');
const search = document.getElementById('search');
const result = document.getElementById('result');
const more = document.getElementById('more');



// Get API 
const apiURL = 'https://api.lyrics.ovh'; 

//Search by song or artist with the fetch comes async 
// function searchSongs(term) { 
//   fetch(`${apiURL}/suggest/${term}`)
//     .then(res => res.json())
//     .then(data => console.log(data));

// search for songs 
async function searchSongs(term) { 
    const res = await fetch(`${apiURL}/suggest/${term}`);
    const data = await res.json();
    // console.log(data);
    showData(data);

}

  

// Show song and artist in DOM 
function showData(data) { 
    result.innerHTML = `
    <ul class="songs"> 
      ${data.data.map(song => `<li>
      <span><strong>${song.artist.name}</strong> - ${song.title}</span> 
      <buttton class="btn" data-artist="${song.artist.name}"
      data-songtitle="${song.title}">Get Lyrics </button>
    </li>`
    )
    .join('')}
  </ul>    
    `;

    // Check for other pages 
    // create a next button if there are more pages to display
    // data.prev and data.next are URL from our API 
    if(data.prev || data.next) { 
      more.innerHTML = `
      ${data.prev ? `<button class="btn" onclick="getMoreSongs('${data.prev}')">Prev</button>`  : ``}
      ${data.next ? `<button class="btn" onclick="getMoreSongs('${data.next}')">Next</button>` : ``}
    `;
  } else {
    more.innerHTML = '';
  }
  }
  

  // Trying to fetch next/previous page says blocked by cors policy
  // We try to break that by including cors-anywhere which in turn says too many requests :( 
  // Get prev or next results from the API  
  async function getMoreSongs(url) {
    const res = await fetch(`https://cors-anywhere.herokuapp.com/${url}`);
    const data = await res.json();
  
    showData(data);
  }
// Get lyrics for song 
async function getLyrics(artist, songTitle) {
  const res = await fetch(`${apiURL}/v1/${artist}/${songTitle}`);
  const data = await res.json();

   // console.log(data);
  //Get a reg expression to display lyrics better
  const lyrics = data.lyrics.replace(/(\r\n|\r|\n)/g, '<br>');

  result.innerHTML = `<h2><strong>${artist}</strong> -${songTitle}</h2>
  <span>${lyrics}</span>`;

  more.innerHTML = '';

}

  

// Event listeners 
form.addEventListener('submit', e => {
  e.preventDefault();

  const searchTerm = search.value.trim(); 

  if(!searchTerm) {
    alert('Please type in a search term');
  } else {
    searchSongs(searchTerm);
  }


})

// GET Lyrics 
// clicked has a class name btn ---
result.addEventListener('click', e => {
  const clickedEl = e.target;

  if(clickedEl.className === 'btn'){
    const artist = clickedEl.getAttribute('data-artist');
    const songTitle = clickedEl.getAttribute('data-songtitle');
   

    getLyrics(artist, songTitle);
  }
 
  // console.log(e.target);
})





