



const cityForm = document.querySelector('.form'); 
const card = document .querySelector('.card');
const details = document. querySelector('.details'); 
const time = document.querySelector('img.time');
const icon = document.querySelector('.icon img'); // get the img from the div 


const updateUI = (data) => {

    // // destructure properties 
    const{cityDets, weather} = data;
    //update details template 
    details.innerHTML = `
    <h5 class="my-3">${cityDets.EnglishName}</h5>
        <div class="my-3">${weather.WeatherText}</div>
            <div class="display-4 my-4">
                <span>${weather.Temperature.Metric.Value}</span>
                <span>&deg;C</span> 
            </div>
    `;

    // update the night/day & icon images
  const iconSrc = `img/icons/${weather.WeatherIcon}.svg`;
  //icon.setAttribute('src', iconSrc);

    // tenary operator 
    //const result = true? 'value 1': 'value 2 ';
    //console.log(result);
    //let timeSrc = weather.IsDayTime? 'img/day.svg' : 'img/night.svg';


    let timeSrc = null;
    if(weather.IsDayTime){
        timeSrc = `img/day.svg`;
    } else { 
        timeSrc = `img/night.svg`;
    }
    time.setAttribute('src', timeSrc)

if(card.classList.contains('d-none')){
    card.classList.remove('d-none');
};

};
// remove the d-none class if present 

const updateCity = async (city) => {

    const cityDets = await getCity(city);
    const weather = await getWeather(cityDets.Key);
    
    return {cityDets, weather};
       // cityDets: cityDets,
        //weather: weather
    
    //console.log(city);
};

 cityForm.addEventListener('submit', e => {
    // prevent default action 
    e.preventDefault(); 

    // get city value 
    const city = cityForm.city.value.trim(); 
    cityForm.reset();

    // update the UI  with new city
    updateCity(city)
        .then(data => updateUI(data))
        .catch(err => console.log(err));
//<---------------- Updating the Local Storage----------> 
// set local storage , would always be the latest city stored in the storage.


        localStorage.setItem('city', city); 

    });     

    if(localStorage.getItem('city')){
        updateCity(localStorage.getItem('city'))
          .then(data => updateUI(data))
          .catch(err => console.log(err));
      }

