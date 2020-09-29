// TODO: Write code to define and export the Employee class
class Employee {
    // Just like constructor functions, classes can accept arguments
    constructor(name, id, email) {
      this.role = "Employee";
      this.name = name;
      this.id = id;
      this.email = email;
      
    }

    getName() {
        return this.name;
    }
    getId() {
        return this.id;
    }
    getEmail() {
        return this.email;
    }
    getRole() {
        return this.role;
    }
    

}

module.exports = Employee