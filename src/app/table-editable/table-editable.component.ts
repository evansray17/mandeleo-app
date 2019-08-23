import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-table-editable',
  templateUrl: './table-editable.component.html',
  styleUrls: ['./table-editable.component.scss']
})
export class TableEditableComponent implements OnInit {
  editField: string;
  personList: Array<any> = [
    { id: 1, nBank: 'Stanbic', amount: 3000, date: '23/2/2019', grant: '20', outstand: '1200' },
    { id: 2, nBank: 'standard', amount: 4500, date: '23/2/2019', grant: '24', outstand: '30000' },
    { id: 3, nBank: 'Equity', amount: 2600, date: '23/2/2019', grant: '12', outstand: '12000' },
    
  ];

  awaitingPersonList: Array<any> = [
    { id: 4, nBank: 'Commercial', amount: 3000, date: '23/2/2019', grant: '5', outstand: '700' },
    { id: 5, nBank: 'i & M', amount: 3100, date: '23/2/2019', grant: '28', outstand: '9000' },
    { id: 6, nBank: 'equity', amount: 2800, date: '23/2/2019', grant: '21', outstand: '7600' },
    
    
  ];

  updateList(id: number, property: string, event: any) {
    const editField = event.target.textContent;
    this.personList[id][property] = editField;
  }

  remove(id: any) {
    this.awaitingPersonList.push(this.personList[id]);
    this.personList.splice(id, 1);
  }

  add() {
    if (this.awaitingPersonList.length > 0) {
      const person = this.awaitingPersonList[0];
      this.personList.push(person);
      this.awaitingPersonList.splice(0, 1);
    }
  }

  changeValue(id: number, property: string, event: any) {
    this.editField = event.target.textContent;
  }
  constructor() { }

  ngOnInit() {
  }

}
