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
  // newBeer = null;
  masterKegList: Keg[] = [
    new Keg('Christmas Ale', 'Great Lakes', 150, 8.7 ), 
    new Keg('Blatz', 'Blatz Brewing', 120, 5 ),
    new Keg('High Life', 'Miller', 130, 5 ),
    new Keg('Coors Light', 'Coors', 50, 4.5 )
    ];

    finished() {
      this.selectedKeg = null;
      this.list = true;
      console.log("finished");
    }

    edit(item: Keg) {
      this.selectedKeg = item;
      this.list = false;
      console.log(item);
      
    }

    // clearBeer() {
    //   this.selectedKeg = {};
    //   this.newBeer = null;
    // }
}
