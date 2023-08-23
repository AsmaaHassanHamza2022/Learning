import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MainService {
  public chanableText:string="Iam wrapper Service";

  constructor() {
    console.log("from main service", this.chanableText)
   }

   getChangableText(){
    console.log("from main service", this.chanableText)

   }
}
