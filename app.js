
(async () =>{



const { prompt } = require('enquirer')
const questions = require('./questions.json')

//WE dont want to hard code the prompts directly into the 

//Note that anythings inside of the parentheses happens first ...NOTE: This is a async function so we can use awaits 
console.log (await prompt(questions))

})()