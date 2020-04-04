import { Component, OnInit } from '@angular/core';
import { Travel } from './travel';
import { HttpClient } from '@angular/common/http';
import { TravelService } from '../services/travel.service';


@Component({
  selector: 'app-travel',
  templateUrl: './travel.component.html',
  styleUrls: ['./travel.component.css']
})
export class TravelComponent implements OnInit {

  constructor(private _travelService: TravelService) { }

  travels : Travel[];

  ngOnInit(): void {
    this._travelService.getTravelList().subscribe(data =>{
      this.travels = data;
    });
    
    /*this.http.get<Travel[]>("http://localhost:3000/api/post/list").subscribe(data =>{
      this.travels = data;
    });*/
  }

  goDetail(travel){
    this._travelService.getDetail(travel.slug).subscribe(data =>{
      this.travels = data;
  })}
  
}
