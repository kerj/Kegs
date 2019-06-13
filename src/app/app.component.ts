import { Component } from '@angular/core';
import { Keg } from './Models/keg.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'The Bar';
  selectedKeg = null;
  list = true;
  addButton = true;
  newBeer = true;
  masterKegList: Keg[] = [
    new Keg('Christmas Ale', 'Great Lakes', 150, 8.7, 100 ), 
    new Keg('Blatz', 'Blatz Brewing', 120, 5, 100 ),
    new Keg('High Life', 'Miller', 130, 5, 100 ),
    new Keg('Coors Light', 'Coors', 50, 4.5, 100)
    ];

    finished() {
      this.selectedKeg = null;
      this.list = true;
      this.addButton = true;
      this.newBeer = true;
      console.log("finished");
    }

    edit(item: Keg) {
      this.selectedKeg = item;
      this.list = false;
      this.addButton = false;
    }

    add() {
      this.list = false;
      this.addButton = false;
      this.newBeer = false;
    }

    // clickAdd(){
    //  this.newBeer = false
    // }


    // clearBeer() {
    //   this.selectedKeg = {};
    //   this.newBeer = null;
    // }
}
