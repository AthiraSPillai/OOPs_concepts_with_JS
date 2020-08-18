import {Truck} from '../src/classes/Truck.js'
import {Bus} from '../src/classes/Bus.js'


export class MobileDataService{
    constructor(){
        this.bus=[];
        this.truck=[];
    }
    loadData(mobileData){
        console.log(mobileData);
        for (let data of mobileData){
            console.log(data.type)
            switch(data.type){
                case 'bus':
                    // create a function called loadBus(and assign to a variable) that takes data and initialises a bus object and set the properties
                    // "this" keyword is used to make the function global and access
                    let busData = this.loadBus(data);
                    this.bus.push(busData);
                    break;
                case 'truck':
                    // create a function called loadTruck (and assign to a variable)that takes data and initialises a bus object and set the properties
                    // "this" keyword is used to make the function global and access
                    let truckData= this.loadTruck(data);
                    this.truck.push(truckData);
                    break;
                

            }
        }

    }

    loadBus(busdata){

        // instantiate a bus instance and pass the  data to set the properties of the instance
        let bus= new Bus(busdata.regNumber, busdata.make,busdata.loc);
        bus.year=busdata.year;
        bus.seats=busdata.seats;
        return bus;


    }
    loadTruck(truckData){
    // instantiate a TRUCK instance and pass the  data to set the properties of the instance

        let truck = new Truck (truckData.regNumer,truckData.make,truckData.loc);
        truck.year= truckData.year;
        truck.usage=truckData.usage;
        return truck;
    }
}