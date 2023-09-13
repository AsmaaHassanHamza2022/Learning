import { Injectable } from '@angular/core';
import { OwlConfig } from './carousel.config';

export interface IOwlConfig{
 [key:string]:string|boolean |string[];
}
@Injectable({
  providedIn: 'root'
})
export class OwlService {

  public initalConfig={...OwlConfig}

  constructor() { }

  updateConfig(newConfigs:IOwlConfig){
    console.log(newConfigs)
    return {...this.initalConfig,...newConfigs}
  }

  getArabicOwl(){
    return {
      ...this.initalConfig,
      rtl: true,
      navText: [
        "<img src='../../../assets/images/right-arrow.svg'/>",
        " <img src='../../../assets/images/left-arrow.svg'/>",
      ],
    }
  }
}
