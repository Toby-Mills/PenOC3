import { Pipe, PipeTransform } from '@angular/core';
import { OEventResultSummaryModel } from 'penoc-sdk/models/oevent-result-summary.model';

@Pipe({
  name: 'eventFilter'
})
export class EventFilterPipe implements PipeTransform {

  transform(oevents: OEventResultSummaryModel[], searchString: string): any {
    var search = searchString.toLowerCase();
    if(searchString.length < 3){return []}
    if(oevents){
      return oevents.filter(oeventSummary => {
        if (oeventSummary.oEvent.name && oeventSummary.oEvent.name.toLowerCase().includes(search)) { return true }
        if (oeventSummary.oEvent.venue && oeventSummary.oEvent.venue.toLowerCase().includes(search)) { return true }
        if (oeventSummary.oEvent.planner && oeventSummary.oEvent.planner.toLocaleLowerCase().includes(search)) { return true }
        if (oeventSummary.oEvent.controller && oeventSummary.oEvent.controller.toLocaleLowerCase().includes(search)) { return true }
        return false;
      })
    }else{
      return [];
    }
  }

}
