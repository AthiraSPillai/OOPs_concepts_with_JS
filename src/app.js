//------IMPORT CLASSES---------------------------//
import {Truck} from './classes/Truck.js';
import {Bus} from './classes/Bus.js';
import {Vehicle} from './classes/Vehicle.js'


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