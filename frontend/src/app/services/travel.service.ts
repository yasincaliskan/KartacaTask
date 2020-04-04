import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'; 
import { Travel } from '../travel/travel';

@Injectable({
  providedIn: 'root'
})
export class TravelService {

  constructor(private http: HttpClient) { }
  
  getTravelList(){
      return this.http.get<Travel[]>("http://127.0.0.1:8000/api/post/list")
    }

  getDetail(slug){
      let url = "http://127.0.0.1:8000/api/post/detail/";
      let slugDetail = slug;    
      url += slugDetail;
      return this.http.get<Travel[]>(url)
  }

}
