const generateManager = managers => {
    return `<div class="employeeCard">
    <div>
    ${managers[0].getName()}<br />
    ${managers[0].getRole()}
    </div>
    <p>ID: ${managers[0].getId()}</p>
    <p>Email: <a href="mailto:${managers[0].getEmail()}">${managers[0].getEmail()}</a></p>
    <p>Office number: ${managers[0].getOfficeNumber()}</p>
    </div>`
};

const generateEngineers = engineers => {
    if(engineers.length == 0) {
        return "";
    } else {
        let engineersHTML = ``;
        for(let i = 0; i < engineers.length; i++) {
            engineersHTML += `<div class="employeeCard">
            <div>
            ${engineers[i].getName()}<br />
            ${engineers[i].getRole()}
            </div>
            <p>ID: ${engineers[i].getId()}</p>
            <p>Email: <a href="mailto:${engineers[i].getEmail()}">${engineers[i].getEmail()}</a></p>
            <p>GitHub: <a href="https://www.github.com/${engineers[i].getGithub()}" target="_blank">${engineers[i].getGithub()}</a></p>
            </div>`
        };
        return engineersHTML;
    }
};

const generateInterns = interns => {
    if(interns.length == 0) {
        return "";
    } else {
        let internsHTML = ``;
        for(let i = 0; i < interns.length; i++) {
            internsHTML += `<div class="employeeCard">
            <div>
            ${interns[i].getName()}<br />
            ${interns[i].getRole()}
            </div>
            <p>ID: ${interns[i].getId()}</p>
            <p>Email: <a href="mailto:${interns[i].getEmail()}">${interns[i].getEmail()}</a></p>
            <p>School: ${interns[i].getSchool()}</p>
            </div>`
        };
        return internsHTML;
    }
};

module.exports = (managers, engineers, interns) => {
    return `<!DOCTYPE html>
<html lang="en">

    <head>
        <meta charset="UTF-8" />
        <meta http-equiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Team Webpage</title>

        <!-- Bringing in styles, fonts, etc.  -->
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/4.3.1/css/bootstrap.min.css">
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0/css/all.min.css" />
        <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Open+Sans&display=swap" />
        <link rel="stylesheet"
        href="https://cdnjs.cloudflare.com/ajax/libs/open-iconic/1.1.1/font/css/open-iconic-bootstrap.min.css" />
        <link rel="stylesheet" href="./style.css" />
    </head>

    <body>

        <header class="row">
            <div class="col-12">
                <h1>My Team</h1>
            </div>
        </header>

        <main>
            <div class="row" id="cardHolder">
                <p>${generateManager(managers)}</p>
                <p>${generateEngineers(engineers)}</p>
                <p>${generateInterns(interns)}</p>
            </div>
        </main>

        <script src="https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/4.3.1/js/bootstrap.min.js"></script>

    </body>
</html>`
};