import { Component, Input, inject } from '@angular/core';
import { ColDef, IRowComp, ISetFilterParams } from 'ag-grid-community'; // Column Definitions Interface
import { HttpClient } from '@angular/common/http';

interface IRow {
  mission: string;
  company: string;
  location: string;
  date: string;
  rocket: string;
  price: number;
  successful: boolean;
}

interface userData {
[x: string]: any;
  id: number;
  isUser: boolean;
  fullName: string;
}

@Component({
  selector: 'app-dashboard-table',
  templateUrl: './dashboard-table.component.html',
  styleUrls: ['./dashboard-table.component.css'],
})

export class DashboardTableComponent {
  http: HttpClient = inject(HttpClient);

  userDataa: userData[] = [];
  filteredData = [];

  fetchUserData() {
    this.http.get<userData[]>('https://api-generator.retool.com/4v1405/data')
    .subscribe((data) => {
      this.userDataa = data;
    });
  }

  YesNo(value: boolean): string {
    return value ? 'Yes' : 'No';
  }

  ngOnInit() {
    this.fetchUserData();
  }

  themeClass = 'ag-theme-quartz-dark';

  // Row Data: The data to be displayed.
  rowData: IRow[] = [
    {
      mission: 'Voyager',
      company: 'NASA',
      location: 'Cape Canaveral',
      date: '1977-09-05',
      rocket: 'Titan-Centaur ',
      price: 86580000,
      successful: true,
    },
    {
      mission: 'Apollo 13',
      company: 'NASA',
      location: 'Kennedy Space Center',
      date: '1970-04-11',
      rocket: 'Saturn V',
      price: 3750000,
      successful: true,
    },
    {
      mission: 'Falcon 9',
      company: 'SpaceX',
      location: 'Cape Canaveral',
      date: '2015-12-22',
      rocket: 'Falcon 9',
      price: 9750000,
      successful: true,
    },
  ];

  // Column Definitions: Defines & controls grid columns.
  colDefs: ColDef<IRow>[] = [
    {
      field: 'mission',
      filter: 'agSetColumnFilter',
      filterParams: {
        applyMiniFilterWhileTyping: true,
      } as ISetFilterParams,
    },
    { field: 'company', filter: 'agSetColumnFilter' },
    { field: 'location' },
    { field: 'date' },
    { field: 'price' },
    { field: 'successful' },
    { field: 'rocket' },
  ];

  @Input()
  fullname1: string = "";

  @Input()
  userId1: string = "";

  @Input()
  isUser1: boolean = false;

}
