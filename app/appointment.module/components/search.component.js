angular
    .module('appointmentModule')
    .component('search', {
        transclude: true,
        bindings: {
            $router: '<'
        },
        $routeConfig: [
            { path: '/slider', name: 'Slider', component: 'slider', useAsDefault: true },
            { path: '/result', name: 'Result', component: 'result' }
        ],
        controller: function searchController(dataService, resultService) {
            var $ctrl = this;
            dataService.router = $ctrl.$router;
            $ctrl.doctorAndCenterResult = [];
            $ctrl.selectedLanguage = "FR";
            this.$onInit = function () {
                $('#datetimepicker').datetimepicker({ value: '', format: $("#datetimepicker_format_value").val(), step: 15 });
                $ctrl.fillSpecs = function () {
                    dataService.getSpecsByQuerry($ctrl.querrySpec)
                        .then(function (response) {
                            $ctrl.allSpecs = response.data;
                        })
                }
                $ctrl.fillSpecs();
            }

            $ctrl.getDoctorsByQuerry = function () {
                dataService.getDoctorsByQuerry($ctrl.selectedDoctorOrCenter)
                    .then(function (response) {
                        $ctrl.doctorAndCenterResult = response.data;
                    })
            }

            $ctrl.getLocationsByQuerry = function () {
                var pyrmont = new google.maps.LatLng(46.806532, 8.436839);

                map = new google.maps.Map(document.getElementById('map'), {
                    center: pyrmont,
                    zoom: 15
                });

                var request = {
                    location: pyrmont,
                    radius: '500',
                    query: $ctrl.selectedLocal
                };

                service = new google.maps.places.PlacesService(map);
                service.textSearch(request, function (results, status) {
                    if (status == google.maps.places.PlacesServiceStatus.OK) {
                        $ctrl.returnedLocations = results;
                    }
                });
            }

            $ctrl.showResult = function () {
                if ($ctrl.selectedLocal != null) {
                    $("html, body").animate({ scrollTop: 0 }, "slow");
                    resultService.selectedSpec = $ctrl.selectedSpec;
                    resultService.selectedLocation = $ctrl.selectedLocal;
                    resultService.selectedDate = $('#datetimepicker').val();
                    console.log(resultService.selectedDate);
                    resultService.selectedLanguage = $ctrl.selectedLanguage;
                    $ctrl.$router.navigate(['Result']);
                    $ctrl.showError = false;
                } else {
                    $ctrl.showError = true;
                }
            }
            $ctrl.seletDate = function () {
                console.log("jen");
            }

            // connection 


            $ctrl.getSeleectedDate = function (time) {
                if (!$ctrl.isconnected) {
                    $('#responsive').modal('show');
                } else {
                    $ctrl.introSection = "schedule";
                }
            }



        },
        templateUrl: '/partials/search.component.html'

    });
