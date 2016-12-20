const UserCityWeatherFactory = function ($http) {
	return {
		//На вход сервису приходят координаты пользватель, он обращается к API, получает результат, выделяет из него нужную информацию, обрабатывает и возвращает в контроллер
		getWeatherByCoords: function (lat, lot) {
			return $http.get('http://api.openweathermap.org/data/2.5/weather?lat=' + lat + '&lon=' + lot + '&appid=ce66bace02474aa0bfa81120dc5c303c')
				.then(
					responce => {
						return {
							nameCity: responce.data.name,
							temp: (responce.data.main.temp - 273).toFixed(0),
							pressure: responce.data.main.pressure,
							humidity: responce.data.main.humidity,
							icon: responce.data.weather[0].icon
						}
					}
				);
		}
	};
};

export default UserCityWeatherFactory;