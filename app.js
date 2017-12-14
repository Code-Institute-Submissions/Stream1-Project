angular.module('BandSite', ['ngRoute', 'RouteControllers']);
angular.module('BandSite').config(function($locationProvider, $routeProvider) {
    
    $locationProvider.html5Mode(true); 

    $routeProvider
    .when('/', {
        templateUrl: 'templates/home.html',
        controller: 'HomeController'
    })
    .when('/band', {
        templateUrl: 'templates/band.html',
        controller: 'BandController'
    })
    .when('/live', {
        templateUrl: 'templates/live.html',
        controller: 'LiveController'
    })
    .when('/events', {
        templateUrl: 'templates/events.html',
        controller: 'EventsController'
    })   
    .when('/music', {
        templateUrl: 'templates/music.html',
        controller: 'MusicController'
    })
    .when('/register', {
        templateUrl: 'templates/register.html',
        controller: 'RegisterController'
    });
});