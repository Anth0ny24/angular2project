import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from "@angular/http";
import { RouterModule } from "@angular/router";

import { AppComponent }  from './app.component';
import { HomeComponent } from "./home/home.component";
import { HomeModule } from "./home/home.module";
import { RestaurantListComponent } from "./restaurant/restaurant-list.component";
import { RestaurantDetailsComponent } from "./restaurant/restaurant-details.component";
import { RestaurantModule } from "./restaurant/restaurant.module";
import { HobbiesListComponent } from "./hobbies/hobbies-list.component";
import { HobbieModule } from "./hobbies/hobbies.module";
import { BarsListComponent  } from "./bar/bars-list.component";
import { BarModule  } from "./bar/bar.module";
import { PageNotFoundComponent  } from "./404/pageNotFound.component";


@NgModule({
  imports:      [ BrowserModule,
                  HttpModule,
                  HomeModule,
                  HobbieModule,
                  BarModule,
                  RestaurantModule,
                  RouterModule.forRoot([
                          {path:'home', component:HomeComponent},
                          {path:'hobbies', component:HobbiesListComponent},
                          {path:'restaurant', component:RestaurantListComponent},
                          {path:'restaurant/:id', component:RestaurantDetailsComponent },
                          {path:'bar', component:BarsListComponent},
                          { path:'', redirectTo:'home', pathMatch:'full' },
                          { path:'**', component:PageNotFoundComponent, pathMatch:'full' },          
                        ]) ],
  declarations: [ AppComponent,PageNotFoundComponent,RestaurantDetailsComponent],
  bootstrap:    [ AppComponent ]
})


export class AppModule { }
