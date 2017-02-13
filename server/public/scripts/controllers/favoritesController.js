myApp.controller('FavoritesController', ['$scope', '$http',
function ($scope, $http) {
  $scope.favorites = [];
  $scope.favCount = '';
  getFavorites();

  function getFavorites() {
    $http.get('/pets').then(function(response) {
      if(response.status == 200) {
        $scope.favorites = response.data;
        $scope.favCount = $scope.favorites.length;
      } else {
        console.log('error getting favorites');
      }
    });

}}]);
