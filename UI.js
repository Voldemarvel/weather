class UI {
	constructor() {
		this.description = document.querySelector('#description');
		this.temp = document.querySelector('#temp');
		this.city = document.querySelector('#location');
		this.wind = document.querySelector('#wind-speed')
		this.tempFeel = document.querySelector('#feels-like')
		this.humidity = document.querySelector('#humidity')
	}

	drawWeather(data) {
		var celcius = Math.round(parseFloat(data.main.temp)-273.15);
		var celciusFeel = Math.round(parseFloat(data.main.feels_like)-273.15);
		var description = data.weather[0].description;
		console.log(data);

		this.description.innerHTML = description;
		this.temp.innerHTML = celcius + '&deg';
		this.city.innerHTML = data.name;
		this.wind.innerHTML = "Wind " + data.wind.speed + " m/s";
		this.tempFeel.innerHTML = "Feels like " + celciusFeel + "&deg";
		this.humidity.innerHTML = data.main.humidity + "%";
	}
}