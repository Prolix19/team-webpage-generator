const Employee = require("./Employee");

class Intern extends Employee {
    constructor() {
        super();
    }
}

module.exports = Intern;

// school
// getSchool
// getRole - overridden to return Intern
