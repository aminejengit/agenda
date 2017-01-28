var app = angular.module("myApp", ['ngAnimate', 'ngSanitize', 'ui.bootstrap']);
app.controller("myCtrl", function ($scope, dataService) {
    var self = this;

    $scope.doctorList = dataService.mockedDoctors;

    $scope.introSection = "slider";
    $scope.showSlider = function () {
        $scope.introSection = "slider";
    }

    $scope.onSelect = function ($item, $model, $label) {
        $scope.showResultsForDoctor();
        $scope.selectedForSpec = undefined;
        $scope.selectedLocal = undefined;
    };

    $scope.onSelectForSearch = function () {
        $scope.selectedDoc = undefined;
    }


    $scope.showResultsForDoctor = function () {
        if ($scope.selectedDoc != null) {
            dataService.selecteddoctorName = $scope.selectedDoc.name;
            $scope.doctors = dataService.doctorFilterDoctorsForDoctorFiled();
            $scope.introSection = "result";
        } else {
            dataService.selecteddoctorName = dataService.undefinedQuerry;
        }
    }


    $scope.showResult = function () {

        if ($scope.selectedForSpec != null) {
            dataService.selectedspec = $scope.selectedForSpec.spec;
        } else {
            dataService.selectedspec = dataService.undefinedQuerry;
        }
        if ($scope.selectedLocal != null) {
            dataService.selectedlocal = $scope.selectedLocal.location;
        } else {
            dataService.selectedlocal = dataService.undefinedQuerry;
        }
        if ($scope.selectedDoc != null || $scope.selectedLocal != null) {
            $scope.doctors = dataService.getfilterdoctorsForSearch();
            $scope.introSection = "result";
            $scope.showError = false;
        } else {
            $scope.showError = true;
            $scope.introSection = "slider";
        }
    }
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
    $scope.connectionError = false;
    $scope.isconnected = false;
    $scope.connect = function () {
        if (dataService.isconnected(self.username,self.password)) {
            $scope.isconnected = true;
            $scope.connectionError = false;
            if ($scope.introSection == "profile") {
                $scope.introSection = "schedule";
            }
        } else {
            $scope.connectionError = true;
        }
    }
    $scope.schedule = function () {
        if (!$scope.isconnected) {
            $('#responsive').modal('show');
        } else {
            $scope.introSection = "schedule";
        }
    }
});