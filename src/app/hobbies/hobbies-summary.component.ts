import { Component, Input } from "@angular/core";

import { Hobbies } from "./class/hobbies.class";

@Component({
    moduleId:module.id,
    selector:"hobby-summary",
    templateUrl:"hobbies-summary.component.html",
    styleUrls:['./css/hobbies.css']
})

export class HobbiesSummaryComponent{

    @Input() hb:Hobbies;
}