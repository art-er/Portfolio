import { Injectable } from '@angular/core';
import {LoggingService} from './logging.service';
import {Data} from '../Data';

@Injectable({
  providedIn: 'root'
})
export class SharedServiceService {

  constructor(private loggingService: LoggingService) { }

  // tslint:disable-next-line:typedef
  getData() {

    let dataList: Data[];
    dataList = [
      new Data(1, 'Ali'),
      new Data(2, 'Ker'),
      new Data(3, 'Er'),
    ];
    this.loggingService.log('List of users: ' + dataList);
    return dataList;
  }
}
