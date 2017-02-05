angular
    .module('appointmentModule')
    .component('connexion', {
        transclude: true,
        controller: function connexionController(dataService) {
            var $ctrl = this;
            $ctrl.connectionError = false;
            $ctrl.isconnected = false;
            $ctrl.connect = function () {
                dataService.connect($ctrl.username, $ctrl.password);
                if (dataService.isConnected()) {
                    $ctrl.connectionError = false;
                } else {
                    $ctrl.connectionError = true;
                }
            }
            $ctrl.deDonnect = function () {
                dataService.deConnect(); 
            }
            $ctrl.isConnected= function(){
                return dataService.isConnected();
            }
        },
        templateUrl: '/partials/connexion.component.html'
    })
