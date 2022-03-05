const inquirer = require("inquirer");
const fs = require("fs");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const Manager = require("./lib/Manager");

const managers = [];
const engineers = [];
const interns = [];

// GIVEN a command-line application that accepts user input
// WHEN I am prompted for my team members and their information
// THEN an HTML file is generated that displays a nicely formatted team roster based on user input
// WHEN I click on an email address in the HTML
// THEN my default email program opens and populates the TO field of the email with the address
// WHEN I click on the GitHub username
// THEN that GitHub profile opens in a new tab
// WHEN I start the application
// THEN I am prompted to enter the team manager’s name, employee ID, email address, and office number
// WHEN I enter the team manager’s name, employee ID, email address, and office number
// THEN I am presented with a menu with the option to add an engineer or an intern or to finish building my team
// WHEN I select the engineer option
// THEN I am prompted to enter the engineer’s name, ID, email, and GitHub username, and I am taken back to the menu
// WHEN I select the intern option
// THEN I am prompted to enter the intern’s name, ID, email, and school, and I am taken back to the menu
// WHEN I decide to finish building my team
// THEN I exit the application, and the HTML is generated


// Start program

// Prompt user for manager information
    // Validate all the user's input to Inquirer

// Afterward, ask if they want to add an engineer or intern
    // If so, keep going until they stop
    // If not, stop prompting for info

// Take the info gathered and slam it into HTML

console.log("Welcome to the team webpage generator!\n");

const managerPrompts = [
    {
        type: "input",
        name: "name",
        message: "What is the name of this team's manager?",
        validate: name => {
            if(name) {
                return true;
            } else {
                console.log("Please enter the team manager's name before continuing.");
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
                console.log("Please enter the team manager's ID before continuing.");
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
                console.log("Please enter the team manager's email address before continuing.");
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
                console.log("Please enter the team manager's office number before continuing.");
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
                console.log("Please enter the engineer's name before continuing.");
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
                console.log("Please enter the engineer's ID before continuing.");
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
                console.log("Please enter the engineer's email address before continuing.");
                return false;
            }
        }
    },
    {
        type: "input",
        name: "officeNumber",
        message: "What is the engineer's GitHub username?",
        validate: officeNumber => {
            if(officeNumber) {
                return true;
            } else {
                console.log("Please enter the engineer's GitHub username before continuing.");
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
                console.log("Please enter the intern's name before continuing.");
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
                console.log("Please enter the intern's ID before continuing.");
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
                console.log("Please enter the intern's email address before continuing.");
                return false;
            }
        }
    },
    {
        type: "input",
        name: "officeNumber",
        message: "What is the name of the intern's school?",
        validate: officeNumber => {
            if(officeNumber) {
                return true;
            } else {
                console.log("Please enter the intern's school before continuing.");
                return false;
            }
        }
    }
];

inquirer.prompt(managerPrompts).then(({name, id, email, officeNumber}) => {
    const manager = new Manager(name, id, email, officeNumber);
    managers.push(manager);
    console.log(managers[0].getName());
    console.log(managers[0].getId());
    console.log(managers[0].getEmail());
    console.log(managers[0].getOfficeNumber());
});