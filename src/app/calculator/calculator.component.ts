import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.scss']
})
export class CalculatorComponent  {

  public tt: number;
  public tv: number;
  public itm: number;

  public formulaZaIzracun(): void {
    this.itm = this.tt / (this.tv ** 2);
  }
}
