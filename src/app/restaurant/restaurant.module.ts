import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule} from "@angular/router";

import { RestaurantListComponent } from "./restaurant-list.component";
import { RestaurantServices } from "./services/restaurant.services";


@NgModule({
    imports: [ CommonModule, RouterModule],
    declarations: [RestaurantListComponent],
    exports: [RestaurantListComponent],
    providers:[RestaurantServices] // DECLARER DES SERVICES
})

export class RestaurantModule{}