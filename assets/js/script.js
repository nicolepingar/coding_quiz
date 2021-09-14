var quizQuestions = [
    {question: "1. Commonly used data types NO NOT include:",
    choices: ["a. strings", "b. booleans", "c. alerts", "d. numbers"],
    answer: "c. alerts"},
    {question: "2. The condition in an if/else statement is enclosed within _____.",
    choices: ["a. quotes", "b. curly brackets", "c. parentheses", "d. square brackets"],
    answer: "c. parentheses"},
    {question: "3. Arrays in JavaScript can be used to store _____.", 
    choices: ["a. numbers and strings", "b. other arrays", "c. booleans", "d. all of the above"],
    answer: "d. all of the above"}, 
    {question: "4. String values must be enclosed within _______ when being assigned to variables.", 
    choices: ["a. commas", "b. curly brackets", "c. quotes", "d. parentheses"],
    answer: "c. quotes"}, 
    {question: "5. A very useful tool used during development and debugging for printing content to the debugger is:",
    choices: ["a. JavaScript", "b. terminal/bash", "c. for loops", "d. console.log"],
    answer: "d. console.log"}
]


var questionLinkHTML = document.querySelector(".question")
var buttonA = document.querySelector(".buttonA")
var buttonB = document.querySelector(".buttonB")
var buttonC = document.querySelector(".buttonC")
var buttonD = document.querySelector(".buttonD")
var x = 0

var answerButtons = document.querySelector("#answers")
var removeHeader = document.querySelector("header")

var correctWrong = document.createElement("p");
document.body.appendChild(correctWrong);

function quiz(x) {
if (x < quizQuestions.length ) {
    questionLinkHTML.textContent = quizQuestions[x].question
    buttonA.textContent = quizQuestions[x].choices[0]
    buttonB.textContent = quizQuestions[x].choices[1]
    buttonC.textContent = quizQuestions[x].choices[2]
    buttonD.textContent = quizQuestions[x].choices[3]
}
}

// goes to next question no matter what button is pressed
answerButtons.addEventListener("click", answerIdentiy)

console.log(quizQuestions[0].choices[0]);

var questionHTML = document.querySelector(".question")
var buttons = document.querySelector("#answers")

// timer 
var secondsLeft = 75;
var timer = document.querySelector(".time");
var startQuiz = document.querySelector("#startButton");
startQuiz.addEventListener("click", function () {
    x = 0
    function setTime () {
        var timerInterval = setInterval(function () {
            secondsLeft--;
            timer.textContent = "Time Remaining: " + secondsLeft
            if (secondsLeft === 0) {
                clearInterval(timerInterval);
                // sendMessage();
            }
        }, 1000);
    }
    setTime();
    quiz(x)
// removes header and start button when start button is pressed
    removeHeader.setAttribute("style", "display: none");

})

// if answer is right/wrong create a new element, p under body
// p will wither print correct or wrong 



function answerIdentiy(event) {
  event.preventDefault()
  console.log(event.target.textContent);
if (event.target.textContent === quizQuestions[x].answer) {
    correctWrong.textContent = "Correct!";
} else {
    correctWrong.textContent = "Wrong!";
    secondsLeft = secondsLeft - 10
}

  if (x < quizQuestions.length) {
      x++
  }
  quiz(x)
}

