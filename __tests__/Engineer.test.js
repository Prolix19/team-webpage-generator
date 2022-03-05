const Engineer = require("../lib/Engineer");

test("Creates an Engineer object", () => {
    const engineer = new Engineer("John", 0, "abc@123.com", "https://www.github.com/John123");

    expect(engineer.name).toBe("John");
    expect(engineer.id).toBe(0);
    expect(engineer.email).toBe("abc@123.com");
    expect(engineer.github).toBe("https://www.github.com/John123");
});

test("Get an engineer's name", () => {
    const engineer = new Engineer("John", 0, "abc@123.com", "https://www.github.com/John123");

    expect(engineer.getName()).toBe("John");
});

test("Get an engineer's ID", () => {
    const engineer = new Engineer("John", 0, "abc@123.com", "https://www.github.com/John123");
    
    expect(engineer.getId()).toBe(0);
});

test("Get an engineer's email", () => {
    const engineer = new Engineer("John", 0, "abc@123.com", "https://www.github.com/John123");
    
    expect(engineer.getEmail()).toBe("abc@123.com");
});

test("Get an engineer's GitHub", () => {
    const engineer = new Engineer("John", 0, "abc@123.com", "https://www.github.com/John123");
    
    expect(engineer.getGithub()).toBe("https://www.github.com/John123");
});

test("Get an engineer's role", () => {
    const engineer = new Engineer("John", 0, "abc@123.com", "https://www.github.com/John123");
    
    expect(engineer.getRole()).toBe("Engineer");
});