const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");

const OUTPUT_DIR = path.resolve(__dirname, "output");
const outputPath = path.join(OUTPUT_DIR, "team.html");

const render = require("./lib/htmlRenderer");

teamArray = []

// Write code to use inquirer to gather information about the development team members,
// and to create objects for each team member (using the correct classes as blueprints!)

// function to initialize program
function init() {

    inquirer
        .prompt([
            {
                type: "list",
                message: "are you a Manager, Engineer, or Intern?",
                choices: ["Manager", "Engineer", "Intern", "Finish and Exit"],
                name: 'role',
            }])
        .then(answers => {

            //test code, i think this is what i should do here
            switch (answers.role) {
                case 'Manager':
                    askManagerQuestions()
                    break;
                case 'Engineer':
                    askEngineerQuestions();
                    break;
                case 'Intern':
                    askInternQuestions();
                    break;
                case 'Finish and Exit':
                    let teamHTML = render(teamArray)
                    fs.writeFile("./output/team.html", teamHTML, function(err){
                        if (err) {
                            return console.log(err);
                        }
                    
                        console.log("Team HTML Generated!")
                    });
                    break;
                // default:
                //     console.log("done!");
            }

        });


    function askManagerQuestions() {

        inquirer
            .prompt([

                {
                    message: 'Enter your name',
                    name: 'name',
                },
                {
                    message: 'Enter your email',
                    name: 'email',
                },
                {
                    message: 'Enter your id number',
                    name: 'id',
                },
                {
                    message: 'Enter your office number',
                    name: 'officeNumber',
                }


            ])
            .then(answers => {
        console.log(answers)
            let newManager = new Manager(answers.name, answers.id, answers.email, answers.officeNumber)
                console.log(newManager)
                teamArray.push(newManager)
                init()
            });

    }


    function askEngineerQuestions() {

        inquirer
            .prompt([

                {
                    message: 'Enter your name',
                    name: 'name',
                },
                {
                    message: 'Enter your email',
                    name: 'email',
                },
                {
                    message: 'Enter your id number',
                    name: 'id',
                },
                {
                    message: 'Enter your github profile',
                    name: 'github',
                }


            ])
            .then(answers => {
                let newEngineer = new Engineer(answers.name, answers.id, answers.email, answers.github)
                console.log(newEngineer)
                teamArray.push(newEngineer)
                init()
            });

    }

    function askInternQuestions() {

        inquirer
            .prompt([

                {
                    message: 'Enter your name',
                    name: 'name',
                },
                {
                    message: 'Enter your email',
                    name: 'email',
                },
                {
                    message: 'Enter your id number',
                    name: 'id',
                },
                {
                    message: 'Enter your school name',
                    name: 'school',
                }


            ])
            .then(answers => {

                let newIntern = new Intern(answers.name, answers.id, answers.email, answers.school)
                console.log(newIntern)
                teamArray.push(newIntern)
                init()
            });

    }
}




// // function call to initialize program
init();


// After the user has input all employees desired, call the `render` function (required
// above) and pass in an array containing all employee objects; the `render` function will
// generate and return a block of HTML including templated divs for each employee!


// After you have your html, you're now ready to create an HTML file using the HTML
// returned from the `render` function. Now write it to a file named `team.html` in the
// `output` folder. You can use the variable `outputPath` above target this location.
// Hint: you may need to check if the `output` folder exists and create it if it
// does not.

// HINT: each employee type (manager, engineer, or intern) has slightly different
// information; write your code to ask different questions via inquirer depending on
// employee type.

// HINT: make sure to build out your classes first! Remember that your Manager, Engineer,
// and Intern classes should all extend from a class named Employee; see the directions
// for further information. Be sure to test out each class and verify it generates an
// object with the correct structure and methods. This structure will be crucial in order
// for the provided `render` function to work! ```
