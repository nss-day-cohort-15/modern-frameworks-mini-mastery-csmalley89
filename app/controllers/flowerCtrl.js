"use strict";

app.controller('flowerCtrl', function($scope, FlowerStorage){

  FlowerStorage.getFlowerList()
  .then((flowerCollection) => {
    $scope.flowers = flowerCollection;
  });


});
