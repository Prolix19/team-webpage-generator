// Requiring the Employee class since Manager extends it
const Employee = require("./Employee");

// Use super() to handle what construction the parent can
class Manager extends Employee {
    constructor(name, id, email, officeNumber) {
        super(name, id, email);
        this.officeNumber = officeNumber;
    }

    // Override the value returned by getRole();
    getRole() {
        return "Manager";
    }
    
    // This method wasn't in the challenge description, grading requirements, or technical acceptance criteria, but I think it's important for uniformity
    getOfficeNumber() {
        return this.officeNumber;
    }
};

module.exports = Manager;