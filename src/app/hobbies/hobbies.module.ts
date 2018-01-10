import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from "@angular/router";

import { HobbiesListComponent } from "./hobbies-list.component";
import { HobbiesServices } from "./services/hobbies.services";
import { HobbiesSummaryComponent } from "./hobbies-summary.component";



@NgModule({
    imports: [ CommonModule, RouterModule],
    declarations: [HobbiesListComponent, HobbiesSummaryComponent],
    exports: [HobbiesListComponent],
    providers:[HobbiesServices] // DECLARER DES SERVICES
})

export class HobbieModule{}