const Employee = require("./Employee");

class Manager extends Employee {
    constructor() {
        super();
    }
}

module.exports = Manager;

// officeNumber
// getRole() overridden to return Manager