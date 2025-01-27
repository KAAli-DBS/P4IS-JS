class Employee {
    constructor(name, role, salary) {
        this.name = name;
        this.role = role;
        this.salary = salary;
    }

    getEmployeeDetails() {
        return `${this.name} is ${this.role} and earning $${this.salary} per year.`;
    }

    // Method for calculating yearly bonus
    calculateBonus() {
        return this.salary * 0.1; 
    }
}

class Manager extends Employee {
    constructor(name, role, salary, department) {
        super(name, role, salary);  
        this.department = department;
    }

    getManagerDetails() {
        return `${this.name} is the manager of the ${this.department} department.`;
    }

    // Override calculateBonus for managers (e.g., 20% bonus)
    calculateBonus() {
        return this.salary * 0.2;  
    }
}

const employee1 = new Employee("Employee1 Jan25", "Developer", 80000);
console.log(employee1.getEmployeeDetails());
console.log(`Bonus: $${employee1.calculateBonus()}`);

const manager1 = new Manager("Employee2 Jan25", "Manager", 100000, "Sales");
console.log(manager1.getManagerDetails());
console.log(`Bonus: $${manager1.calculateBonus()}`);