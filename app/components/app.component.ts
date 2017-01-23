import { Component } from '@angular/core';
import { OnInit } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: `/partials/index.html`,
})
export class AppComponent  {
  closedProfile:boolean;
  ngOnInit(): void {
    this.closedProfile=true;
  }
  onProfileOpen(open:boolean):void{
    if(open){
      this.closedProfile=false;
    }
  }
  onProfileClose(open:boolean):void{
    if(open){
      this.closedProfile=true;
    }
  }
}



         