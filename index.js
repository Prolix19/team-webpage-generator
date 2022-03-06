const inquirer = require("inquirer");
const fs = require("fs");
const generatePage = require("./src/html-template");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const Manager = require("./lib/Manager");

const managers = [];
const engineers = [];
const interns = [];

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

console.log("Welcome to the team webpage generator!\n");

const addMore = () => {
    return inquirer.prompt(addPrompts)
    .then(({addTeammate}) => {
        if(addTeammate[0] == "Engineer") {
            return promptEngineer();
        } else if(addTeammate[0] == "Intern") {
            return promptIntern();
        } else {
            return;
        }
    });
};

const promptManager = () => {
    return inquirer.prompt(managerPrompts)
    .then(({name, id, email, officeNumber}) => {
        const manager = new Manager(name, id, email, officeNumber);
        managers.push(manager);
        return addMore();
    });
};

const promptEngineer = () => {
    return inquirer.prompt(engineerPrompts)
    .then(({name, id, email, github}) => {
        const engineer = new Engineer(name, id, email, github);
        engineers.push(engineer);
        return addMore();
    });
};

const promptIntern = () => {
    return inquirer.prompt(internPrompts)
    .then(({name, id, email, school}) => {
        const intern = new Intern(name, id, email, school);
        interns.push(intern);
        return addMore();
    });
};

const init = function() {
    promptManager()
    .then(() => {
        return generatePage(managers, engineers, interns);
    })
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
    .then(copyFileResponse => {
        console.log("\nTeam webpage created! Please see the file index.html in the dist directory.")
    })
    .catch(err => {
        console.log("Error: " + err);
    });
};

init();