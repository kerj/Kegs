import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Keg } from '../Models/keg.model';

@Component({
  selector: 'app-edit-info',
  templateUrl: './edit-info.component.html',
  styleUrls: ['./edit-info.component.css']
})
export class EditInfoComponent {
  @Input() childSelectedKeg: Keg;
  @Output() clickedDone = new EventEmitter();

  // editInfo(editBeer) {
  //   this.clickSender.emit(editBeer);
  //  //  this.selectedKeg = clickedBeer;
  //   console.log(this);
  //   console.log(editBeer);
  //   console.log(this.clickSender);
    
  // }


  editing() {
    //console.log(this);
    // this.childSelectedKeg = null;
    this.clickedDone.emit();
  }


}
