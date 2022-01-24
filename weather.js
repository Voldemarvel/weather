class Weather {
	constructor(city) {
		this.key = '17249fe8392a0043132ff303f79d01bd';
		this.city = city;
	}

	async getWeather(){
		const responce = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${this.city}&appid=${this.key}`)
		const responceData = await responce.json()
		return responceData
	}

	changeCity(city){
		this.city = city;
	}
}