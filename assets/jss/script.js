var start = document.querySelector("#startbtn");
var quizInfo = document.querySelector("#quizinfo");
var question1 = document.querySelector("#question1");
var answers = document.querySelectorAll(".answer");
var question2 = document.querySelector("#question2");
var startQuiz = function () {
    quizInfo.classList.add("hide");
    question1.classList.remove("hide");
}

var answeredQuestion = function () {

    if (this.id == "b4") {
        console.log("Correct!");
    }
    else {
        console.log("Wrong!")
    }
}

var changeQuestion = function() {
    question1.classList.add("hide");
    question2.classList.remove("hide")
}

start.addEventListener("click", startQuiz);

for(var i = 0; i < 4; i++){
   var answer = answers[i];
    answer.addEventListener("click", answeredQuestion);
    answer.addEventListener("click", changeQuestion);
};

