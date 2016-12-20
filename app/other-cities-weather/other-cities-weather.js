import angular from 'angular';
import otherCitiesWeatherComponent from './other-cities-weather.component';
import OtherCitiesWeatherFactory from './other-cities-weather.factory';
import itemCityWeather from './item-city-weather/item-city-weather';

const otherCitiesWeatherModule = angular.module('otherCitiesWeather', [
	itemCityWeather
])

	.component('otherCitiesWeather', otherCitiesWeatherComponent)

	.factory('OtherCitiesWeatherFactory', OtherCitiesWeatherFactory)

	.name;

export default otherCitiesWeatherModule;