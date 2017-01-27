
app.service("dataService", function () {
    var self = this;
    var undefinedQuerry = "#";
    self.selecteddoctorName = undefinedQuerry;
    self.selectedspec = undefinedQuerry;
    self.selectedlocal = undefinedQuerry;

    this.mockedDoctors = [
        { picture: "assets/onepage2/img/avatar/1.png", name: 'DR. Ben Thompson', spec: "cardiologie", location: "Onex / Genève" },
        { picture: "assets/onepage2/img/avatar/2.png", name: 'DR. Monique DUNANT', spec: "gynécologie", location: " ncy / Genève" },
        { picture: "assets/onepage2/img/avatar/3.png", name: 'R. Jean FAVRE', spec: "pédiatrie", location: "Nyon / Vaud" },
        { picture: "assets/onepage2/img/avatar/4.png", name: 'DR. Denis CHEVRELEY', spec: "néonatologie", location: "Avry / Fribourg" },
        { picture: "assets/onepage2/img/avatar/5.png", name: 'DR. Jacqueline DUPONT', spec: "radiologie", location: "Vex / Va is" }
    ];


    this.getDoctorsEntities = function (querry) {
        return self.filterdoctors();
    }


    this.filterdoctors = function () {
        var result = [];
        var doctorIterator;
        for (doctor in self.mockedDoctors) {
            doctorIterator = self.mockedDoctors[doctor];


            if (self.selecteddoctorName != null) {
                if (doctorIterator.name.toLowerCase().includes(self.selecteddoctorName.toLowerCase())) {
                    result.push(doctorIterator);
                }
            }

            else if (self.selectedspec != null && self.selectedlocal != null) {
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