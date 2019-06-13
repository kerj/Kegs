import { Component, Input, Output, EventEmitter } from '@angular/core';

import { Keg } from '../Models/keg.model';


@Component({
  selector: 'app-keg',
  templateUrl: './keg.component.html',
  styleUrls: ['./keg.component.css']
})
export class KegComponent {
  @Input() childKegList: Keg[];
  @Output() clickSender = new EventEmitter();
//  public kegs: Keg[] = [
//   new Keg('Christmas Ale', 'Great Lakes', 150, 8.7 ), 
//   new Keg('Blatz', 'Blatz Brewing', 120, 5 ),
//   new Keg('High Life', 'Miller', 130, 5 ),
//   new Keg('Coors Light', 'Coors', 50, 4.5 )
//   ];
  


//  editInfo(editBeer) {
//    console.log(editBeer);
//    for(let i = 0; i <= this.childKegList.length; i++){
//     if (editBeer.name != this.childKegList[i].name) {
//         console.log(this);
        
//     }
//    }

editInfo(beerToEdit: Keg) {
  this.clickSender.emit(beerToEdit);
}

add(){
  this.clickSender.emit();
}
 

  //  this.selectedKeg = clickedBeer;
   //console.log(this);
   //console.log(editBeer);
   //console.log(this.clickSender);
   


//  deleteBeer(keg) {
//    let beer = this.
//  }
 


  // addKeg(name: string): void {
  //   name = name.trim();
  //   if (!name) {return; }
  //   this.kegs.push(name);
  // }

}
