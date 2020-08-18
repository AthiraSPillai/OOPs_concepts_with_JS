
// ----------IMPORT PARENT CLASS-------------------------------//
import {Vehicle} from './Vehicle.js';

// -------------CHILD CLASS TRUCK--------------------------//
 export class Truck extends Vehicle{
    constructor(regNumber,make,loc){
        // super() is called to execute the parent class's constructor
        super(regNumber,make,loc);
        console.log("Constructor in Truck Class");
        this.year=null;
        this.usage=null;
    }

}
