var app = angular.module("myApp", []);
app.controller("myCtrl", function ($scope, dataService,validationService) {
    // handle intro section
    $scope.introSection = "slider";
    $scope.showSlider = function () {
        $scope.introSection = "slider";
    }




    $scope.showResult = function () {
        if (validationService.isValidInputs()) {
            $scope.introSection = "result";
            $scope.showError = false;
        }else{
            $scope.showError = true;
            $scope.introSection = "slider";
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