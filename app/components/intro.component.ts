import { Component } from '@angular/core';
export class Doctor {
  picture: string;
  name: string;
  spec: string;
  location:string;
}

const DOCTORS: Doctor[] = [
  { picture:"assets/onepage2/img/avatar/1.png", name: 'DR. Thomas MOTTAT',spec:"Généraliste",location:"Onex / Genève"},
  { picture:"assets/onepage2/img/avatar/2.png", name: 'DR. Monique DUNANT',spec:"Dermatologue",location:"Lancy / Genève"},
  { picture:"assets/onepage2/img/avatar/3.png", name: 'R. Jean FAVRE',spec:"Gynécologue",location:"Nyon / Vaud"},
  { picture:"assets/onepage2/img/avatar/4.png", name: 'DR. Denis CHEVRELEY',spec:"Généraliste",location:"Avry / Fribourg"},
  { picture:"assets/onepage2/img/avatar/5.png", name: 'DR. Jacqueline DUPONT',spec:"Généraliste",location:"Vex / Valais"},

];


@Component({
  selector: 'intro-component',
  templateUrl: `/partials/index-intro.html`,
})
export class IntroComponent {
doctors= DOCTORS;

  showSecondView = "slider";
  showSLider(): void {
    this.showSecondView = "slider";
  }
  showResult(): void {
    this.showSecondView = "result";
  }
} 