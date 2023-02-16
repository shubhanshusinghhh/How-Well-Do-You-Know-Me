const readlineSync = require('readline-sync');
score = 0;

let participantName = readlineSync.question('What is your name? ');
console.log('Welcome! ' + participantName + ' to HOW WELL DO YOU KNOE ME Quiz? ');

let questionOne = {
    question: 'What is Shubhanshu last name? ',
    answer: 'BAGHEL',
  }
let questionTwo =  {
    question: 'Where do Shubhanshu live? ',
    answer: 'satna',
  }
let questionThree =  {
    question: 'What is Shubhanshu favourite halva ? ',
    answer: 'gajar ka halva',
  }
let questionFour =  {
    question: 'Who is Shubhanshu idol cricketer? ',
    answer: 'sachin tendulkar',
  }
let questionFive = {
    question: 'What is Shubhanshu hobby? ',
    answer: 'sports',
  }


let questions = [questionOne,questionTwo,questionThree,questionFour,questionFive]

function playQuiz(question, answer) {
  let participantAnswer = readlineSync.question(question);
  if (participantAnswer === answer) {
    console.log('Hurray! You are right.');
    score = score + 2;
  } else {
    console.log('Oops! You are wrong.');
    score = score ; }  
  console.log('Your current score is: ' + score);
  console.log('------------')
}

for (i = 0; i < questions.length; i++) {
  playQuiz(questions[i].question, questions[i].answer);
}

console.log('You Final Score Is: ' + score)