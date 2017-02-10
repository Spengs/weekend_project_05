myApp.controller('PetsController', ['$scope', '$http',
function ($scope, $http) {
  console.log('pets');
  $scope.petTypes = [
    {
      name: 'Barn Yard',
      type: 'barnyard',
   },
   {
     name: 'Birds',
     type: 'bird',
  },
  {
    name: 'Cats',
    type: 'cat',
  },
   {
     name: 'Dogs',
     type: 'dog',
  },
  {
    name: 'Horses',
    type: 'horse',
  },
  {
    name: 'Pigs',
    type: 'pig',
  },
  {
    name: 'Reptiles',
    type: 'reptile',
  },
  {
    name: 'Small Furrys',
    type: 'smallfurry',
  }
];
console.log($scope.petTypes[0].name);
}]);
