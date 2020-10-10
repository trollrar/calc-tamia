import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-calender',
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.scss']
})
export class CalendarComponent {
  public date = new Date();
  public year: number = this.date.getFullYear();
  public month: number = this.date.getMonth();
  public monthnames = ['januar', 'februar', 'marec', 'april', 'maj', 'junij', 'julij', 'avgust', 'september', 'oktober', 'november', 'december'];

  public formulazapremikleta(premik): void {
    if (this.month + premik > 11) {
      this.year = this.year + 1;
      this.month = 0;
    } else if (this.month + premik < 0) {
      this.year = this.year - 1;
      this.month = 11;
    } else {
      this.month = this.month + premik;
    }
  }

  public daysInMonth(month, year): number[] {
    const numberofdates = new Date(year, month + 1, 0).getDate();
    return Array(numberofdates).fill(0).map((x, i) => i + 1);
  }
  public emptyDays(month, year): number[] {
    const numberofemptydates = new Date(year, month, 0).getDay();
    console.log(numberofemptydates);
    return Array(numberofemptydates).fill(0);
  }
}
