angular
    .module('appointmentModule')
    .component('result', {
        transclude: true,
        controller: function resultController(dataService, resultService) {
            var $ctrl = this;
            this.$onInit = function () {
                $ctrl.fillSearchResult = function () {
                    var location = resultService.selectedLocation
                    var spec = resultService.selectedSpec
                    var date = resultService.selectedDate
                    var language = resultService.selectedLanguage
                    dataService.getSearchResultsByCriteria(spec, location, date, language)
                        .then(function (response) {
                            $ctrl.doctors = response.data;
                        })
                }
                $ctrl.fillSearchResult();

            }
        },
        templateUrl: '/partials/result.component.html'
    });