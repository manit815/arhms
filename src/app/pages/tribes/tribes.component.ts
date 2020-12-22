import { Component, OnInit } from '@angular/core';
import { Tribe } from './../../interface/tribe';

@Component({
  selector: 'app-tribes',
  templateUrl: './tribes.component.html',
  styleUrls: ['./tribes.component.scss']
})
export class TribesComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  tribes: Tribe[] = [
    {
      description: 'Digital', 
      image: 'https://material.angular.io/assets/img/examples/shiba2.jpg', 
      teams: [{
        size: 8,
        name: 'Unicorn',
        image: '',
        velocity: 40
      }]
    },
    {
      description: 'KYC', 
      image: 'https://material.angular.io/assets/img/examples/shiba2.jpg', 
      teams: [{
        size: 8,
        name: 'Drogon',
        image: '',
        velocity: 40
      }]
    },
    {
      description: 'Mortgages', 
      image: 'https://material.angular.io/assets/img/examples/shiba2.jpg', 
      teams: [{
        size: 8,
        name: 'Pride Rock',
        image: '',
        velocity: 40
      }]
    },
    {
      description: 'Consumer Lending', 
      image: 'https://material.angular.io/assets/img/examples/shiba2.jpg', 
      teams: [{
        size: 8,
        name: 'Snow White',
        image: '',
        velocity: 40
      }]
    },
  ];

}
