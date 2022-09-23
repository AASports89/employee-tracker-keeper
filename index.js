//FRONT-END JSCRIPT//
    import {UserInput} from './public/lib/userInput.js';
    import figlet from "figlet";

//DISPLAY TITLE --> SPECIAL FORM//
    console.log(figlet.textSync('Employee Tracker', {
        horizontalLayout: 'default',
        verticalLayout: 'default',
        width: 100,
        whitespaceBreak: true
    }));

    const userInput = new UserInput();
        console.log("\n")
    await userInput.intializeApp();