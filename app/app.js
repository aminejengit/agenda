var app = angular.module("myApp", ['ngAnimate', 'ngSanitize', 'ui.bootstrap']);
app.controller("myCtrl", function ($scope, dataService) {
    var self = this;


    var _selected;
    $scope.selected = undefined;
    $scope.doctorList = dataService.mockedDoctors;





    $scope.introSection = "slider";
    $scope.showSlider = function () {
        $scope.introSection = "slider";
    }




    $scope.showResult = function () {
        if ($scope.selectedDoc != null) {
            dataService.selecteddoctorName = $scope.selectedDoc.name;
        } else {
            dataService.selecteddoctorName = dataService.undefinedQuerry;
        }
        if (($scope.selectedForSpec != null) && ($scope.selectedLocal != null)) {
            dataService.selectedspec = $scope.selectedForSpec.spec;
            dataService.selectedlocal = $scope.selectedLocal.location;
        } else {
            dataService.selectedspec = dataService.undefinedQuerry;
            dataService.selectedlocal = dataService.undefinedQuerry
        }
        if ($scope.selectedDoc != null || $scope.selectedLocal != null) {
            $scope.doctors = dataService.getDoctorsEntities();
            $scope.introSection = "result";
            $scope.showError = false;
        } else {
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
    // connection 
    $scope.isconnected = false;
    $scope.connect = function () {

        if (self.username == "user" && self.username == "user") {
            $scope.isconnected = true;
        }
    }
    $scope.schedule = function () {
        if (!$scope.isconnected) {
            var elemnt = angular.element(document.querySelector('#responsive'));
            console.log(elemnt);
        } else {
            $scope.introSection = "schedule";
        }
    }




});