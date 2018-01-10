import { Component } from "@angular/core";
import { Bar } from "./class/bars.class";

import { BarsServices } from "./services/bars.services";

@Component({
    moduleId:module.id,
    templateUrl:"bars-list.component.html",    
})

export class BarsListComponent{

    bars : Bar[];
    errorMsg:string="";

    constructor(private _barServices:BarsServices){}

    ngOnInit() {
        //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
        //Add 'implements OnInit' to the class.
        this._barServices.getBarFromAPIWithCache()
                                    .subscribe(
                                        res=>this.bars=res,
                                        err=>this.errorMsg=err
                                    );
                    console.log(this._barServices);
    }


}