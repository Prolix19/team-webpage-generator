const Employee = require("./Employee");

class Manager extends Employee {
    constructor(name, id, email, officeNumber) {
        super(name, id, email);
        this.officeNumber = officeNumber;
    }

    getRole() {
        return "Manager";
    }
    
    // This method wasn't in the challenge description, grading requirements, or technical acceptance criteria, but I think it's important for uniformity
    getOfficeNumber() {
        return this.officeNumber;
    }
};

module.exports = Manager;