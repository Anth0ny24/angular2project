import { Component, OnInit } from "@angular/core";
import { Restaurant } from "./class/restaurant.class";

import { RestaurantServices } from "./services/restaurant.services";

@Component({
  moduleId: module.id,
  templateUrl: "restaurant-list.component.html",
  styleUrls: ['./css/restaurant.css']
})

export class RestaurantListComponent implements OnInit {

  restos: Restaurant[];
  errorMsg: string = "";

  constructor(private _restoServices: RestaurantServices) { }

  ngOnInit() {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    this._restoServices.getRestaurantFromAPIWithCache()
      .subscribe(res => {
        this.restos = res.results;
      });
  }
}