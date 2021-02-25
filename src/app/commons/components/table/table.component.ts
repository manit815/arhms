import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent implements OnInit {

  constructor() { }
  @Input() rows;
  @Input() cols;
  ngOnInit(): void {
    console.log(this.rows);
    console.log(this.cols);
  }

}
