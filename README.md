# WeatherApp (Angular 1.6 + WebPack)
> Приложение разработанно в рамках ознакомления с JavaScript-фреймворком [AngularJS](https://angularjs.org/), получения навыков работы с [WebPack](http://webpack.github.io/) и GitHub.

## Описание
---
WeatherApp - это oдностраничное приложение (single-page application), которое отображает погоду в городе пользователя, позволяет по поиску добавлять/удалять дополнительные города и сохроняет информацию с данными о погоде локально в браузере пользователя. Для получения информации о погоде используется API сервиса [OpenWeatherMap](http://openweathermap.org/api).

### Компоненты
* `userCityWeather` - Определяет погоду в городе у пользователя.
* `otherCitiesWeather` - Выполняет поиск данных о погоде по введенному названию города, добовляет город с данными.
    * `itemCityWeather` - Отображает информацию о добавленных городах, по запросу удаляет город.

### Алгоритм работы компонентов
**`userCityWeather`**
* Определяем координаты пользователя
* Формируем запрос к API с полученными координатами
* Отправляем запрос на сервер
* Принимаем ответ от сервера
* Отображаем полученные данные (Название города, текущую температуру и т. д.)

**`otherCitiesWeather`**
* Получаем название города от пользователя
* Формируем запрос к API с названием города
* Отправляем запрос на сервер
* Получаем ответ от сервера
* Пересылаем полученные данные компоненту `itemCityWeather`

**`itemCityWeather`**
* Получаем данные от компонента `otherCitiesWeather`
* Отображаем данные (Название города, текущую температуру и т. д.)
* При нажатии на соответствующую кнопку, выполняем удаление выбранного города

### Файловая структура
    app/    *главная директория приложения
        -css/   *стили
            --main.css  *все стили приложения + bootstrap и font-awesome
        -user-city-weather/ *файлы компонента userCityWeather
            --user-city-weather.js  *модуль
            --user-city-weather.component.js    *компонент
            --user-city-weather.controller.js   *контроллер
            --user-city-weather.factory.js  *сервисы
            --user-city-weather.html    *шаблон
        -other-cities-weather/  *файлы компонента otherCitiesWeather
            --other-cities-weather.js   *модуль
            --other-cities-weather.component.js *компонент
            --other-cities-weather.controller.js    *контроллер
            --other-cities-weather.factory.js   *сервисы
            --other-cities-weather.html *шаблон
            --item-city-weather/    *файлы компонента itemCityWeather
                ---item-city-weather.js *модуль
                ---item-city-weather.component.js   *компонент
                ---item-city-weather.controller.js  *контроллер
                ---item-city-weather.html   *шаблон
        -app.js *главный модуль приложения
        -index.html

## Начало работы
---
* Кланируем себе репозиторий либо качаем *.zip
* Вводим `npm install` для установки всех зависимостей
* Устанавливаем необходимые библиотеки:
    * `bower i bootstrap`
    * `bower i font-awesome`
    * `bower i ngGeolocation`
* `npm start`

## WebPack
---
Осуществляет сборку всего проекта в режиме разработки, поднимает сервер с LiveReload и HotModuleReplacement