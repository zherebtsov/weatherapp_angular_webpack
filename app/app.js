/* Главный модуль программы */
import angular from 'angular';
import './css/main.css';
import ngGeolocation from './bower_components/ngGeolocation/ngGeolocation.min';
import userCityWeather from './user-city-weather/user-city-weather';
import otherCitiesWeather from './other-cities-weather/other-cities-weather.js';


angular.module('WeatherApp', [
	'ngGeolocation',
	userCityWeather,
	otherCitiesWeather
]);