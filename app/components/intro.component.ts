import { Component } from '@angular/core';

@Component({
  selector: 'intro-component',
  templateUrl: `/partials/index-intro.html`,
})
export class IntroComponent {
    showSecondView="slider";
    showSLider():void{
      this.showSecondView="slider";
    }
    showResult():void{
      this.showSecondView="result";
    }
} 