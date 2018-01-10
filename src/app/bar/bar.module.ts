import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from "@angular/router";

import { BarsListComponent } from "./bars-list.component";
import { BarsServices } from "./services/bars.services";




@NgModule({
    imports: [ CommonModule, RouterModule],
    declarations: [BarsListComponent],
    exports: [BarsListComponent],
    providers:[BarsServices] // DECLARER DES SERVICES
})

export class BarModule{}