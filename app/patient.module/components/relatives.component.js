angular
    .module('patientModule')
    .component('relatives', {
        transclude: true,
        $canActivate: function (dataService) {
            return dataService.isConnected();
        },
        controller: function relativesController() {
        },
        templateUrl: '/partials/relatives.component.html'
    });