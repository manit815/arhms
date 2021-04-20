import { Component, OnInit } from '@angular/core';
import { chartsData, pieChartsData,  pieChartOPtion } from 'src/app/commons/constants/charts.constant';
import { HttpService } from 'src/app/commons/services/http.service';
import { SeverityModel } from '../../models/classes/severity.models.class';
import { BugsGenericService } from '../../services/bugs-generic.service';
import { BugsMapperService } from '../../services/bugs-mapper.service';

@Component({
  selector: 'app-bugs-technology',
  templateUrl: './bugs-technology.component.html',
  styleUrls: ['./bugs-technology.component.scss']
})
export class BugsTechnologyComponent implements OnInit {
  public data = pieChartsData;
  public options = pieChartOPtion; 
  
  constructor(private httpService: HttpService, private bugsMapperService: BugsMapperService, private bugsGenericService: BugsGenericService) { }

  ngOnInit(): void {
    this.httpService.getMethod('assets/json/prb.json').subscribe((data) => {      
      const severityData:Array<SeverityModel> = this.bugsMapperService.severityMapper(data); 
      this.data =  this.bugsGenericService.getTechnologyList(severityData);     
    });
  }

}
