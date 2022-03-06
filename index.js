// App uses the Inquirer package, as required
// Also pulling in fs module, an HTML-generating function from the src dir, and the three extended classes
const inquirer = require("inquirer");
const fs = require("fs");
const generatePage = require("./src/html-template");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const Manager = require("./lib/Manager");

// Set up arrays to contain our employees
const managers = [];
const engineers = [];
const interns = [];

// The following four arrays are prompts used by Inquirer; separated them out for readability.
const addPrompts = [
    {
        type: "checkbox",
        name: "addTeammate",
        message: "If you would like to continue adding team members, please choose a type below:",
        choices: ["Engineer", "Intern"],
        validate: addTeammate => {
            if(addTeammate.length <= 1) {
                return true;
            } else {
                console.log("\nPlease choose at most one team member type before continuing.");
                return false;
            }
        }
    }
];

const managerPrompts = [
    {
        type: "input",
        name: "name",
        message: "What is the name of this team's manager?",
        validate: name => {
            if(name) {
                return true;
            } else {
                console.log("\nPlease enter the team manager's name before continuing.");
                return false;
            }
        }
    },
    {
        type: "input",
        name: "id",
        message: "What is the manager's employee ID?",
        validate: id => {
            if(id) {
                return true;
            } else {
                console.log("\nPlease enter the team manager's ID before continuing.");
                return false;
            }
        }
    },
    {
        type: "input",
        name: "email",
        message: "What is the manager's email address?",
        validate: email => {
            if(email) {
                return true;
            } else {
                console.log("\nPlease enter the team manager's email address before continuing.");
                return false;
            }
        }
    },
    {
        type: "input",
        name: "officeNumber",
        message: "What is the manager's office phone number?",
        validate: officeNumber => {
            if(officeNumber) {
                return true;
            } else {
                console.log("\nPlease enter the team manager's office number before continuing.");
                return false;
            }
        }
    }
];

const engineerPrompts = [
    {
        type: "input",
        name: "name",
        message: "What is the name of this engineer?",
        validate: name => {
            if(name) {
                return true;
            } else {
                console.log("\nPlease enter the engineer's name before continuing.");
                return false;
            }
        }
    },
    {
        type: "input",
        name: "id",
        message: "What is the engineers's employee ID?",
        validate: id => {
            if(id) {
                return true;
            } else {
                console.log("\nPlease enter the engineer's ID before continuing.");
                return false;
            }
        }
    },
    {
        type: "input",
        name: "email",
        message: "What is the engineer's email address?",
        validate: email => {
            if(email) {
                return true;
            } else {
                console.log("\nPlease enter the engineer's email address before continuing.");
                return false;
            }
        }
    },
    {
        type: "input",
        name: "github",
        message: "What is the engineer's GitHub username?",
        validate: github => {
            if(github) {
                return true;
            } else {
                console.log("\nPlease enter the engineer's GitHub username before continuing.");
                return false;
            }
        }
    }
];

const internPrompts = [
    {
        type: "input",
        name: "name",
        message: "What is the name of this intern?",
        validate: name => {
            if(name) {
                return true;
            } else {
                console.log("\nPlease enter the intern's name before continuing.");
                return false;
            }
        }
    },
    {
        type: "input",
        name: "id",
        message: "What is the intern's employee ID?",
        validate: id => {
            if(id) {
                return true;
            } else {
                console.log("\nPlease enter the intern's ID before continuing.");
                return false;
            }
        }
    },
    {
        type: "input",
        name: "email",
        message: "What is the intern's email address?",
        validate: email => {
            if(email) {
                return true;
            } else {
                console.log("\nPlease enter the intern's email address before continuing.");
                return false;
            }
        }
    },
    {
        type: "input",
        name: "school",
        message: "What is the name of the intern's school?",
        validate: school => {
            if(school) {
                return true;
            } else {
                console.log("\nPlease enter the intern's school before continuing.");
                return false;
            }
        }
    }
];

// Function to see if the user responded to add another teammate.
// If so, invokes the prompts to gather info on that employee, depending upon whether they're an engineer or an intern.
const addMore = () => {
    return inquirer.prompt(addPrompts)
    .then(({addTeammate}) => {
        if(addTeammate[0] == "Engineer") {
            return promptEngineer();
        } else if(addTeammate[0] == "Intern") {
            return promptIntern();
        } else {
            // If they did not choose either option, we are done prompting and gathering responses, and need to return execution back up.
            return;
        }
    });
};

// App first prompts the user to add a manager to the team.
// After gathering responses, we'll ask the user if they want to add more employees.
const promptManager = () => {
    return inquirer.prompt(managerPrompts)
    .then(({name, id, email, officeNumber}) => {
        const manager = new Manager(name, id, email, officeNumber);
        managers.push(manager);
        return addMore();
    });
};

// Arrive here if user wants to add an engineer; gathers the responses for that employee then checks if we need to add another.
const promptEngineer = () => {
    return inquirer.prompt(engineerPrompts)
    .then(({name, id, email, github}) => {
        const engineer = new Engineer(name, id, email, github);
        engineers.push(engineer);
        return addMore();
    });
};

// Called when user wants to add an intern; this gathers the relevant data then moves on to asking if another employee should be added.
const promptIntern = () => {
    return inquirer.prompt(internPrompts)
    .then(({name, id, email, school}) => {
        const intern = new Intern(name, id, email, school);
        interns.push(intern);
        return addMore();
    });
};

// Main program logic
const init = function() {
    // Get the manager's details (mandatory, and at most 1 manager per team)
    promptManager()
    // Program control arrives back here after the manager and any/all engineers & interns have been entered.
    .then(() => {
        // Make HTML using our utility in html-template.js
        // Passing in our employee arrays so it has something to work with.
        return generatePage(managers, engineers, interns);
    })
    // Get the HTML back and write it to a file in the dist dir
    .then(pageHTML => {
        return new Promise((resolve, reject) => {
            fs.writeFile("./dist/index.html", pageHTML, err => {
                if(err) {
                    reject(err);
                    return;
                }

                resolve({
                    ok: true,
                    message: "Index.html created!"
                });
            });
        });
    })
    // Also copy the default stylesheet to dist
    .then(writeFileResponse => {
        return new Promise((resolve, reject) => {
            fs.copyFile("./src/style.css", "./dist/style.css", err => {
                if(err) {
                    reject(err);
                    return;
                }

                resolve({
                    ok: true,
                    message: "Stylesheet created!"
                });
            });
        });
    })
    // Part with the user with a message about their team webpage having been created successfully.
    .then(copyFileResponse => {
        console.log("\nTeam webpage created! Please see the file index.html in the dist directory.")
    })
    // Error handling
    .catch(err => {
        console.log("Error: " + err);
    });
};

// Greeting message, and then we run init() to invoke the main logic
console.log("Welcome to the team webpage generator!\n");

init();