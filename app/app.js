var app = angular.module("myApp", []);
app.controller("myCtrl", function ($scope, dataService,validationService) {
    // handle intro section
    $scope.introSection = "slider";
    $scope.showSlider = function () {
        $scope.introSection = "slider";
    }




    $scope.showResult = function () {
        console.log(validationService.isValidInputs());
        if (validationService.isValidInputs()) {
            $scope.introSection = "result";
        }
    }
    //import search results
    $scope.doctors = dataService.getDoctorsEntities();
    // select doctor to show his profile
    $scope.selectedDoctor = {};
    $scope.showProfile = function (doctor) {
        $scope.selectedDoctor = doctor;
        $scope.introSection = "profile";
    }
    $scope.closeProfile = function () {
        $scope.introSection = "result";

    }
});