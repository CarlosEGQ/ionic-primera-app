import { Component, NgModule } from '@angular/core';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

  constructor() {}

  ngOnInit(){

    let numero = 10;
    // debugger;
    numero = 20;

    numero += 10;
    
    numero = 0;

    console.log(numero);
    
  }
}
