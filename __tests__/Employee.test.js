const Employee = require("../lib/Employee");

test("Creates an Employee object", () => {
    const employee = new Employee("John", 0, "abc@123.com");

    expect(employee.name).toBe("John");
    expect(employee.id).toBe(0);
    expect(employee.email).toBe("abc@123.com");
});

test("Get an employee's name", () => {
    const employee = new Employee("John", 0, "abc@123.com");

    expect(employee.getName()).toBe("John");
});

test("Get an employee's ID", () => {
    const employee = new Employee("John", 0, "abc@123.com");
    
    expect(employee.getId()).toBe(0);
});

test("Get an employee's email", () => {
    const employee = new Employee("John", 0, "abc@123.com");
    
    expect(employee.getEmail()).toBe("abc@123.com");
});

test("Get an employee's role", () => {
    const employee = new Employee("John", 0, "abc@123.com");
    
    expect(employee.getRole()).toBe("Employee");
});