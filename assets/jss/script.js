var start = document.querySelector("#startbtn");
var quizInfo = document.querySelector("#quizinfo");
var question1 = document.querySelector("#question1");
var answers = document.querySelectorAll(".answer");
var question2 = document.querySelector("#question2");
var question3 = document.querySelector("#question3");
var finalScore = document.querySelector("#finalScore");
var playerScore = localStorage.getItem("scores");
if (!playerScore) {
    playerScore = [];
}
else {
    playerScore = JSON.parse(playerScore);
}
var timerEl = document.querySelector("#timer");
var timeLeft = 75;
var finalScoreText = document.querySelector("#finalScoreText");
var playerInput = document.querySelector("#initials");
// var playerScore = playerInput.value + timeLeft
var startQuiz = function () {
    quizInfo.classList.add("hide");
    question1.classList.remove("hide");
    var downloadTimer = setInterval(function () {
        if (timeLeft <= 0) {
            clearInterval(downloadTimer);
            question1.classList.add("hide");
            question2.classList.add("hide");
            question3.classList.add("hide");
            finalScore.classList.remove("hide");
            timerEl.classList.add("hide");
            document.querySelector("#timer").innerHTML = 0;
            document.querySelector("#finalScoreText").innerHTML = "You're score is " + 0 + "!";
        }
        else {
            document.querySelector("#timer").innerHTML = timeLeft;
        }
        timeLeft -= 1;
    }, 1000);
}

var answeredQuestion = function () {

    if (this.id == "b4") {
        console.log("Correct!");
    }
    else {
        console.log("Wrong!");
        timeLeft = timeLeft - 10;
    }
}

var changeQuestion = function () {
    question1.classList.add("hide");
    question2.classList.remove("hide")
}

start.addEventListener("click", startQuiz);

for (var i = 0; i < 4; i++) {
    var answer = answers[i];
    answer.addEventListener("click", answeredQuestion);
    answer.addEventListener("click", changeQuestion);
};

var answeredQuestion2 = function () {
    if (this.id == "b6") {
        console.log("Correct!");
    }
    else {
        console.log("Wrong 2!");
        timeLeft = timeLeft - 10;
    }
}

var changeQuestion2 = function () {
    question2.classList.add("hide");
    question3.classList.remove("hide");
}

for (var i = 4; i < 8; i++) {
    var answer = answers[i];
    answer.addEventListener("click", answeredQuestion2);
    answer.addEventListener("click", changeQuestion2);
};

var answeredQuestion3 = function () {
    if (this.id == "b11") {
        console.log("Correct!")
    }
    else {
        console.log("Wrong 3!")
        timeLeft = timeLeft - 10;
    }
}

var changeQuestion3 = function () {
    question3.classList.add("hide");
    finalScore.classList.remove("hide");
    finalScoreText.innerHTML = "You're score is " + timeLeft + "!";
    timerEl.classList.add("hide");
}
for (var i = 8; i < 12; i++) {
    var answer = answers[i];
    answer.addEventListener("click", answeredQuestion3);
    answer.addEventListener("click", changeQuestion3);
};

submitScore = function () {
    event.preventDefault();
    var playerInput = document.querySelector("#initials");
    playerScore.push(playerInput.value + timeLeft);
    localStorage.setItem("scores", JSON.stringify(playerScore));
}
document.querySelector("#submit").addEventListener("click", submitScore)