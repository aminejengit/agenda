var app = angular.module("myApp", []);
app.controller("myCtrl", function ($scope, dataService, validationService) {
    var self = this;
    this.initPlaceHolders = function () {
        $scope.doctorsPlaceHolder = "Médecin ou Centre ou Clinique";
        $scope.specPlaceHolder = "Spécialité";
        $scope.localPlaceHolder = "Canton ou commune ou adresse"
    }
    this.initPlaceHolders();
    // handle intro section
    $scope.introSection = "slider";
    $scope.showSlider = function () {
        $scope.introSection = "slider";
    }




    $scope.showResult = function () {
        if (validationService.isValidInputs()) {
            $scope.doctors = dataService.getDoctorsEntities();
            $scope.introSection = "result";
            $scope.showError = false;
            self.initPlaceHolders();
            console.log($scope.doctorsPlaceHolder);
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