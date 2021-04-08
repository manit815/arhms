import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-bugs-menu',
  templateUrl: './bugs-menu.component.html',
  styleUrls: ['./bugs-menu.component.scss']
})
export class BugsMenuComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }
  
}
