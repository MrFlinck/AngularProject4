import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CalcIMG2Component } from './calc-img2/calc-img2.component';
import { FormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NgClass } from '@angular/common';

@NgModule({
  declarations: [
    AppComponent,
    CalcIMG2Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    NgbModule,
    NgClass
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
