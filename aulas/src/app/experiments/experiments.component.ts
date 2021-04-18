import { Component, OnInit, ViewChild } from '@angular/core';
import { Preferencias } from '../classes/preferencias';

@Component({
  selector: 'app-experiments',
  templateUrl: './experiments.component.html',
  styleUrls: ['./experiments.component.css']
})
export class ExperimentsComponent implements OnInit {


  constructor() { }


  ngOnInit(): void {
  }

  name : string ="Xavier";

  changeName(event:any)
  {
    this.name = event.target.value;
  }
  isfocus()
  {
    console.log("xd");
  }

   arrayAnimais : Array<String> = ['cão','gato','doninha','hamster'];

   recebiDoFilho : string ="";

   recebi(ev:any)
   {
     console.log("Recebi: "+ev);
     this.recebiDoFilho = ev;
   }

   defenicao : Preferencias = new Preferencias("blue","white");

}
