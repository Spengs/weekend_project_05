var myApp = angular.module('myApp', ['ngRoute']);

myApp.config(['$routeProvider', '$sceDelegateProvider', function ($routeProvider, $sceDelegateProvider) {
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
  $sceDelegateProvider
  .resourceUrlWhitelist([
    'self',
    'http://api.petfinder.com/**'
  ]);
}]);
