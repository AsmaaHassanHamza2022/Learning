import { Component } from '@angular/core';
import { GallaryMode } from '../../Enums/gallaryMode';

@Component({
  selector: 'app-product-details-page',
  templateUrl: './product-details-page.component.html',
  styleUrls: ['./product-details-page.component.scss']
})
export class ProductDetailsPageComponent {
  public ModalMode:GallaryMode=GallaryMode.Modal;

}
