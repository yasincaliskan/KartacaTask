import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'; 
import { Travel } from '../travel/travel';

@Injectable({
  providedIn: 'root'
})
export class TravelService {

  constructor(private http: HttpClient) { }
  
  getTravelList(){
  return this.http.get<Travel[]>("http://localhost:3000/api/post/list")
}

}
