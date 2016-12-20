import angular from 'angular';
import userCityWeatherComponent from './user-city-weather.component';
import UserCityWeatherFactory from './user-city-weather.factory';

const userCityWeatherModule = angular.module('userCityWeather', [])

	.component('userCityWeather', userCityWeatherComponent)

	.factory('UserCityWeatherFactory', UserCityWeatherFactory)

	.name;

export default userCityWeatherModule;