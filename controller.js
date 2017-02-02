angular
    .module('RouteControllers', [])
    .controller('HomeController', function($scope) {
    })
    .controller('BandController', function($scope) {
    })
    .controller('LiveController', function($scope) {   
    })
    .controller('RegisterController', function($scope, store, UserAPIService) {
 
        // $scope.registrationUser = {};
        // var URL = "https://morning-castle-91468.herokuapp.com/";

        // $scope.login = function() {
        //     UserAPIService.callAPI(URL + "accounts/api-token-auth/", $scope.data).then(function(results) {
        //         $scope.token = results.data.token;
        //         store.set('name', $scope.registrationUser.name);
        //         store.set('authToken', $scope.token);
        //         console.log($scope.token);
        //     }).catch(function(err) {
        //         console.log(err.data);
        //     });
        // }
 
        // $scope.submitForm = function() {
        //     if ($scope.registrationForm.$valid) {
        //         $scope.registrationUser.name = $scope.user.name;
        //         $scope.registrationUser.email = $scope.user.email;
        //     }
 
        //     UserAPIService.callAPI(URL + "accounts/register/", $scope.registrationUser).then(function(results) {
        //             $scope.data = results.data;
        //             alert("You have successfully registered for The Monkees! newsletter.");
        //             $scope.login();
        //         }).catch(function(err) {
        //             alert("Oops! Something went wrong!");
        //             console.log(err);
        //         });
        // }

    });
    