
// Get API Key
const key = `lpR0hlmABO8FaTbrJEo79L5hg1Usx7Pz`;

//get weather information, parameter  include id parameter into the async function 

const getWeather = async (id) => {

    const base = 'http://dataservice.accuweather.com/currentconditions/v1/' ;
    const query = `${id}?apikey=${key}`;

    const response = await fetch(base + query);
    const data = await response.json();
    return data[0];
} 


// get city information
const getCity = async (city) => {
    
    const base = 'http://dataservice.accuweather.com/locations/v1/cities/search';
    const query = `?apikey=${key}&q=${city}`;   // ? for query parameters

    const response = await fetch(base + query); 
    const data = await response.json(); 
    return data[0];
};



getCity('data')
    .then(data => {
        return getWeather(data.Key);
    }).then(data =>{
        console.log(data);
    })
    .catch(err => console.log(err));

