//Get DOM Elements

const musicContainer = document.getElementById('music-container');
const playBtn = document.getElementById('play');
const prevBtn = document.getElementById('prev');
const nextBtn = document.getElementById('next');

const audio = document.getElementById('audio');
const progress = document.getElementById('progress');
const progressContainer = document.getElementById('progress-container');
const title = document.getElementById('title');
const cover = document.getElementById('cover');

// Array of song Titles 
const songs = ['hey', 'summer', 'ukulele']

// Keep track of song, the particular playing song
let songIndex = 1;

// Initially load song details into DOM
loadSong(songs[songIndex]);


// Update song details
function loadSong(song) {
  title.innerText = song;
  //Get audio  and img src 
  audio.src = `music/${song}.mp3`;
  cover.src = `images/${song}.jpg`;
}

//Play song 
function playSong() { 
  musicContainer.classList.add('play');
  playBtn.querySelector('i.fas').classList.remove('fa-play');
  playBtn.querySelector('i.fas').classList.add('fa-pause');

  audio.play();
}


//Pause
function pauseSong() { 
  musicContainer.classList.remove('play');
  playBtn.querySelector('i.fas').classList.add('fa-play');
  playBtn.querySelector('i.fas').classList.remove('fa-pause');

  audio.pause();
}

// Previous Song 
function prevSong() { 
  // Decrease the song index by one 
  songIndex--;
// 
if(songIndex < 0 ){
  songIndex = songs.length - 1;
}

loadSong(songs[songIndex]);
  
playSong();
}

// Update progress bar 
function updateProgress(e) { 
  // destructure the duration and current time fro srcElement
  const { duration, currentTime} = e.srcElement;
  // Set the percent 
  const progressPercent = (currentTime / duration) * 100;
  //set the width to be the progress percent
  progress.style.width = `${progressPercent}%`;

}






// Next Song 
function nextSong() { 
  // Decrease the song index by one 
  songIndex++;
// 
if(songIndex > (songs.length-1) ){
  songIndex = 0;
}

loadSong(songs[songIndex]);
  
playSong();
}


//Set progress bar 
function setProgress(e) {
  // Total width , 
  const width = this.clientWidth;
  const clickX = e.offsetX;

  const duration = audio.duration;

  // set the current time in the audio through the clickX and duration

  audio.currentTime = (clickX/width) * duration;

 // console.log(width); shows total width
 // console.log(e.offsetX); shows the position in X axis

}




//Event listeners 
playBtn.addEventListener('click', () => {
  // Check if its contains the class play, then pause or play
  const isPlaying = musicContainer.classList.contains('play');
if(isPlaying) { 
  pauseSong();
} else {
  playSong();
}

})


// Change Song 
prevBtn.addEventListener('click', prevSong);
nextBtn.addEventListener('click', nextSong);


// Time song update event 
audio.addEventListener('timeupdate', updateProgress);

// Click on progress bar 
progressContainer.addEventListener('click', setProgress);


// Song ends from the audio API 
audio.addEventListener('ended',nextSong);

// Tons of stuffs  we can do from the audio API 
// Add volume buttons 
// Add minutes and seconds 
