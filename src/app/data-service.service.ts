import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DataServiceService {

  private _page : any;
  private url = "https://quote.cloobot.ai/dummy"

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      'Allow': "PUT",
      'Access-Control-Allow-Origin': 'http://localhost:4200/'
    })
  }
  cards = []

  getPage (){
    console.log(this._page)
    return this._page
  }

  setPage(newPage:any){
    this._page = newPage
  }

  constructor(private http: HttpClient) { 
    this._page = {}
  }

  listOfCards (){
  return   this.http.post(`${this.url}/dream-dashboard/view`, {"token": "randomstring"})
  }
  deleteCard (id:number){
    return this.http.post(`${this.url}/dream-dashboard/delete`, {"token":"<some dummy string>","id":id})
  }
  editCard (id:number){
   return this.http.post(`${this.url}/dream-dashboard/update`, {"token":"<some dummy string>","id":id})
  }
  dropDownListView (){
    return this.http.post(`${this.url}/dream-dashboard/view-list`, {"token":"<some dummy string>"})
  }
  dropDownListWidget (){
    return this.http.post(`${this.url}/dream-dashboard/widget-list`, {"token":"<some dummy string>"})
  }
}
