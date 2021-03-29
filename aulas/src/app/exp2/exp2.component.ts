import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';


@Component({
  selector: 'app-exp2',
  templateUrl: './exp2.component.html',
  styleUrls: ['./exp2.component.css']
})
export class Exp2Component implements OnInit {

  @Output() passaInfo = new EventEmitter();
  constructor() { }

  @Input() valorRecebido: string="";
  ngOnInit(): void {
  }
  evHappen(){
    this.passaInfo.emit("algo");
  }

}
