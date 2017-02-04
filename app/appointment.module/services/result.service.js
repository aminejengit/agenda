
angular
    .module('appointmentModule')
    .service("resultService", function ($http, $q) {
        var $service = this;
        $service.selectedSpec = undefined;
        $service.selectedLocation = undefined;
        $service.selectedDate = undefined;
        $service.selectedLanguage = undefined;
    });
