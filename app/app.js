"use strict";

var app = angular.module("FlowerApp", ["ngRoute"])


app.config(function($routeProvider) {
  $routeProvider.
    when('/', {
      templateUrl:'partials/flower-list.html',
      controller: 'flowerCtrl'
    })
});

app.run(($location, FBCreds) => {
  let creds = FBCreds;
  let authConfig = {
    apiKey: creds.key,
  };
  firebase.initializeApp(config);
});
