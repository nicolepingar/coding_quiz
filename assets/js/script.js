var quizQuestions = [
    {question: "Commonly used data types NO NOT include:",
    choices: ["a0", "a1", "a2", "a3"],
    answer: "a0"},
    {question: "The condition in an if/else statement is enclosed within _____.",
    choices: ["b0", "b1", "b2", "b3"],
    answer: "a0"},
    {question: "Arrays in JavaScript can be used to store _____.", 
    choices: ["a0", "a1", "a2", "a3"],
    answer: "a3"}, 
    {question: "String values must be enclosed within _______ when being assigned to variables.", 
    choices: ["a0", "a1", "a2", "a3"],
    answer: "a0"}, 
    {question: "A very useful tool used during development and debugging for printing content to the debugger is:",
    choices: ["a0", "a1", "a2", "a3"],
    answer: "a0"}
]

var questionLinkHTML = document.querySelector(".question")
var buttonA = document.querySelector(".buttonA")
var buttonB = document.querySelector(".buttonB")
var buttonC = document.querySelector(".buttonC")
var buttonD = document.querySelector(".buttonD")
var x = 0

var answerButtons = document.querySelector("#answers")


function quiz(x) {
if (x < quizQuestions.length ) {
    questionLinkHTML.textContent = quizQuestions[x].question
    buttonA.textContent = quizQuestions[x].choices[0]
    buttonB.textContent = quizQuestions[x].choices[1]
    buttonC.textContent = quizQuestions[x].choices[2]
    buttonD.textContent = quizQuestions[x].choices[3]
}
 
}

// goes to new question no matter what button is pressed
answerButtons.addEventListener("click", answerIdentiy)

console.log(quizQuestions[0].choices[0]);

var questionHTML = document.querySelector(".question")
var buttons = document.querySelector("#answers")

// timer 
var timer = document.querySelector(".time");
var startQuiz = document.querySelector("#startButton");
startQuiz.addEventListener("click", function () {
    x = 0
    var secondsLeft = 75;
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
})

function answerIdentiy(event) {
  event.preventDefault()
  if (x < quizQuestions.length) {
      x++
  }
  quiz(x)
}





// var element = document.querySelector(".questions")


//    buttons.addEventListener("click", function () {
//     for (let i = 0; i < questions.length; i++) {
//         //const element = questions[i];
//          questionHTML.textContent = questions[i]
     
//          buttonA.textContent = answersA[i]
//          buttonB.textContent = answersB[i]
//          buttonC.textContent = answersC[i]
//          buttonD.textContent = answersD[i]

//    } 
   
// }
//    )
//    questions.forEach(element => {
       
//    });
    
// // sendMessage = all done message

