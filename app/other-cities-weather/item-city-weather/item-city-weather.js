import angular from 'angular';
import itemCityWeatherComponent from './item-city-weather.component';

const itemCityWeatherModule = angular.module('itemCityWeather', [])
	
	.component('itemCityWeather', itemCityWeatherComponent)

	.name;

export default itemCityWeatherModule;