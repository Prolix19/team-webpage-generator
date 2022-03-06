// Requiring the Employee class since Manager extends it
const Employee = require("./Employee");

class Intern extends Employee {
    constructor(name, id, email, school) {
        // Use super() to handle what construction the parent can
        super(name, id, email);
        this.school = school;
    }

    // Override the value returned by getRole();
    getRole() {
        return "Intern";
    }

    getSchool() {
        return this.school;
    }
};

module.exports = Intern;