class itemCityWeatherController {
	//constructor{}
	//Обработка нажатия на кнопку "Удалить"
	//Получает индекс элемента который нужно удалить, проходит весь массив и добовляет только те элементы для которых выполняется условие, что индекс пришедший извне не равен данному индексу, заного собирает массив только уже без этого элемента
	delCityWeather(index) {
		
		this.itemsCitiesWeather = this.itemsCitiesWeather.filter((item, i, arr) => {
			return index != i
		});
		
		//Обновляет массив в LocalStorage
		localStorage.setItem('itemsCitiesWeather', JSON.stringify(this.itemsCitiesWeather));
		
	}
};

export default itemCityWeatherController;