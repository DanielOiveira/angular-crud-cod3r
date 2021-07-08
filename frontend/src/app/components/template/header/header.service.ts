import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { HeaderData } from './header-data.model';

@Injectable({
  providedIn: 'root'
})
export class HeaderService {

 
  private _headerData = new BehaviorSubject<HeaderData>({
    title: 'Inicio',
    icon: 'home',
    routerUrl: ''
  })

  headerData: HeaderData


  constructor() { }

  get headerDatas(): HeaderData {
    return this._headerData.value
  }

  set headerDatas(headerData: HeaderData) {
    this._headerData.next(headerData)
  }
}
