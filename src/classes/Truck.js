
// ----------IMPORT PARENT CLASS-------------------------------//
import {Vehicle} from './Vehicle.js';

// -------------CHILD CLASS TRUCK--------------------------//
 export class Truck extends Vehicle{
    constructor(){
        // super() is called to execute the parent class's constructor
        super();
        console.log("Constructor in Truck Class");
    }

}
