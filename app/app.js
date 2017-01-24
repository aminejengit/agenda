var app = angular.module("myApp", []);
app.controller("myCtrl", function ($scope, dataService) {

    // handle intro section
    $scope.introSection = "slider";
    $scope.showSlider = function () {
        $scope.introSection = "slider";
    }

    //input validation 
    $scope.validInput = false;
    $scope.doctorOrCenter="";
    $scope.spec="";
    $scope.local="";
    $scope.date="";
    $scope.onvalueChangeDoctorCenter = function () {   
         if($scope.doctorOrCenter.length>0 || (
                $scope.spec.length>0 && $scope.local.length>0 && $scope.date.length>0 
                )){
            $scope.validInput = true;
        }else{
            $scope.validInput = false;
        }
        console.log($scope.validInput);
    }


    $scope.showResult = function () {
        if($scope.validInput){
            $scope.introSection = "result";
        }
        $scope.validInput=false;
    }
    
  
    
    //import search results
    $scope.doctors = dataService.getSearchDoctors();
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