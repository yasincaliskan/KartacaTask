import { Component, OnInit } from '@angular/core';
import { Travel } from './travel';


@Component({
  selector: 'app-travel',
  templateUrl: './travel.component.html',
  styleUrls: ['./travel.component.css']
})
export class TravelComponent implements OnInit {

  constructor() { }

  travels : Travel[] = [
    {
      user:"yasin",
      title:"super eskose",
      location:"esk",
      notes:"notesss",
      travel_date:"today",
      imageUrl:"https://cdn1.ntv.com.tr/gorsel/kjucBsBivk2r3b2B0TFVKg.jpg?width=1000&mode=crop&scale=both"
    }
  ]

  ngOnInit(): void {
  }

}
