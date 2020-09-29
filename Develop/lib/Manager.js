// TODO: Write code to define and export the Manager class. HINT: This class should inherit from Employee.

let fs = require("fs")
let Employee = require("./Employee")

class Manager extends Employee {
    constructor(role, name, id, email, officeNumber) {
        super(name, id, email);
        this.officeNumber = officeNumber;
    }

    getRole() {
        return ("Manager")
    }
   
};

module.exports = Manager;