const Intern = require("../lib/Intern");

test("Creates an Intern object", () => {
    const intern = new Intern("John", 0, "abc@123.com", "University of Minnesota");

    expect(intern.name).toBe("John");
    expect(intern.id).toBe(0);
    expect(intern.email).toBe("abc@123.com");
    expect(intern.school).toBe("University of Minnesota");
});

test("Get an intern's name", () => {
    const intern = new Intern("John", 0, "abc@123.com", "University of Minnesota");

    expect(intern.getName()).toBe("John");
});

test("Get an intern's ID", () => {
    const intern = new Intern("John", 0, "abc@123.com", "University of Minnesota");
    
    expect(intern.getId()).toBe(0);
});

test("Get an intern's email", () => {
    const intern = new Intern("John", 0, "abc@123.com", "University of Minnesota");
    
    expect(intern.getEmail()).toBe("abc@123.com");
});

test("Get an intern's school", () => {
    const intern = new Intern("John", 0, "abc@123.com", "University of Minnesota");
    
    expect(intern.getSchool()).toBe("University of Minnesota");
});

test("Get an intern's role", () => {
    const intern = new Intern("John", 0, "abc@123.com", "University of Minnesota");
    
    expect(intern.getRole()).toBe("Intern");
});