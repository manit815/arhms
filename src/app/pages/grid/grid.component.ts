import { Component, OnInit } from '@angular/core';
import { Tile } from './../../interface/tile';
import { Router } from '@angular/router';

@Component({
  selector: 'app-grid',
  templateUrl: './grid.component.html',
  styleUrls: ['./grid.component.scss']
})
export class GridComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  tiles: Tile[] = [
    {text: 'Tribes', cols: 3, rows: 1, color: 'lightblue'},
    {text: 'Engineering', cols: 1, rows: 2, color: 'lightgreen'},
    {text: 'Quality', cols: 1, rows: 1, color: 'lightpink'},
    {text: 'Bugs', cols: 2, rows: 1, color: '#DDBDF1'},
  ];

  onClick(event) {
    console.log(event);
    var userSelection = event.text.toLowerCase();
    console.log(userSelection);
    this.router.navigate([userSelection]);
  }

}
