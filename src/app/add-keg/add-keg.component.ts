import { Component, Input, Output, EventEmitter } from '@angular/core';

import { Keg } from '../Models/keg.model';

@Component({
  selector: 'app-add-keg',
  templateUrl: './add-keg.component.html',
  styleUrls: ['./add-keg.component.css']
})
export class AddKegComponent{
  @Input() childAddKegList: Keg[];
  @Output() clickAdd = new EventEmitter();
  newBeer = null;

 addKeg(newKeg, newBrand, newPrice, newAlcohol){
  let newDrink = new Keg(newKeg, newBrand, newPrice, newAlcohol);
  this.childAddKegList.push(newDrink);
 }

 addBeer(beerToAdd: Keg) {
  this.clickAdd.emit(beerToAdd);

}

}
