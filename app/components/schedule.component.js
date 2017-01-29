app.component('scheduler', {
    bindings: {
        excludeddates: '<',
        callback: '&'
    },

    transclude: true,
    controller: function MyTabsController() {
        $('#paginator').datepaginator({
            size: "small",
            onSelectedDateChanged: function (a, t) {
                self.dt = new Date(moment(t).toDate());
                self.dt.setDate(self.dt.getDate()+1);
                self.constructTimes(7, 9, 'AM');
            }
        });
        var self = this;

        self.datePickerPptions = {
            showWeeks: true,
            minDate: new Date(),
        };

        this.callback = function () {
            alert('jen');
        }
        self.getTimesByDate = function (dateParam) {
            var dates = self.excludeddates;
            for (date in dates) {
                if (dateParam == dates[date].date) {
                    return dates[date].excludedTimes;
                }
            }
        }

        this.jen = "autocomplete-component";

        this.times = [];
        this.constructTimes = function (start, end, describer) {
            var customDate;
            var day;
            if (self.dt == undefined) {
                self.dt = new Date();
            }
            if (self.dt != undefined) {
                var date = this.dt;
                customDate = date.toISOString().slice(0,10);
            }
            var timesTable = [];
            var timeVar = "";
            var mins = ["00", "15", "30", "45"];
            var excludedTimes = self.getTimesByDate(customDate);
           
            var clickable = "";
            for (hour = start; hour <= end; hour++) {
                for (var min in mins) {


                    timeVar = "0" + hour + ":" + mins[min] + describer;
                    if (excludedTimes != undefined && excludedTimes.indexOf(timeVar) > -1) {
                        clickable = false;
                    } else {
                        clickable = true;
                    }
                    timesTable.push({ time: timeVar, isClickable: clickable });
                }
            }
            self.times = timesTable;
        }
        self.constructTimes(7, 9, 'AM');

        this.getTimes = function (start, end, describer) {
            return this.times;
        }
    },
    templateUrl: '/partials/schedule.component.html'
});