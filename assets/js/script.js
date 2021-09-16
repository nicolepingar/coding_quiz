// questions, answer choices and correct answers
var quizQuestions = [
    {
        question: "1. Commonly used data types NO NOT include:",
        choices: ["a. strings", "b. booleans", "c. alerts", "d. numbers"],
        answer: "c. alerts"
    },
    {
        question: "2. The condition in an if/else statement is enclosed within _____.",
        choices: ["a. quotes", "b. curly brackets", "c. parentheses", "d. square brackets"],
        answer: "c. parentheses"
    },
    {
        question: "3. Arrays in JavaScript can be used to store _____.",
        choices: ["a. numbers and strings", "b. other arrays", "c. booleans", "d. all of the above"],
        answer: "d. all of the above"
    },
    {
        question: "4. String values must be enclosed within _______ when being assigned to variables.",
        choices: ["a. commas", "b. curly brackets", "c. quotes", "d. parentheses"],
        answer: "c. quotes"
    },
    {
        question: "5. A very useful tool used during development and debugging for printing content to the debugger is:",
        choices: ["a. JavaScript", "b. terminal/bash", "c. for loops", "d. console.log"],
        answer: "d. console.log"
    }
]
// universal variables 
var questionLinkHTML = document.querySelector(".question")
var buttonA = document.querySelector(".buttonA")
var buttonB = document.querySelector(".buttonB")
var buttonC = document.querySelector(".buttonC")
var buttonD = document.querySelector(".buttonD")
var x = 0
var answerButtons = document.querySelector("#answers")
answerButtons.setAttribute("style", "display: none");
var removeHeader = document.querySelector("header")
var correctWrong = document.createElement("p");
document.body.appendChild(correctWrong);
var correctCount = 0;
var formSection = document.querySelector(".formSection")
formSection.setAttribute("style", "display: none");
var doneHeader = document.querySelector(".done")
var scorePara = document.querySelector(".score")
var questionHTML = document.querySelector(".question")
var buttons = document.querySelector("#answers")
var initials = document.querySelector("#inputScore")
var submitButton = document.querySelector("#submitButton")
var leaderBoard = document.getElementById("leaderBoard")
var highScores = []
var initialsScore = [];
// goes through quizQuestions object 
function quiz(x) {
    if (x < quizQuestions.length) {
        questionLinkHTML.textContent = quizQuestions[x].question
        buttonA.textContent = quizQuestions[x].choices[0]
        buttonB.textContent = quizQuestions[x].choices[1]
        buttonC.textContent = quizQuestions[x].choices[2]
        buttonD.textContent = quizQuestions[x].choices[3]
    }
}
// when any of 4 answer choices are pressed, quizQuestions.length is increased by 1 so it goes to the next question
answerButtons.addEventListener("click", answerIdentiy)
// timer 
var secondsLeft = 75;
// selects h4 header as element to put timer in
var timer = document.querySelector(".time");
var startQuiz = document.querySelector("#startButton");
startQuiz.addEventListener("click", function () {
    x = 0
    function setTime() {
        // when start button is pressed, buttons are displayed 
        answerButtons.setAttribute("style", "display: flex");
        var timerInterval = setInterval(function () {
            secondsLeft--;
            timer.textContent = "Time Remaining: " + secondsLeft
            // if the timer hits zero or all questions are met, end timer and call the endQuiz function
            if (secondsLeft === 0 || x === quizQuestions.length) {
                clearInterval(timerInterval);
                // when timer is cleared, these varaibles attributes change 
                questionLinkHTML.setAttribute("style", "display: none");
                answerButtons.setAttribute("style", "display: none");
                formSection.setAttribute("style", "display: inline");
                correctWrong.setAttribute("style", "display: none");
                timer.setAttribute("style", "display: none");
                endQuiz();
            }
        }, 1000);
    }
    setTime();
    quiz(x)
    // removes h1 and start button when start button is pressed
    removeHeader.setAttribute("style", "display: none");
})
// if answer is right/wrong create a new element, p under body, p will either print correct or wrong 
function answerIdentiy(event) {
    event.preventDefault()
    if (event.target.textContent === quizQuestions[x].answer) {
        correctWrong.textContent = "Correct!";
        correctCount++
    } else {
        correctWrong.textContent = "Wrong!";
        secondsLeft = secondsLeft - 10
    }
    // relates to function quiz on line 53
    if (x < quizQuestions.length) {
        x++
    } else {
        endQuiz();
    }
    quiz(x)
}
// ends quiz and displays final screen 
function endQuiz() {
    doneHeader.textContent = "All Done!"
    scorePara.textContent = "Your final score is: " + ((correctCount / quizQuestions.length) * 100) + "%"
    // gets stored data from local storage
    var storedData = JSON.parse(localStorage.getItem("highScores"))
    // creates new list element when user inputs initials and pressed submitt
    for (var i = 0; i < storedData.length; i++) {
        var random = storedData[i];
        var li = document.createElement("li")
        li.textContent = random.initials + " " + random.score;
        leaderBoard.appendChild(li);
    }
    // if the leaderboard was updated in stored data, update the leaderboard upon refresh 
    if (storedData !== null) {
        leaderBoard = storedData;
    }
}
// when the submit button is clicked, initials and data are set in local storage
submitButton.addEventListener("click", function (event) {
    event.preventDefault();
    var score = (correctCount / quizQuestions.length) * 100
    var initialsScore = {
        initials: initials.value,
        score: score
    };

    highScores.push(initialsScore);
    localStorage.setItem("highScores", JSON.stringify(highScores));
    leaderBoard.innerHTML = ""
    endQuiz();
})

