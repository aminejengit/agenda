
app.service("dataService", function () {
    var self = this;
    var undefinedQuerry = "#";
    self.selecteddoctorName = undefinedQuerry;
    self.selectedspec = undefinedQuerry;
    self.selectedlocal = undefinedQuerry;

    this.mockedDoctors = [
        { picture: "assets/onepage2/img/avatar/1.png", name: 'DR. Ben THOMPSON', spec: "Cardiologie", location: "Onex / Genève", excludedDates: [{ date: '2017-02-03', excludedTimes: ["07:00AM", "07:30AM"] }] },
        { picture: "assets/onepage2/img/avatar/2.png", name: 'DR. Monique DUNANT', spec: "Gynécologie", location: " ncy / Genève", excludedDates: [{ date: '2017-02-03', excludedTimes: ["07:00AM", "07:30AM"] }] },
        { picture: "assets/onepage2/img/avatar/3.png", name: 'R. Jean FAVRE', spec: "Pédiatrie", location: "Nyon / Vaud", excludedDates: [{ date: '2017-02-03', excludedTimes: ["07:00AM", "07:30AM"] }] },
        { picture: "assets/onepage2/img/avatar/4.png", name: 'DR. Denis CHEVRELEY', spec: "Néonatologie", location: "Avry / Fribourg", excludedDates: [{ date: '2017-02-03', excludedTimes: ["07:00AM", "07:30AM"] }] },
        { picture: "assets/onepage2/img/avatar/5.png", name: 'DR. Jacqueline DUPONT', spec: "Radiologie", location: "Vex / Va is", excludedDates: [{ date: '2017-02-03', excludedTimes: ["07:00AM", "07:30AM"] }] },
        { picture: "assets/onepage2/img/avatar/1.png", name: 'DR. Ben THOMPSON', spec: "Cardiologie", location: "Onex / Genève", excludedDates: [{ date: '2017-02-03', excludedTimes: ["07:00AM", "07:30AM"] }] },
        { picture: "assets/onepage2/img/avatar/2.png", name: 'DR. Monique DUNANT', spec: "Gynécologie", location: " ncy / Genève", excludedDates: [{ date: '2017-02-03', excludedTimes: ["07:00AM", "07:30AM"] }] },
        { picture: "assets/onepage2/img/avatar/3.png", name: 'R. Jean FAVRE', spec: "Pédiatrie", location: "Nyon / Vaud", excludedDates: [{ date: '2017-02-03', excludedTimes: ["07:00AM", "07:30AM"] }] },
        { picture: "assets/onepage2/img/avatar/4.png", name: 'DR. Denis CHEVRELEY', spec: "Néonatologie", location: "Avry / Fribourg", excludedDates: [{ date: '2017-02-03', excludedTimes: ["07:00AM", "07:30AM"] }] },
        { picture: "assets/onepage2/img/avatar/5.png", name: 'DR. Jacqueline DUPONT', spec: "Radiologie", location: "Vex / Va is", excludedDates: [{ date: '2017-02-03', excludedTimes: ["07:00AM", "07:30AM"] }] },
        { picture: "assets/onepage2/img/avatar/1.png", name: 'DR. Ben THOMPSON', spec: "Cardiologie", location: "Onex / Genève", excludedDates: [{ date: '2017-02-03', excludedTimes: ["07:00AM", "07:30AM"] }] },
        { picture: "assets/onepage2/img/avatar/2.png", name: 'DR. Monique DUNANT', spec: "Gynécologie", location: " ncy / Genève", excludedDates: [{ date: '2017-02-03', excludedTimes: ["07:00AM", "07:30AM"] }] },
        { picture: "assets/onepage2/img/avatar/3.png", name: 'R. Jean FAVRE', spec: "Pédiatrie", location: "Nyon / Vaud", excludedDates: [{ date: '2017-02-03', excludedTimes: ["07:00AM", "07:30AM"] }] },
        { picture: "assets/onepage2/img/avatar/4.png", name: 'DR. Denis CHEVRELEY', spec: "Néonatologie", location: "Avry / Fribourg", excludedDates: [{ date: '2017-02-03', excludedTimes: ["07:00AM", "07:30AM"] }] },
        { picture: "assets/onepage2/img/avatar/5.png", name: 'DR. Jacqueline DUPONT', spec: "Radiologie", location: "Vex / Va is", excludedDates: [{ date: '2017-02-03', excludedTimes: ["07:00AM", "07:30AM"] }] },
        { picture: "assets/onepage2/img/avatar/1.png", name: 'DR. Ben THOMPSON', spec: "Cardiologie", location: "Onex / Genève", excludedDates: [{ date: '2017-02-03', excludedTimes: ["07:00AM", "07:30AM"] }] },
        { picture: "assets/onepage2/img/avatar/2.png", name: 'DR. Monique DUNANT', spec: "Gynécologie", location: " ncy / Genève", excludedDates: [{ date: '2017-02-03', excludedTimes: ["07:00AM", "07:30AM"] }] },
        { picture: "assets/onepage2/img/avatar/3.png", name: 'R. Jean FAVRE', spec: "Pédiatrie", location: "Nyon / Vaud", excludedDates: [{ date: '2017-02-03', excludedTimes: ["07:00AM", "07:30AM"] }] },
        { picture: "assets/onepage2/img/avatar/4.png", name: 'DR. Denis CHEVRELEY', spec: "Néonatologie", location: "Avry / Fribourg", excludedDates: [{ date: '2017-02-03', excludedTimes: ["07:00AM", "07:30AM"] }] },
        { picture: "assets/onepage2/img/avatar/5.png", name: 'DR. Jacqueline DUPONT', spec: "Radiologie", location: "Vex / Va is", excludedDates: [{ date: '2017-02-03', excludedTimes: ["07:00AM", "07:30AM"] }] }
    ];

    this.isconnected = function (username, password) {
        return username == "user" && password == "user";
    }


    this.doctorFilterDoctorsForDoctorFiled = function () {
        var result = [];
        var doctorIterator;
        for (doctor in self.mockedDoctors) {
            doctorIterator = self.mockedDoctors[doctor];
            if (self.selecteddoctorName != self.undefinedQuerry) {
                if (doctorIterator.name.toLowerCase().includes(self.selecteddoctorName.toLowerCase())) {
                    result.push(doctorIterator);
                }
            }
        }
        return result;
    }
    this.getfilterdoctorsForSearch = function () {
        var result = [];
        var doctorIterator;
        for (doctor in self.mockedDoctors) {
            doctorIterator = self.mockedDoctors[doctor];
            if (self.selectedspec != self.undefinedQuerry && self.selectedlocal != self.undefinedQuerry) {
                if (doctorIterator.spec.toLowerCase().includes(self.selectedspec.toLowerCase()) && (doctorIterator.location.toLowerCase().includes(self.selectedlocal.toLowerCase()))) {
                    result.push(doctorIterator);
                }
            }
            else if (self.selectedlocal != null) {
                if (doctorIterator.location.toLowerCase().includes(self.selectedlocal.toLowerCase())) {
                    result.push(doctorIterator);
                }

            }
        }
        return result;
    }

});