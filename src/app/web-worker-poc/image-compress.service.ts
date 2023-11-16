import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { compressImage } from './jimp.utills';

@Injectable({
  providedIn: 'root'
})
export class ImageCompressService {

  constructor() { }

  compressImage(base64image: string): Observable<string> {
    let resultSubject = new Subject<string>();
    compressImage(base64image).then(result => {
      resultSubject.next(result);
    });
    return resultSubject;
  }
}
