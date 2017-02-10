myApp.controller('PetsController', ['$scope', '$http',
function ($scope, $http) {
  $scope.petTypes = [
    {
      petName: 'Barn Yard',
      petType: 'barnyard',
   },
   {
     petName: 'Birds',
     petType: 'bird',
  },
  {
    petName: 'Cats',
    petType: 'cat',
  },
   {
     petName: 'Dogs',
     petType: 'dog',
  },
  {
    petName: 'Horses',
    petType: 'horse',
  },
  {
    petName: 'Pigs',
    petType: 'pig',
  },
  {
    petName: 'Reptiles',
    petType: 'reptile',
  },
  {
    petName: 'Small Furrys',
    petType: 'smallfurry',
  }
];
  $scope.petLog = function () {
    console.log(this.pets.petType);
  }
}]);
