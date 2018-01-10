import { Component, OnInit, Input } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";

import { Restaurant } from "./class/restaurant.class";
import { RestaurantServices } from "./services/restaurant.services";

@Component({
    moduleId:module.id,
    selector:"resto-details",
    templateUrl:"restaurant-details.component.html",
    styleUrls:['./css/restaurant.css']
})

export class RestaurantDetailsComponent implements OnInit{

    @Input() rt:Restaurant;
    resto:Restaurant;
    title:string ="";

    constructor(private route:ActivatedRoute, private router:Router, private _restoServices:RestaurantServices){}

        ngOnInit() {
            //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
            //Add 'implements OnInit' to the class.

            let id= +this.route.snapshot.params['id'];
            this.resto= this._restoServices.getRestaurantById(id);
            console.log("ID detailPage "+ id);
        }

        goBack(){
            this.router.navigate(['/restaurant']);
        }


}