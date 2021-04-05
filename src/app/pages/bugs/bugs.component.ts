import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-bugs',
  templateUrl: './bugs.component.html',
  styleUrls: ['./bugs.component.scss']
})
export class BugsComponent implements OnInit {

  constructor(private router: Router) { }  

  ngOnInit(): void {
  }

  onClick(event) {
    alert (event)
    this.router.navigate(['../../bugs/components/bugstechnology']);
  }


}
