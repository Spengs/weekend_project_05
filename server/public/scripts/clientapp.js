var myApp = angular.module('myApp', ['ngRoute']);

myApp.config(['$routeProvider', function($routeProvider){
  $routeProvider.
    when('/home', {
      templateUrl: '/views/partials/home.html',
      controller: 'HomeController'
    }).
    when('/barnyard', {
      templateUrl: '/views/partials/barnyard.html',
      controller: 'barnyardController'
    }).
    when('/bird', {
      templateUrl: '/views/partials/bird.html',
      controller: 'birdController'
    }).
    when('/cat', {
      templateUrl: '/views/partials/cat.html',
      controller: 'catController'
    }).
    when('/dog', {
      templateUrl: '/views/partials/dog.html',
      controller: 'dogController'
    }).
    when('/favorites', {
      templateUrl: '/views/partials/favorites.html',
      controller: 'favoritesController'
    }).
    when('/horse', {
      templateUrl: '/views/partials/horse.html',
      controller: 'horseController'
    }).
    when('/pig', {
      templateUrl: '/views/partials/pig.html',
      controller: 'pigController'
    }).
    when('/reptile', {
      templateUrl: '/views/partials/reptile.html',
      controller: 'reptileController'
    }).
    when('/smallfurry', {
      templateUrl: '/views/partials/smallfurry.html',
      controller: 'smallfurryController'
    }).
    otherwise({
      redirectTo: '/home'
    });
}]);


myApp.controller("homeController", ["$scope", "$http", function($scope, $http) {
  console.log("working")
  var key = 'dd1d2b40c2b11d3d395a50a9543d819f';
  var baseURL = 'http://api.petfinder.com/';


    var query = baseURL + 'pet.getRandom';
    query += '?key=' + key;
    query += '&animal=cat';
    query += '&output=basic';
    query += '&format=json';

    console.log('query: ', query);

    var request = encodeURI(query) + '&callback=JSON_CALLBACK';

    $http.jsonp(request).then(function(response) {
      $scope.cat = response.data.petfinder.pet;

    });

}]);

  myApp.controller("barnyardController", ["$scope", "$http", function($scope, $http) {
    var key = 'dd1d2b40c2b11d3d395a50a9543d819f';
    var baseURL = 'http://api.petfinder.com/';

      var query = baseURL + 'pet.getRandom';
      query += '?key=' + key;
      query += '&animal=barnyard';
      query += '&output=basic';
      query += '&format=json';

      console.log('query: ', query);

      var request = encodeURI(query) + '&callback=JSON_CALLBACK';

      $http.jsonp(request).then(function(response) {
        $scope.barnyard = response.data.petfinder.pet;

      });

  }]);

    myApp.controller("birdController", ["$scope", "$http", function($scope, $http) {
      var key = 'dd1d2b40c2b11d3d395a50a9543d819f';
      var baseURL = 'http://api.petfinder.com/';


        var query = baseURL + 'pet.getRandom';
        query += '?key=' + key;
        query += '&animal=bird';
        query += '&output=basic';
        query += '&format=json';

        console.log('query: ', query);

        var request = encodeURI(query) + '&callback=JSON_CALLBACK';

        $http.jsonp(request).then(function(response) {
          $scope.bird = response.data.petfinder.pet;

        });

}]);

myApp.controller("catController", ["$scope", "$http", function($scope, $http) {
  console.log("working")
  var key = 'dd1d2b40c2b11d3d395a50a9543d819f';
  var baseURL = 'http://api.petfinder.com/';


    var query = baseURL + 'pet.getRandom';
    query += '?key=' + key;
    query += '&animal=cat';
    query += '&output=basic';
    query += '&format=json';

    console.log('query: ', query);

    var request = encodeURI(query) + '&callback=JSON_CALLBACK';

    $http.jsonp(request).then(function(response) {
      $scope.cat = response.data.petfinder.pet;

    });

}]);

  myApp.controller("dogController", ["$scope", "$http", function($scope, $http) {
    var key = 'dd1d2b40c2b11d3d395a50a9543d819f';
    var baseURL = 'http://api.petfinder.com/';

      var query = baseURL + 'pet.getRandom';
      query += '?key=' + key;
      query += '&animal=dog';
      query += '&output=basic';
      query += '&format=json';

      console.log('query: ', query);

      var request = encodeURI(query) + '&callback=JSON_CALLBACK';

      $http.jsonp(request).then(function(response) {
        $scope.dog = response.data.petfinder.pet;

      });

  }]);

//     myApp.controller("favoritesController", ["$scope", "$http", function($scope, $http) {
//       var key = 'dd1d2b40c2b11d3d395a50a9543d819f';
//       var baseURL = 'http://api.petfinder.com/';
//
//
//         var query = baseURL + 'pet.getRandom';
//         query += '?key=' + key;
//         query += '&animal=smallfurry';
//         query += '&output=basic';
//         query += '&format=json';
//
//         console.log('query: ', query);
//
//         var request = encodeURI(query) + '&callback=JSON_CALLBACK';
//
//         $http.jsonp(request).then(function(response) {
//           $scope.small = response.data.petfinder.pet;
//
//         });
//
//
// }]);

myApp.controller("horseController", ["$scope", "$http", function($scope, $http) {
  console.log("working")
  var key = 'dd1d2b40c2b11d3d395a50a9543d819f';
  var baseURL = 'http://api.petfinder.com/';


    var query = baseURL + 'pet.getRandom';
    query += '?key=' + key;
    query += '&animal=horse';
    query += '&output=basic';
    query += '&format=json';

    console.log('query: ', query);

    var request = encodeURI(query) + '&callback=JSON_CALLBACK';

    $http.jsonp(request).then(function(response) {
      $scope.horse = response.data.petfinder.pet;

    });

}]);

  myApp.controller("pigController", ["$scope", "$http", function($scope, $http) {
    var key = 'dd1d2b40c2b11d3d395a50a9543d819f';
    var baseURL = 'http://api.petfinder.com/';

      var query = baseURL + 'pet.getRandom';
      query += '?key=' + key;
      query += '&animal=dog';
      query += '&output=basic';
      query += '&format=json';

      console.log('query: ', query);

      var request = encodeURI(query) + '&callback=JSON_CALLBACK';

      $http.jsonp(request).then(function(response) {
        $scope.pig = response.data.petfinder.pet;

      });

  }]);

    myApp.controller("reptileController", ["$scope", "$http", function($scope, $http) {
      var key = 'dd1d2b40c2b11d3d395a50a9543d819f';
      var baseURL = 'http://api.petfinder.com/';


        var query = baseURL + 'pet.getRandom';
        query += '?key=' + key;
        query += '&animal=reptile';
        query += '&output=basic';
        query += '&format=json';

        console.log('query: ', query);

        var request = encodeURI(query) + '&callback=JSON_CALLBACK';

        $http.jsonp(request).then(function(response) {
          $scope.reptile = response.data.petfinder.pet;

        });

}]);

myApp.controller("smallfurryController", ["$scope", "$http", function($scope, $http) {
  console.log("working")
  var key = 'dd1d2b40c2b11d3d395a50a9543d819f';
  var baseURL = 'http://api.petfinder.com/';


    var query = baseURL + 'pet.getRandom';
    query += '?key=' + key;
    query += '&animal=smallfurry';
    query += '&output=basic';
    query += '&format=json';

    console.log('query: ', query);

    var request = encodeURI(query) + '&callback=JSON_CALLBACK';

    $http.jsonp(request).then(function(response) {
      $scope.smallfurry = response.data.petfinder.pet;

    });

}]);
