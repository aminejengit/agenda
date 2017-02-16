angular
    .module('patientModule')
    .component('patientdoctors', {
        transclude: true,
        $canActivate: function (dataService) {
            return dataService.isConnected();
        },
        controller: function patientdoctrosController() {
        },
        templateUrl: '/partials/patientdoctors.component.html'
    });