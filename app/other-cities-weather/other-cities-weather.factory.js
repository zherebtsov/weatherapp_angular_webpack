const OtherCitiesWeatherFactory = function ($http) {
	return {
		//На вход приходит название города, обращается к API, получает результат, обрабатывает, отправляет в контроллер
		getWeatherByCityName: function (nameCity) {
			return $http.get('http://api.openweathermap.org/data/2.5/weather?q=' + nameCity + '&appid=ce66bace02474aa0bfa81120dc5c303c')
				.then(
					responce => {
						return {
							nameCity: responce.data.name,
							temp: (responce.data.main.temp - 273).toFixed(0),
							pressure: responce.data.main.pressure,
							humidity: responce.data.main.humidity,
							icon: responce.data.weather[0].icon
						}
					},
					responce => {
						return responce.data.message + ' (' + responce.data.cod + ')';
					}
					
				);
		}
	};
};

export default OtherCitiesWeatherFactory;