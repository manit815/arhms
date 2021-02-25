import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class BugsGenericService {

  constructor() { }
  public getSeverityList = function(data) {
    let severityList = { severity_1: 0, severity_2: 0, severity_3: 0, severity_4: 0, severity_5: 0 };
    data.forEach((severity) => {
      severityList["severity_"+severity.Severity] += 1;
    });
    return Object.values(severityList);
  }
}
