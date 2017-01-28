
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

   this.isconnected=function(username,password){
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