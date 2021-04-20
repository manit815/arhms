import { Component, OnInit,  } from '@angular/core';
import { BugsRoutingModule } from '../../bugs-routing.module';
import { chartsData, chartsOption } from 'src/app/commons/constants/charts.constant';
import { HttpService } from 'src/app/commons/services/http.service';
import { SeverityModel } from '../../models/classes/severity.models.class';
import { BugsGenericService } from '../../services/bugs-generic.service';
import { BugsMapperService } from '../../services/bugs-mapper.service';

@Component({
  selector: 'app-bugs-dashboard',
  templateUrl: './bugs-dashboard.component.html',
  styleUrls: ['./bugs-dashboard.component.scss']
})
export class BugsDashboardComponent implements OnInit {
  public data = chartsData;
  public options = chartsOption;
  public severityData: Array<SeverityModel>;
  public rowData: Array<any>;
  public columnDefs = [{ field: "Severity" }, { field: "PRBID", cellRenderer:(params)=>`<a href='https://www.google.com' target='_blank'>PRB1X2564</a>`}, { field: "Description" }];
 
  constructor(private httpService: HttpService, private bugsMapperService: BugsMapperService, private bugsGenericService: BugsGenericService) { }

  ngOnInit(): void {
      this.httpService.getMethod('assets/json/prb.json').subscribe((data) => {      
      this.severityData = this.bugsMapperService.severityMapper(data);      
      this.rowData = this.severityData;
      const severityList = this.bugsGenericService.getSeverityList(this.severityData);
      var tempData = {...this.data};
      tempData.datasets[0].data = severityList;
      this.data = tempData;
    });
  }
}
