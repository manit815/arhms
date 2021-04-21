import { Component, Input, OnInit } from '@angular/core';
@Component({
  selector: 'app-charts',
  templateUrl: './charts.component.html',
  styleUrls: ['./charts.component.scss']
})
export class ChartsComponent implements OnInit {
  data: any;
    
  options: any;
  
  type: String;
  @Input() set chartData(data: any) {
    this.data = data;
  }

  @Input() set chartOptions(options: any) {
    this.options = options;
  }
  
  @Input() set chartType(type: String) {
    this.type = type;
  }

  constructor() {

  }

  ngOnInit(): void {
  }
}
