app.component('autocomplete', {
    transclude: true,
    controller: function Controller() {
        this.propositions = ["jen", "kil"];
        this.showOptions = false;
        this.querry = "";
        this.selected="";
        this.change = function () {
            this.showOptions = true;
            
        }
        this.select = function (option) {
            this.selected=option;
            console.log("jen");
            this.showOptions = false;
        }
    },
    templateUrl: '/partials/autocomplete.html'
});
