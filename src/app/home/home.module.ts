import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from "@angular/router";

import { HomeComponent } from './home.component';
import { RestaurantListComponent } from "./../restaurant/restaurant-list.component";
import { RestaurantDetailsComponent } from "./../restaurant/restaurant-details.component";
import { RestaurantModule } from "./../restaurant/restaurant.module";
import { HobbiesListComponent } from "./../hobbies/hobbies-list.component";
import { HobbieModule } from "./../hobbies/hobbies.module";
import { BarsListComponent  } from "./../bar/bars-list.component";
import { BarModule  } from "./../bar/bar.module";
import { PageNotFoundComponent  } from "./../404/pageNotFound.component";


@NgModule({
    imports: [ CommonModule,
                HobbieModule,
                BarModule,
                RestaurantModule,
                RouterModule.forRoot([
                        {path:'home', component:HomeComponent},
                        {path:'hobbies', component:HobbiesListComponent},
                        {path:'restaurant', component:RestaurantListComponent},
                        {path:'restaurant/:id', component:RestaurantDetailsComponent},
                        {path:'bar', component:BarsListComponent},
                        { path:'', redirectTo:'home', pathMatch:'full' },
                        { path:'**', component:PageNotFoundComponent, pathMatch:'full' },          
                    ]) ],
    declarations: [HomeComponent],
    exports: [HomeComponent],
})

export class HomeModule{}