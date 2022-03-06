// Requiring the Employee class since Manager extends it
const Employee = require("./Employee");

// Once again, the class uses super() as much as possible for construction
class Engineer extends Employee {
    constructor(name, id, email, github) {
        super(name, id, email);
        this.github = github;
    }

    // Override the value returned by getRole();
    getRole() {
        return "Engineer";
    }

    getGithub() {
        return this.github;
    }
};

module.exports = Engineer;