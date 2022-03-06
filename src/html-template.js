// Takes in the managers array and creates manager-related HTML from the zeroth index (since there is only ever one manager per team).
// Note that email address hyperlinks are set to mailto:, so they will open the default email program, as requested.
const generateManager = managers => {
    return `<div class="col-3 m-4">
    <div class="cardHeader">
    <h2>${managers[0].getName()}<br />
    <i class="fa-solid fa-mug-hot"></i> ${managers[0].getRole()}</h2>
    </div>
    <p>ID: ${managers[0].getId()}</p>
    <p>Email: <a href="mailto:${managers[0].getEmail()}">${managers[0].getEmail()}</a></p>
    <p>Office number: ${managers[0].getOfficeNumber()}</p>
    </div>`
};

// If engineers exist in the engineers array, iterates over the array building out engineer-related HTML entries
// Note that GitHub hyperlinks have the target attribute set to _blank, so they will open in a new browser tab, as requested.
const generateEngineers = engineers => {
    if(engineers.length == 0) {
        return "";
    } else {
        let engineersHTML = ``;
        for(let i = 0; i < engineers.length; i++) {
            engineersHTML += `<div class="col-3 m-4">
            <div class="cardHeader">
            <h2>${engineers[i].getName()}<br />
            <i class="fa-solid fa-glasses"></i> ${engineers[i].getRole()}</h2>
            </div>
            <p>ID: ${engineers[i].getId()}</p>
            <p>Email: <a href="mailto:${engineers[i].getEmail()}">${engineers[i].getEmail()}</a></p>
            <p>GitHub: <a href="https://www.github.com/${engineers[i].getGithub()}" target="_blank">${engineers[i].getGithub()}</a></p>
            </div>`
        };
        return engineersHTML;
    }
};

// If interns exist in the interns array, iterates over the array building out intern-related HTML entries
const generateInterns = interns => {
    if(interns.length == 0) {
        return "";
    } else {
        let internsHTML = ``;
        for(let i = 0; i < interns.length; i++) {
            internsHTML += `<div class="col-3 m-4">
            <div class="cardHeader">
            <h2>${interns[i].getName()}<br />
            <i class="fa-solid fa-graduation-cap"></i> ${interns[i].getRole()}</h2>
            </div>
            <p>ID: ${interns[i].getId()}</p>
            <p>Email: <a href="mailto:${interns[i].getEmail()}">${interns[i].getEmail()}</a></p>
            <p>School: ${interns[i].getSchool()}</p>
            </div>`
        };
        return internsHTML;
    }
};

// Export an anonymous function that accepts the global arrays from index.js and returns complete webpage HTML
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

        <header>
            <h1 class="text-center">My Team</h1>
        </header>

        <main class="container">
            <div class="row justify-content-around">
                    <p>${generateManager(managers)}</p>
                    <p>${generateEngineers(engineers)}</p>
                    <p>${generateInterns(interns)}</p>
            </div>
        </main>

        <script src="https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/4.3.1/js/bootstrap.min.js"></script>

    </body>
</html>`
};