var myApp = angular.module('myApp', ['ngRoute']);

myApp.config(['$routeProvider', function ($routeProvider) {
  $routeProvider
    .when('/pets', {
      templateUrl: 'views/partials/pets.html',
      controller: 'PetsController',
    })
    .when('/favorites', {
      templateUrl: 'views/partials/favorites.html',
      controller: 'FavoritesController',
    })
    .otherwise({
      redirectTo: '/pets',
    });
}]);
