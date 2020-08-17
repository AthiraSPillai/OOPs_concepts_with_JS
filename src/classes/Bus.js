// ----------IMPORT PARENT CLASS-------------------------------//
import {Vehicle} from './Vehicle.js'

// ----------CHILD CLASS BUS-------------------------------//
export class Bus extends Vehicle{
    constructor(regNumber){
        // super() is called firstthing in child class's constructor to execute the parent class's constructor , if not it will throw error
        super(regNumber);
        // override the parents class property "navigation Enabled to false" 
        this.navigationEnabled=false;
        console.log("Constructor in Bus Class");

    }

    brake(){
        // super is used to call the same function from parent
        super.brake();
        console.log("brake method in Bus class");
    }

    static manufacturer(){
        console.log("static method in Bus class override parent's static method");
        // calling the same static method from parent using "super"keyword
        super.manufacturer();

    }

}
