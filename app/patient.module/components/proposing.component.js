angular
    .module('patientModule')
    .component('proposing', {
        transclude: true,
        $canActivate: function (dataService) {
            return dataService.isConnected();
        },
        controller: function patientdoctrosController() {
        },
        templateUrl: '/partials/proposing.component.html'
    });