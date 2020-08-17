
//----------CLASS DEFINITION------------//
// ## Define a class with "class" key word and the name of the class  Starts with Capital letter(Pascalcase)

class Car {

//----------CONSTRUCTOR------------//
//  Constructor is used to initialize information for class instance(object), it can take information through parameters(id,name)
   
    constructor(id,name){
        console.log("Inside Car constructor");
        console.log(id,name);
        // Instance variables (properties) are defined with "this" key word , this will  help to attach these variables to the instance
        this.id=id; 
        this.name=name;
        this._place=null;
       
    }
        //----------METHOD----------------//
        drive(){
            console.log('Inside the drive method: '+ this.id + this.name);
        }
        
        //-------- STATIC METHOD----------//
        static driveFast(){
            console.log("Inside the driveFast method: "+ this.maxSpeed);
            console.log("Cannot access instance property in static method, i.e this.id "+this.id+" so will return undefined");
        }

        //-------- GETTER FUNCTION----------------//
        get place(){
            console.log("Inside getter function to getvalue");
            return this._place+ " GETTER FUNCTION";
        }
        //---------- SETTER FUNCTION------------//
        set place(value){
            console.log("Inside  setter function to set value");
            this._place=value;
        }

}
console.log(typeof Car);

//--------------INSTANCE DECLARATION-------------//
// ##Create an instance of the class with "new" key word and assign to car1 variable using "let" keyword and pass arguments
let car1= new Car("123","Honda");
// ## Associated instance variables can be accessed with instancename.variablename(eg: car1.id )or instancename['variablename'](eg:car1['id])
console.log("car1: " + car1.id, car1.name);
// ## Create an another instance of same class called car2
let car2= new Car("456", "Nissan");
console.log("car2: "+ car2.id,car2.name);
console.log(typeof car1) ;
// ##Checking the newly created object is an instance of the above class and  returns true if car1 is an instance of the class Car
console.log(car1 instanceof Car) 

//-------------STATIC PROPERTY OR CLASS PROPERTY-----------//
// ##Static Property or Class property, its not accessible to the instances but belongs only to Class not to instance(returns undefined for console.log("car1.maxSpeed: "+car1.maxSpeed))
Car.maxSpeed=80;
console.log("Car.maxSpeed: "+Car.maxSpeed );
console.log("car1.maxSpeed: "+car1.maxSpeed);

//------ACCESSING METHODS AND STATIC METHODS----------------//
car1.drive();
Car.driveFast();
//static method is not available to instance and below code will return "undefined"
//car.driveFast();
//------SET VALUE USING SETER AND ACCESS THROUGH GETTER -------------------------------// 
car1.place="Newyork"
console.log("car: "+ car1.id,car1.name, car1.place)