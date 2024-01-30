import { Pipe, PipeTransform } from '@angular/core';
import { DashboardTableComponent } from '../dashboard/dashboard-table/dashboard-table.component';
import { DashboardComponent } from '../dashboard/dashboard.component';

@Pipe({
  name: 'dropdownfilter'
})
export class DropdownfilterPipe implements PipeTransform {

  transform(list: any[], filterBy: string) {
    if (filterBy === 'All') {
      return list;
    }
    else if (filterBy === 'Yes') {
      return list.filter(item => item.isUser === true);
    }
    else if (filterBy === 'No') {
      return list.filter(item => item.isUser === false);
    }
    
    return list; // Add a default return statement
    }

}
