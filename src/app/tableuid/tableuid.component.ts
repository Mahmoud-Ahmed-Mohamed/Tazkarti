import { Component,OnInit } from '@angular/core';
import { Table } from 'primeng/table';

interface Person {
  id: number,
  image: string,
  name: string,
  phone: string,
  ticketNumber: string,
  ticketValue: string,
  cinemas: string[],
  numberOfPeople: number,
  numberOfViews: string,
  ticket: any
}

interface PageEvent {
  first: number;
  rows: number;
  page: number;
  pageCount: number;
}

@Component({
  selector: 'app-tableuid',
  templateUrl: './tableuid.component.html',
  styleUrl: './tableuid.component.scss'
})
export class TableuidComponent implements OnInit {
  persons!: Person[];

  checked: boolean;

  constructor(){
    this.checked = true;
  }

  ngOnInit(): void {
    this.persons = []
    for(let i = 0; i < 10; i++) {
      this.persons.push({
        id: i+1,
        image: `../../assets/images/image${(i%4)+1}.png`,
        name: "أحمد محمود",
        phone: "0123456789",
        ticketNumber: "C-101",
        ticketValue: `$${50-i}`,
        cinemas: ["سينما مصر", "مول العرب", "برج الأطنان", "سرايا القبة", "صيدناوي مول", "برج العرب"],
        numberOfPeople: 1,
        numberOfViews: "مرة واحدة",
        ticket: "تذكرة رقم 45.pdf"
      })
    }
  }


  clear(table: Table) {
    table.clear();
  }

}
