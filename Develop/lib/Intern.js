// TODO: Write code to define and export the Intern class.  HINT: This class should inherit from Employee.


let fs = require("fs")
let Employee = require("./Employee")

class Intern extends Employee {
    constructor(role, name, id, email, school) {
        super(name, id, email)
        this.school = school;
    }

    getSchool() {
        return this.school
    }

    getRole() {
        return ("Intern")
    }
   
};

module.exports = Intern;