var start = document.querySelector("#startbtn");
var quizInfo = document.querySelector("#quizinfo");
var question1 = document.querySelector("#question1");
var answers = document.querySelectorAll(".answer");
var question2 = document.querySelector("#question2");
var question3 = document.querySelector("#question3");
var startQuiz = function () {
    quizInfo.classList.add("hide");
    question1.classList.remove("hide");
}

var answeredQuestion = function () {

    if (this.id == "b4") {
        console.log("Correct!");
    }
    else if (this.id == "b1" || "b2" || "b3") {
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

var answeredQuestion2 = function() {
    if(this.id  == "b6") {
        console.log("Correct!");
    }
    else  {
        console.log("Wrong 2!");
    }
}

var changeQuestion2 = function() {
    question2.classList.add("hide");
    question3.classList.remove("hide");
}

for(var i = 4; i < 8; i++){
    var answer = answers[i];
     answer.addEventListener("click", answeredQuestion2);
     answer.addEventListener("click", changeQuestion2);
 };

var answeredQuestions3 = function() {
    if(this.id == "b11") {
        console.log("Correct!")
    }
    else {
        console.log("Wrong 3!")
    }
}

for(var i = 8; i < 12; i++){
    var answer = answers[i];
     answer.addEventListener("click", answeredQuestions3);
     //answer.addEventListener("click", changeQuestion2);
 };