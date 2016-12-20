import template from './item-city-weather.html';
import controller from './item-city-weather.controller';

const itemCityWeatherComponent = {
	restrict: 'E',
	bindings: {
		itemsCitiesWeather: '=' //Двухсторонний биндинг между otherCitiesWeather и itemCityWeather
	},
	template,
	controller	
};

export default itemCityWeatherComponent;