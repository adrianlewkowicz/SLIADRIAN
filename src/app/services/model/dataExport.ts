import { DatePipe } from "@angular/common";

export interface DataExport{
  id: number;
  titleName: string;
  dateExport: DatePipe;
  hourExport: DatePipe;
  userName: string;
  local: string;
}


// export const DATAS = [{
//   TitleExport: 'Test1',
//   DateExport: '2020-01-01',
//   HourExport: '12:00',
//   UserName: 'Adrian',
//   Local: 'Test1'
// },
// {
//   TitleExport: 'Test1',
//   DateExport: '2020-01-01',
//   HourExport: '12:00',
//   UserName: 'Adrian',
//   Local: 'Test2'
// },
// {
//   TitleExport: 'Test1',
//   DateExport: '2020-01-01',
//   HourExport: '12:00',
//   UserName: 'Adrian',
//   Local: 'Test3'
// },
// {
//   TitleExport: 'Test1',
//   DateExport: '2020-01-01',
//   HourExport: '12:00',
//   UserName: 'Adrian',
//   Local: 'Test4'
// },
// {
//   TitleExport: 'Test1',
//   DateExport: '2020-01-01',
//   HourExport: '12:00',
//   UserName: 'Adrian',
//   Local: 'Test5'
// }];
