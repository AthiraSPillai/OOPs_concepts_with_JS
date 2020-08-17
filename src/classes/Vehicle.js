// -----------PARENT CLASS--------------------------------//
export class Vehicle{ 
    constructor(regNumber){
        this.regNumber=regNumber;
        this.navigationEnabled=true;
        console.log('Constructor in Vehicle Class');
    }
    // ignition method can be accessed by all the inherited child classes
    ignition(){
         console.log("inside ignition method in Vehicle");

    }
    brake(){
        console.log("inside brake method in Vehicle class");
    }
    // static method
    static manufacturer(){
        console.log("inside static method manufacturer in Vehicle")
    }

}