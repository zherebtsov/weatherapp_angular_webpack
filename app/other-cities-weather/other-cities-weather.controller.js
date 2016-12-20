class otherCitiesWeatherController {
	constructor(OtherCitiesWeatherFactory) {
		this.nameCity = ''; //Значение input, которое ввел пользователь
		this.itemsCitiesWeather = JSON.parse(localStorage.getItem('itemsCitiesWeather')); //Массив с объектами в которых хронятся данные погоды городов, берем его из localStorage, если он там есть 
		this.otherCitiesWeatherFactory = OtherCitiesWeatherFactory;
	}

	addCityWeather(nameCity) {
		if (nameCity === '') {
			this.error = 'Ошибка: Введите название города, например Moscow';
		} else {
		//Обработка нажатия на кнопку "Добавить"
		//обращается к сервисисам со значением из input'a и получает объект, который добовляет в массив
		this.otherCitiesWeatherFactory.getWeatherByCityName(nameCity)
			.then(
				result => {
					if (typeof result == 'string') {
						this.warning = '';
						this.error = 'Ошибка: ' + result;
					} else if (this.isCyrillic(nameCity)) {
						this.warning = 'Предупреждение: Для корректной работы приложения вводите название города латинскими буквами';
						this.error = '';
						this.itemsCitiesWeather.push(result); //Добавляем объект с погодой в массив
						localStorage.setItem('itemsCitiesWeather', JSON.stringify(this.itemsCitiesWeather)); //Обнавляем массив, который находится в localStorage
					} else {
						this.error = '';
						this.warning = '';
						this.itemsCitiesWeather.push(result);
						localStorage.setItem('itemsCitiesWeather', JSON.stringify(this.itemsCitiesWeather));
					};
				}
			);
		};
	}
	
	isCyrillic(str) {
		return /[а-я]/i.test(str);
	}
}

export default otherCitiesWeatherController;