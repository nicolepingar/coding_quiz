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
var wrongCount = 0;
var formSection = document.querySelector(".formSection")
formSection.setAttribute("style", "display: none");
var doneHeader = document.querySelector(".done")
var scorePara = document.querySelector(".score")
// var allDone = document.createElement("h2")
// document.body.appendChild(allDone)
var questionHTML = document.querySelector(".question")
var buttons = document.querySelector("#answers")
var initials = document.querySelector("#inputScore")
var submitButton = document.querySelector("#submitButton")
var leaderBoard = document.getElementById("#leaderBoard")





function quiz(x) {
    if (x < quizQuestions.length) {
        questionLinkHTML.textContent = quizQuestions[x].question
        buttonA.textContent = quizQuestions[x].choices[0]
        buttonB.textContent = quizQuestions[x].choices[1]
        buttonC.textContent = quizQuestions[x].choices[2]
        buttonD.textContent = quizQuestions[x].choices[3]
    }
}

// goes to next question no matter what button is pressed
answerButtons.addEventListener("click", answerIdentiy)


// timer 
var secondsLeft = 75;
var timer = document.querySelector(".time");
var startQuiz = document.querySelector("#startButton");
startQuiz.addEventListener("click", function () {
    x = 0
    function setTime() {
        answerButtons.setAttribute("style", "display: inline-block");
        var timerInterval = setInterval(function () {
            secondsLeft--;
            timer.textContent = "Time Remaining: " + secondsLeft
            if (secondsLeft === 0 || x === quizQuestions.length) {
                clearInterval(timerInterval);
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
    // removes header and start button when start button is pressed
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
    if (x < quizQuestions.length) {
        x++
    } else {
        endQuiz();
    }
    quiz(x)

}

var lb = [];

function endQuiz() {
    doneHeader.textContent = "All Done!"
    scorePara.textContent = "Your final score is: " + ((correctCount / quizQuestions.length) * 100) + "%"

    for (var i = 0; i < lb.length; i++) {
        var bl = lb[i];
        
        var li = document.createElement("li")
        li.textContent = bl;
        leaderBoard.appendChild(li);

    }


    // var leaderboardInitials = document.createElement("li")
    // leaderBoard.appendChild(leaderboardInitials)
    leaderboardInitials.textContent = JSON.parse(localStorage.getItem("initialsScore"))
    

    
}

var score = (correctCount / quizQuestions.length) * 100
submitButton.addEventListener("click", function (event) {
    event.preventDefault();
    var initialsScore = {
        initials: initials.value,
        score: score
    };
    localStorage.setItem("initialsScore", JSON.stringify(initialsScore));

    
})


// var firstname = document.getElementById('firstname').value;
// var entry = document.createElement('li');
// entry.appendChild(document.createTextNode(firstname));
// list.appendChild(entry);