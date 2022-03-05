const Manager = require("../lib/Manager");

test("Creates a Manager object", () => {
    const manager = new Manager("John", 0, "abc@123.com", "612-555-1234");

    expect(manager.name).toBe("John");
    expect(manager.id).toBe(0);
    expect(manager.email).toBe("abc@123.com");
    expect(manager.officeNumber).toBe("612-555-1234");
});

test("Get a manager's name", () => {
    const manager = new Manager("John", 0, "abc@123.com", "612-555-1234");

    expect(manager.getName()).toBe("John");
});

test("Get a manager's ID", () => {
    const manager = new Manager("John", 0, "abc@123.com", "612-555-1234");
    
    expect(manager.getId()).toBe(0);
});

test("Get a manager's email", () => {
    const manager = new Manager("John", 0, "abc@123.com", "612-555-1234");
    
    expect(manager.getEmail()).toBe("abc@123.com");
});

test("Get a manager's office number", () => {
    const manager = new Manager("John", 0, "abc@123.com", "612-555-1234");
    
    expect(manager.getOfficeNumber()).toBe("612-555-1234");
});

test("Get an manager's role", () => {
    const manager = new Manager("John", 0, "abc@123.com", "612-555-1234");
    
    expect(manager.getRole()).toBe("Manager");
});