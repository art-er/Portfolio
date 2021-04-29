import { Injectable } from '@angular/core';
import {CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Resolve} from '@angular/router';
import { Observable } from 'rxjs';
import {Data} from '../Data';


@Injectable({
  providedIn: 'root'
})

export class InfoGuard implements Resolve<any> {
  data: Data =  new Data(1, 'Ali');
  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<any> | Promise<any> | any {
    return this.data;
  }

}
