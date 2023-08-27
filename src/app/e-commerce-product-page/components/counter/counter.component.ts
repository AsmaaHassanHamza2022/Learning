import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.scss'],
})
export class CounterComponent implements OnInit {
  ngOnInit(): void {
    this.checkActionsAvailablity();
  }
  @Input() counterValue: number = 1;
  @Input() totalProductAmount: number = 5;
  @Output() ChangeProductCount:EventEmitter<number>=new EventEmitter<number>();
  public disablePlus: boolean = false;
  public disableMinus: boolean = false;

  public onPlus() {
    if(this.counterValue != this.totalProductAmount){
      this.counterValue++;
      this.checkActionsAvailablity();
    }
   
  }

  public onMinus() {
    if(this.counterValue !=1){
      this.counterValue--;
      this.checkActionsAvailablity();
    }

  }

  checkActionsAvailablity() {
    if (this.counterValue == this.totalProductAmount) {
      this.disablePlus = true;
      this.disableMinus = false;
    } else if (this.counterValue == 1) {
      this.disablePlus = false;
      this.disableMinus = true;
    } else {
      this.disablePlus = false;
      this.disableMinus = false;
    }
    this.ChangeProductCount.emit(this.counterValue)
  }
}
