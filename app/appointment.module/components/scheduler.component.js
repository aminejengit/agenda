angular
    .module('appointmentModule')
    .component('scheduler', {
        bindings: {
            selecttime: '&',
            availability: '=',
            $router: '<'
        },


        transclude: true,
        controller: function MyTabsController(dataService) {
            var $ctrl = this;
            $('#paginator').datepaginator({
                size: "small",
                onSelectedDateChanged: function (a, t) {
                    $ctrl.dt = new Date(moment(t).toDate());
                    $ctrl.dt.setDate($ctrl.dt.getDate() + 1);
                    $ctrl.constructTimes(7, 9, 'AM');
                }
            });


            $ctrl.datePickerPptions = {
                showWeeks: true,
                minDate: new Date(),
            };

            $ctrl.onSelectTime = function (time) {
                if (time.isClickable) {
                    if (dataService.isConnected()) {
                        $ctrl.selecttime({ selected: { date: $ctrl.customDate, time: time.time } });
                        $('#schedulerDetails').modal('show');
                        
                    } else {
                        dataService.redirectToAppointment = true;    
                        console.log($ctrl.$router)
                        $('#responsive').modal('show');
                    }
                }
            }
            $ctrl.getTimesByDate = function (dateParam) {
                var dates = $ctrl.availability;
                for (date in dates) {
                    if (dateParam == dates[date].date) {
                        return dates[date].availableTimes;
                    }
                }
            }
            $ctrl.times = [];
            $ctrl.customDate = "";
            $ctrl.constructTimes = function (start, end, describer) {
                var day;
                if ($ctrl.dt == undefined) {
                    $ctrl.dt = new Date();
                }
                if ($ctrl.dt != undefined) {
                    var date = this.dt;
                    $ctrl.customDate = date.toISOString().slice(0, 10);
                }
                var timesTable = [];
                var timeVar = "";
                var mins = ["00", "15", "30", "45"];
                var availableTimes = $ctrl.getTimesByDate($ctrl.customDate);

                var clickable = "";
                for (hour = start; hour <= end; hour++) {
                    for (var min in mins) {


                        timeVar = "0" + hour + ":" + mins[min] + describer;
                        if (availableTimes != undefined && availableTimes.indexOf(timeVar) > -1) {
                            clickable = true;
                        } else {
                            clickable = false;
                        }
                        timesTable.push({ time: timeVar, isClickable: clickable });
                    }
                }
                $ctrl.times = timesTable;
            }
            $ctrl.constructTimes(7, 9, 'AM');

            $ctrl.getTimes = function (start, end, describer) {
                return this.times;
            }
        },
        templateUrl: '/partials/scheduler.component.html'
    });