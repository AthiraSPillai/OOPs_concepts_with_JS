# OOPs Concepts with JavaScript
Pre-requisite:
1) Install Node latest version(https://nodejs.org/en/download/)
2) VS code(https://code.visualstudio.com/download) or any code editor of choice
3) Open command line from root folder and do npm init // it will create package.json file
4) npm i --save-dev lite-server
5) Create a file called class.js under the folder src
6) Edit package.json under "script " and add the following     "dev":"lite-server"


### Refer File: src/classSinglefile.js 
### CLASS
Define a class with "class" key word and the name of the class  starts with capital letter(Pascalcase).

```
class Car{
    
    #define the class here
}

 <!----Check type of the newly created class -->
console.log(typeof Car);    
 <!-- ------returns function--- -->
```
### INSTANCE OF A CLASS
Create an instance of the class with "new" key word.
```
let car1= new Car();
<!---Check type of the newly created instance -->
console.log(typeof car1);  
<!---returns  object -->
<!---Checking the newly created object is an instance of the above class -->
console.log(car1 instanceof Car) ;
<!---returns true ---------->
```
## CONSTRUCTOR
It is defined inside the class using keyword "constructor". Constructor is used to initialize information for class instance(object).It is automatically executated during instance creation. It is a function that can take information through arguments.

```
class Car {
    contructor(id,name){
        console.log("inside Car constructor")
        console.log(id,name)
    }
}
 
let car1= new Car("123","Honda");
```
### PROPERTIES
Define instance properties using "this" keyword inside  costructor , this will  help to attach these variables to the instance.

```
class Car {
    constructor(id,name){
        console.log("Inside  constructor");
        console.log(id,name);
    
        this.id=id; 
        this.name=name;
    }
}

let car1= new Car("123","Honda")
console.log("car1: " + car1.id, car1.name) ;

```
## STATIC PROPERTY or CLASS PROPERTY
The properties that are  defind directly under the class  called Static Property or Class property. Its not accessible to the instances but belongs only to Class 

```
class Car {
    constructor(id,name){
        console.log("Inside Car constructor");
        console.log(id,name);
        this.id=id; 
        this.name=name;
    }
}
let car1= new Car("123","Honda")console.log("car1: " + car1.id, car1.name) ;
<!---------static property-------->
Car.maxSpeed=80; 
console.log("Car.maxSpeed: "+Car.maxSpeed ); 
<!-- //# returns 80 -->
console.log(car1.maxSpeed);
<!-----It will return undefined ---->
class Car {
    constructor(id,name){
        console.log("Inside Car constructor");
        console.log(id,name);
        this.id=id; 
        this.name=name;
}
```
### METHODS
Methods are the functions which belongs to an instance (accessible to instace).Example
   ``` 
    drive(){
        console.log('Inside the drive method: '+ this.id + this.name)   
        }
```

### STATIC METHODS
It is defined by "static" key word (accessible to class only).
  ```  
    static driveFast(){
        console.log("Inside the driveFast method and print static property: "+ this.maxSpeed)
        console.log("Cannot access instance property in static method "+ this.id +" so will return undefined")
    }
car1.drive();
Car.driveFast();
car1.driveFast();
<!-----car1.driveFast() will return undefined ----->
```
### GETTERS and SETTERS
Setter- It looks like a function but can be used set value for a property variable.Uses "set" keyword to define setter function. Takes  parameters and assigns to property variable
Getter-Function is used to return the value set by the setter function
```
class Car {
    constructor(id,name){
        console.log("Inside Car constructor");
        this.id=id; 
        this.name=name;
        this._place=null;
    }
        get place(){
            console.log("Inside getter function to getvalue");
            return this._place+ " GETTER FUNCTION";
        }
        set place(value){
            console.log("Inside  setter function to set value");
            this._place=value;
        }
}
car1.place="Newyork"
console.log("car1: "+ car1.id,car1.name, car1.place)

### Refer File: src/inheitanceSinglefile.js 
### INHERITANCE
"extend" keyword is used to show a class is inherits from a parent class. All class in javascript inherits from "Object Class"


<!--  Parent Class -->
class Vehicle{ 
}
 <!-- Truck and Bus Inherits from the Parent class called Vehicle -->
class Truck extends Vehicle{
}
class Bus extends Vehicle{
}
<!--  Create an instance of the Truck class -->
let truck1=new Truck();
<!-- Every class in javascript inherits from Object class (kind of super parent class) -->
 <!-- An instance (i.e. truck1) of a class(i.e. Truck) will also be an  instance of parent class(i.e. Vehicle) that it inherits from as well as an instance of Object Class.  -->
console.log(truck1 instanceof Truck);
console.log(truck1 instanceof Vehicle);
console.log(truck1 instanceof  Object);

```
### INHERITING CONSTRUCTOR
A constructor in child class- need to execute the constructor in parent class before executing child class's constructor. It is done by calling the function "super()". Even if there is no constructor defined in parent class, javascript will add one by default so need to use super() in all the child class's constructor.

```
class Vehicle{ 
    constructor(){ 
        console.log('Constructor in Vehicle Class');
    }
}
class Truck extends Vehicle{
    constructor(){
        <!-- super() is called to execute the parent class's constructor -->
        super();
        console.log("Constructor in Truck Class");
    }
}
```
### INHERITING PROPERTIES
For  properties that are common for all the child classes, we can set it at parent level and can be accessed by all the child classes thar are inherited from parent class.

```
class Vehicle{ 
    constructor(regNumber){
        <!-- regNumber is set here at parent class -->
        this.regNumber=regNumber;
        console.log('Constructor in Vehicle Class');
    }
}

class Bus extends Vehicle{
    constructor(regNumber){
        <!-- regNumber is passed to parent class's constructor and set its value to the regNumber property by passing it through super()   -->

        super(regNumber);
        console.log("Constructor in Bus Class");
    }
}

<!--regNumber is passed during instance creation -->
let bus= new Bus("123")
console.log(bus.regNumber);
```
### OVERRIDING PROPERTIES
The property values set at parent class level can be override at child class level.
```
class Vehicle { 
    constructor(regNumber){
        this.regNumber=regNumber;
        this.navigationEnabled=true;
        console.log('Constructor in Vehicle Class');
    }
}
class Bus extends Vehicle{
    constructor(regNumber){    
        super(regNumber);
<!-- override the parents class property "navigation Enabled to false"  --> 
        this.navigationEnabled=false;
        console.log("Constructor in Bus Class");
    }
}

let bus= new Bus("123")
console.log(bus.regNumber);
console.log("console override property value:"+ bus.navigationEnabled)
```
### INHERITING AND OVERRIDING METHODS
```
<!-------------PARENT CLASS---------------------------------->
class Vehicle{ 
    constructor(regNumber){
        this.regNumber=regNumber;
        this.navigationEnabled=true;
        console.log('Constructor in Vehicle Class');
    }
<!-- ignition method can be accessed by all the inherited child classes -->
    ignition(){
         console.log("inside ignition method in Vehicle");
    }
    brake(){
        console.log("brake method in Vehicle class");
    }
}
class Bus extends Vehicle{
    constructor(regNumber){
        super(regNumber);
        this.navigationEnabled=false;
        console.log("Constructor in Bus Class");

    }
    brake(){
<!--super is used to call the inherited  method from parent class(both method will be executed here), if super.brake() is not called, only the child class's method overrides the parent class's method---->
        super.brake();
        console.log("brake method in Bus class");
    }

}

let bus= new Bus("123")
<!-----acessing a method  that inherits from parent class ------->
console.log(bus.ignition());
<!-----overridden method - the method(with same name) which is present both in parent and child  -->
console.log(bus.brake())
```
### INHERITING STATIC METHODS
```
class Vehicle{     
 <!-- static method -->
    static manufacturer(){
        console.log("inside static method manufacturer in Vehicle")
    }
}
class Bus extends Vehicle{
    static manufacturer(){
        console.log("static method in Bus class override parent's static method");
<!-- calling the same static method from parent using "super"keyword -->
        super.manufacturer();
    }
}
let bus= new Bus();
<!-- static method defined under the parent class is accessible at child class level(not a child's instance level) -->
Bus.manufacturer();
 <!-- bus.manufacturer(); give error -->
 ```
 ### CODE ARRANGEMENT/FOLDER STRUCTURE (IMPORT AND EXPORT of classes)
The general hierarchy of files is as follows -->
we can seperate the classes from our inheritanceSinglefile.js file and arrange them as follows 
```
-src
    -class
        -Vehicle.js
        -Bus.js
        -Truck.js
    -app.js
index.html
package.json
```
"export" keyword is used to export all the classes to app.js and "import" keyword is used to import the parent classes in other child classes as well as app.js -->
 add  type="module" in index.html where app.js is called to avoid ERROR:"module cannt be imported outside module(e.g.<script type="module" src="src/app.js"></script>)
