import { Injectable } from '@angular/core';
import { SeverityModel } from '../models/classes/severity.models.class';
@Injectable({
  providedIn: 'root'
})
export class BugsMapperService {

  constructor() { }

  public severityMapper = function(response: any): Array<SeverityModel> {
    console.log(response.tfs_item.items);
    let severityModelArray: Array<SeverityModel> = [];
    response.tfs_item.items.forEach((data) => {
      const severityModelObject = new SeverityModel(data.severity, data.status, true, data.created_date, 'PRB1X2564', '65007', data.Description, data.chapter); 
      severityModelArray.push(severityModelObject)
    })
    return severityModelArray;
  }
}
