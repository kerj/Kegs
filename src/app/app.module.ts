import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { KegComponent } from './keg/keg.component';
import { FormsModule }  from '@angular/forms';
import { EditInfoComponent } from './edit-info/edit-info.component';
import { AddKegComponent } from './add-keg/add-keg.component';


@NgModule({
  declarations: [
    AppComponent,
    KegComponent,
    EditInfoComponent,
    AddKegComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

