// -----------PARENT CLASS--------------------------------//
class Vehicle{ 
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

// -------------CHILD CLASS TRUCK--------------------------//
class Truck extends Vehicle{
    constructor(){
        // super() is called to execute the parent class's constructor
        super();
        console.log("Constructor in Truck Class");
    }

}

// ----------CHILD CLASS BUS-------------------------------//
class Bus extends Vehicle{
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


// --------INSTANCE OF TRUCK CLASS------------------------//
let truck=new Truck();
console.log(truck instanceof Truck);
console.log(truck instanceof Vehicle);
//  Every class in javascript inherits from Object class 
console.log(truck instanceof  Object);

// set properties which are common for all the child classes that inherits from parent

// ---------INSTANCE OF BUS CLASS--------------------------//
let bus= new Bus("123");
console.log(bus.regNumber);
console.log("console override property value:"+ bus.navigationEnabled);
// acessing a method from parent class
bus.ignition();
// // overridden method -access the method(with same name) which is present both in parent and child 
bus.brake();
// static method defined under the parent class is accessible at child class level(not a child's instance level)
Bus.manufacturer();
// bus.manufacturer(); give error