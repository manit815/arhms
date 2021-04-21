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
  
  public getTechnologyList = function(data) {
    let pieChartsData ={ labels: [], datasets: []};      
    let chapterNameWithCount = {};  
    let backgroundColorArr = [];      

    data.forEach((chapter, index) => {      
      chapter.Chapter.forEach((name, index) => {
        if ( pieChartsData['labels'].indexOf(name) === -1) {
          pieChartsData['labels'].push(name);
          chapterNameWithCount[name] = 1;
          backgroundColorArr.push('#'+Math.floor(Math.random()*16777215).toString(16));//Getting dynamic background color
        } else {
          chapterNameWithCount[name] += 1;
        }
      });        
    });

    pieChartsData['datasets'].push({ data: Object.values(chapterNameWithCount), backgroundColor:backgroundColorArr});
    return pieChartsData;   
  }
}

