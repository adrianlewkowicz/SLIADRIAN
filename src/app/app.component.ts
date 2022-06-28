import { Component } from '@angular/core';
import { ExcelService } from './services/excel.service';
import { DataExport } from './services/model/dataExport';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  datas: DataExport[];
  searchText: string;
  title = 'exportExcelInAngular';
  dataExportu: any = [{
    TitleExport: 'Test1',
    DateExport: '2020-01-01',
    HourExport: '12:00',
    UserName: 'Adrian',
    Local: 'Test1'
  },
  {
    TitleExport: 'Test2',
    DateExport: '2020-01-01',
    HourExport: '12:00',
    UserName: 'Adrian',
    Local: 'Test2'
  },
  {
    TitleExport: 'Test3',
    DateExport: '2020-01-01',
    HourExport: '12:00',
    UserName: 'Adrian',
    Local: 'Test3'
  },
  {
    TitleExport: 'Test4',
    DateExport: '2020-01-01',
    HourExport: '12:00',
    UserName: 'Adrian',
    Local: 'Test4'
  },
  {
    TitleExport: 'Test5',
    DateExport: '2020-01-01',
    HourExport: '12:00',
    UserName: 'Adrian',
    Local: 'Test5'
  }];
  constructor(private excelService:ExcelService){

  }
  exportAsXLSX():void {
    this.excelService.exportAsExcelFile(this.dataExportu, 'data_data');
  }
}
