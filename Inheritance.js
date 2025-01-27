class ElectronicDevice {
    constructor(brand, powerStatus = false) {
        this.brand = brand;
        this.powerStatus = powerStatus; 
    }
    powerOn() {
     this.powerStatus = true;
     console.log(`${this.brand} device is now ON.`);
    }
    powerOff() {
     this.powerStatus = false;
     console.log(`${this.brand} device is now OFF.`);
    }

    // Syntax of the Ternary Operator: condition ? valueIfTrue : valueIfFalse

    checkPowerStatus() {
     return this.powerStatus ? `${this.brand} device is ON.` : `${this.brand} device is OFF.`;
    }
    }

    class Mobile extends ElectronicDevice {
    constructor(brand, model, batteryLife) {
     super(brand);
     this.model = model;
     this.batteryLife = batteryLife; 
    }
     
    getMobileDetails() {
     return `Mobile: ${this.brand} ${this.model}, Battery Life: ${this.batteryLife} hours.`;
    }
    makeCall(number) {
     if (this.powerStatus) {
         console.log(`Calling ${number} from ${this.model}...`);
    } else {
    console.log(`Cannot make a call. ${this.model} is OFF.`);
     }
     }
    }

const myPhone = new Mobile('Samsung', 'Galaxy S21', 24);

// Powering on the mobile and making a call myPhone.powerOn(); 
console.log(myPhone.getMobileDetails()); 
myPhone.makeCall('123-456-7890'); 

// Checking power status
console.log(myPhone.checkPowerStatus()); 
myPhone.powerOff();
