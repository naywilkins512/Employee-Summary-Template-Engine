// TODO: Write code to define and export the Intern class.  HINT: This class should inherit from Employee.


let fs = require("fs")
let Intern = require("./Employee")

class Intern extends Employee () {
    constructor(school) {
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