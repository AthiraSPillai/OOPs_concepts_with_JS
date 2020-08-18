//------IMPORT CLASSES---------------------------//
import {Truck} from './classes/Truck.js';
import {Bus} from './classes/Bus.js';
import {Vehicle} from './classes/Vehicle.js'
import {mobileData} from '../mobile-data.js'
import {MobileDataService} from '../services/mobile-data-service.js'

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

// Data service 

console.log(mobileData);
let dataService=new MobileDataService();
dataService.loadData(mobileData);
// console.log(dataService.bus);
// Loop through the bus array (which has different bus object)and 
for ( let bus of dataService.bus)
console.log(bus)


