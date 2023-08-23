import { Component } from '@angular/core';
import { MainService } from './Services/main-.service';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
 
  ngOnInit(): void {
  }
  icon = 'home';

  onIconSelect(icon: string) {
    console.log(icon);
    this.icon = icon;
  }

  
  constructor(public mainService:MainService){

  }
  title = 'Learning';
}
