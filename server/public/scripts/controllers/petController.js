myApp.controller('PetsController', ['$scope', '$http', '$sce',
 function ($scope, $http, $sce) {
  $scope.returnedPet = '';
  $scope.favCount = 0;
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

  updateFavCount();

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


      $scope.addFavorite = function() {
    var favorite = {
      petID: $scope.pet.id.$t,
      petName: $scope.pet.name.$t,
      description: '',
      image: ''
    };

    if($scope.pet.description.$t) {
      favorite.description = $scope.pet.description.$t.substring(0, 99);
    }

    var photos = $scope.pet.media.photos;
    // console.log('photos: ', photos);
    if(photos != undefined) {
      favorite.image = photos.photo[0].$t;
    }

    console.log('new favorite: ', favorite);

    // post to server
    $http.post('/favorites', favorite).then(function(response) {
      if(response.status == 201) {
        console.log('saved favorite');
        updateFavCount();
      } else {
        console.log('error saving favorite');
      }
    });
  }

  function updateFavCount() {
    $http.get('/favorites/count').then(function(response) {
      console.log(response);
      $scope.favCount = response.data.count;
    });
  }


}]);
