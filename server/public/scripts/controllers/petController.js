myApp.controller('PetsController', ['$scope', '$http', '$sce',
function ($scope, $http, $sce) {
  $scope.returnedPet = '';
  $scope.petTypes = [
    { petName: 'Barn Yard', petType: 'barnyard' },
    { petName: 'Birds', petType: 'bird' },
    { petName: 'Cats', petType: 'cat' },
    { petName: 'Dogs', petType: 'dog' },
    { petName: 'Horses', petType: 'horse' },
    { petName: 'Pigs', petType: 'pig' },
    { petName: 'Reptiles', petType: 'reptile' },
    { petName: 'Small Furrys', petType: 'smallfurry' },
  ];

  $scope.petLog = function () {
    $scope.animalType = this.pets.petType;

    //----------------* API CALL *------------------//

    var key = 'dd1d2b40c2b11d3d395a50a9543d819f';
    var baseURL = 'http://api.petfinder.com/';


    var query = baseURL + 'pet.getRandom';
        query += '?key=' + key;
        query += '&animal=' + $scope.animalType;
        query += '&output=basic';
        query += '&format=json';

    var request = encodeURI(query);

    $http.jsonp(request, {jsonpCallbackParam: 'callback'}).then(function(response) {
          $scope.returnedPet = response.data.petfinder.pet;
          console.log($scope.returnedPet);
        });
      };


}]);
