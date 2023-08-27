import { Component } from '@angular/core';
import { MainService } from './Services/main-.service';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  ngOnInit(): void {}
  constructor(public mainService:MainService){}
  title = 'Learning';
}
