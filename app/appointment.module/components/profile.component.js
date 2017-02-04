angular
    .module('appointmentModule')

    .component('profile', {

        transclude: true,
        controller: function profileController(dataService) {
            var $ctrl = this;
            this.$routerOnActivate = function (next) {
                $ctrl.id = next.params.id;
                dataService.getDoctorById($ctrl.id)
                    .then(function (response) {
                        $ctrl.selecteddoctor = response.data;
                    })
            };

        },
        templateUrl: '/partials/profile.component.html'
    })
