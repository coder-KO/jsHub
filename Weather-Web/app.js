window.addEventListener('load', ()=> {
    let lng;
    let lat;
    let temperatureDescription = document.querySelector('.temperature-description');
    let temperatureDegree = document.querySelector('.temperature-degree');
    let locationCity = document.querySelector('.location-city');
    let locationCountry = document.querySelector('.location-country');

    if(navigator.geolocation){  // If browser has location support
        navigator.geolocation.getCurrentPosition(position =>{
            lng = position.coords.longitude;
            lat = position.coords.latitude;
            
            // API to enable cross-origin requests to anywhere.
            const proxy = 'https://cors-anywhere.herokuapp.com/';
            // OpenWeatherMap APi
            const api = `${proxy}api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=${api_key}`

            fetch(api)
                .then(response =>{
                    return response.json();
                })
                .then(data =>{
                    console.log(data)
                    const{temp} = data.main;
                    console.log(temp-273.15);
                    console.log(data.name);
                    console.log(data.sys.country);
                    console.log(data.weather[0].description);

                    // Modifying DOM Elements from API
                    locationCity.textContent = data.name;
                    locationCountry.textContent = data.sys.country;
                    temperatureDegree.textContent = (temp-273.15).toFixed(2);
                    temperatureDescription.textContent = data.weather[0].description;
                });
    
        });
    }
    else{
        alert('Allow location access.\nIf you allowed location access and still see this message\nit means your browser lack location support.')
    }
});