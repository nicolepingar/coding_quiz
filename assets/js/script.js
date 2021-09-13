var questions = ["Commonly used data types NO NOT include:", 
"The condition in an if/else statement is enclosed within _____.", 
"Arrays in JavaScript can be used to store _____.", 
"String values must be enclosed within _______ when being assigned to variables.", 
"A very useful tool used during development and debugging for printing content to the debugger is:"]

var buttonA = ["a0", "a1", "a2", "a3", "a4" ]
var buttonB = ["b0", "b1", "b2", "b3", "b4" ]
var buttonC = ["c0", "c1", "c2", "c3", "c4" ]
var buttonD = ["d0", "d1", "d2", "d3", "d4" ]

var timer = document.querySelector(".time");

var startQuiz = document.querySelector("#startButton");
startQuiz.addEventListener("click", function () {
    var secondsLeft = 75;
    function setTime () {
        var timerInterval = setInterval(function () {
            secondsLeft--;
            timer.textContent = "Time Remaining: " + secondsLeft
            if (secondsLeft === 0) {
                // clearInterval(timerInterval);
                sendMessage();
            }
        }, 1000);
    }
    setTime();
})



    
// sendMessage = all done message
