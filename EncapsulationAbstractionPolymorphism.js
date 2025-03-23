// 🚗 Encapsulation: Secure User Details
class User {
  #id; // Private field

  constructor(name, id) {
    this.name = name;
    this.#id = id;
  }

  getId() {
    return this.#id; // Controlled access
  }
}

// 🏎️ Abstraction: Ride Class Hides Implementation Details
class Ride {
  constructor(rider, driver, distance) {
    if (new.target === Ride) {
      throw new Error("Cannot instantiate an abstract class.");
    }
    this.rider = rider;
    this.driver = driver;
    this.distance = distance;
  }

  calculateFare() {
    throw new Error("calculateFare() must be implemented in subclass.");
  }

  startRide() {
    console.log(`🚕 Ride started for ${this.rider.name} with ${this.driver.name}`);
  }

  endRide() {
    const fare = this.calculateFare();
    console.log(`🏁 Ride ended. Total fare: €${fare}`);
  }
}

// 🏎️ Polymorphism: Different Ride Types with Different Fare Strategies
class EconomyRide extends Ride {
  calculateFare() {
    return this.distance * 1.50; // for 4 Stops using Leap Card in Dublin
  }
}

class PremiumRide extends Ride {
  calculateFare() {
    return this.distance * 2; // for 4 Stops using Leap Card in Dublin with special Seat
  }
}

class LuxuryRide extends Ride {
  calculateFare() {
    return this.distance * 2.5; // for 4 Stops using Leap Card in Dublin with special Seat and refreshment 
  }
}

// 🏭 Factory Pattern: Create Rides Based on Type
class RideFactory {
  static createRide(type, rider, driver, distance) {
    switch (type) {
      case "Economy":
        return new EconomyRide(rider, driver, distance);
      case "Premium":
        return new PremiumRide(rider, driver, distance);
      case "Luxury":
        return new LuxuryRide(rider, driver, distance);
      default:
        throw new Error("Invalid ride type.");
    }
  }
}

// 🧠 Strategy Pattern: Dynamic Fare Calculation
class FareCalculator {
  constructor(strategy) {
    this.strategy = strategy;
  }

  setStrategy(strategy) {
    this.strategy = strategy;
  }

  calculate(distance) {
    return this.strategy.calculateFare(distance);
  }
}

// Testing 🚀
const rider = new User("Customer Nia", 101);
const driver = new User("Driver Sean ", 202);

const ride1 = RideFactory.createRide("Economy", rider, driver, 10);
ride1.startRide();
ride1.endRide();

const ride2 = RideFactory.createRide("Luxury", rider, driver, 5);
ride2.startRide();
ride2.endRide();