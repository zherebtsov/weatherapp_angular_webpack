class userCityWeatherController {
	constructor($geolocation, UserCityWeatherFactory) {
		this.geoLocation = $geolocation;
		this.getWeather = UserCityWeatherFactory;
		this.getGeoLocation();
	}

	getGeoLocation() {
		//опеределяем координаты через ngGeolocation
		this.geoLocation.getCurrentPosition().then(location => {
			this.locationCoordsLat = location.coords.latitude.toFixed(3);
			this.locationCoordsLon = location.coords.longitude.toFixed(3);

			//Отправляем координаты юзера в сервисис, получаем объект с данными, 
			//в темплейте выводим данные из объекта
			this.getWeather.getWeatherByCoords(this.locationCoordsLat, this.locationCoordsLon)
				.then(
					result => {
						this.weatherData = result;
					}
				);
		});
	}
}

export default userCityWeatherController;
