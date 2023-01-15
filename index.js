var readlineSync = require("readline-sync");

var score = 0;
var userName = readlineSync.question("What's your name? ");

console.log("Welcome " + userName + " to ARE YOU A FAN OF DC UNIVERSE? ");

// high score

var scoreList = [
  {
    player: "shruti",
    score: 3
  },
  {
    player: "affan",
    score: 5
  },
  {
    player: "satyam",
    score: 1
  },
  {
    player: "rishabh",
    score: 4
  },
  {
    player: "manthan",
    score: 5
  },
  {
    player: "shivam",
    score: 6
  },
  {
    player: "karan",
    score: 6
  },
];

// play function

function play(question, answer) {
  var userAnswer = readlineSync.question(question);

  if (userAnswer === answer) {
    console.log("You are right!!");
    score = score + 1;

  } else {
    console.log("wrong! its's " + answer);
  }
  console.log("current score: ", score);
  console.log("---------------");
}

var questions = [
  {
    question: "What is the real name of batman? ",
    answer: "bruce wayne"
  },
  {
    question: "who killed superman in 'The Death of Superman' movie? ",
    answer: "doomsday"
  },
  {
    question: "From where does The Green Lantern's powers come from? ",
    answer: "power ring"
  },
  {
    question: "Who killed Batman's sidekick Robin? ",
    answer: "joker"
  },
  {
    question: "What's Superman's Greatest Weakness? ",
    answer: "kryptonite"
  },
  {
    question: "Which word Black Adam speaks to receive his powers? ",
    answer: "shazam"
  },
];

for (var i = 0; i < questions.length; i++) {
  play(questions[i].question, questions[i].answer);
}

console.log("YAY! You SCORED: ", score);
console.log("");

var scores = [];

for (var i = 0; i < scoreList.length; i++) {
  scores.push(scoreList[i].score);
}

var max = Math.max(...scores);
console.log("high scorers are: ");
for (var i = 0; i < scores.length; i++) {
  if (max === scoreList[i].score) {
    console.log(scoreList[i].player + " : " + scoreList[i].score);
  }
}
console.log("-------------");
console.log("Send me your score to update the score board");