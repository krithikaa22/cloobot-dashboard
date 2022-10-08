import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataServiceService {

  private _page : any;

  getPage (){
    return this._page
  }

  setPage(newPage:any){
    this._page = newPage
  }

  constructor() { 
    this._page = {}
  }
}
