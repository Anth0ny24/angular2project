import { Component } from "@angular/core";
import { Hobbies } from "./class/hobbies.class";

import { HobbiesServices } from "./services/hobbies.services";

@Component({
    moduleId:module.id,
    templateUrl:"hobbies-list.component.html",    
})

export class HobbiesListComponent{

    hobbies : Hobbies[];
    errorMsg:string="";

    constructor(private _hobbyServices:HobbiesServices){}

    ngOnInit() {
        //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
        //Add 'implements OnInit' to the class.
        this._hobbyServices.getHobbiesFromAPIWithCache()
                                    .subscribe(
                                        res=>this.hobbies=res,
                                        err=>this.errorMsg=err
                                    );
                    console.log(this._hobbyServices);
    }


}