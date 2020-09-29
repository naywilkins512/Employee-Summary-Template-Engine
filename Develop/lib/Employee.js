// TODO: Write code to define and export the Employee class
class Employee {
    // Just like constructor functions, classes can accept arguments
    constructor(role, name, id, email, school, github, officeNumber) {
      this.role = role;
      this.name = name;
      this.id = id;
      this.email = email;
      this.school = school;
      this.github = github;
      this.officeNumber = officeNumber;
      
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
    getSchool() {
        return this.school;
    }
    getGithub() {
        return this.github;
    }
    getOfficeNumber() {
        return this.officeNumber;
    }

}

module.exports = Employee