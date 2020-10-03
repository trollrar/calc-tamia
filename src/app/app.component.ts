import {Component} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  public tt: number;
  public tv: number;
  public itm: number;

  public formulaZaIzracun(): void {
    this.itm = this.tt / (this.tv ** 2);
  }
}
