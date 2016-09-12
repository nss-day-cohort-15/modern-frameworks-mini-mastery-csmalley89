"use strict";

app.factory("FlowerStorage", ($q, $http) => {

  let getFlowerList = () => {
    let flowers = [];
    return $q((resolve, reject) => {
      $http.get('https://flower-power-angular.firebaseio.com/arrangements.json')
      .success((flowerObject) => {
        if (flowerObject !== null) {
        Object.keys(flowerObject).forEach((key) => {
          flowerObject[key].id = key;
          flowers.push(flowerObject[key]);
        });
        resolve(flowers);
      } else {
        resolve(flowers);
      }
      })
      .error((error) => {
        reject(error);
      });
    });
  };
  return {getFlowerList};
});
