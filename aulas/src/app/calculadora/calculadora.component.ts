import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-calculadora',
  templateUrl: './calculadora.component.html',
  styleUrls: ['./calculadora.component.css']
})
export class CalculadoraComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

    number1 : number=0;
    number2 : number=0;
    result : number=0;
    sinal : string="+";

    soma(){

      switch(this.sinal)
      {
        case "+":
          this.result = Number(this.number1)+Number(this.number2);
          break;
        case "-":
          this.result = Number(this.number1)-Number(this.number2);
          break;
        case "*":
          this.result = Number(this.number1)*Number(this.number2);
          break;
        case "/":
          this.result = Number(this.number1)/Number(this.number2);
          break;


          default:
            this.result = Number(this.number1)+Number(this.number2);
            break;
      }
    }
}
