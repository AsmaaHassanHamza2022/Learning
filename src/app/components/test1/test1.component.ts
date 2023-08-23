import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MainService } from 'src/app/Services/main-.service';

@Component({
  selector: 'app-test1',
  templateUrl: './test1.component.html',
  styleUrls: ['./test1.component.scss']
})
export class Test1Component {
  public form:FormGroup=new FormGroup({});

  constructor(private mainService:MainService,private fb:FormBuilder){
    this.mainService.chanableText="Iam Test 1 component";
    this.form=this.fb.group({
      name:['']
    })
    
  }

}
