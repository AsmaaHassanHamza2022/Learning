import { Component } from '@angular/core';
import { MainService } from './Services/main-.service';
import { FormControl, FormGroup } from '@angular/forms';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  ngOnInit(): void {}
  public currentLang='en'
  constructor(private translate: TranslateService) {
    translate.setDefaultLang('en');
  }

  changeLang(){
    if(this.currentLang == 'en'){
      this.currentLang='ar';
    }else{
      this.currentLang='en';
    }

    this.translate.use(this.currentLang);
  }
}
