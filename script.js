var h1content = document.querySelector("#h1content");
var pcontent = document.querySelector(".pcontent");
var nextbtn = document.querySelector(".next")
var startquiz = document.querySelector(".start-quiz")
var questionquiz = document.querySelector(".question-quiz");
var highscores = document.querySelector(".highscores");
var allcontainers = document.querySelectorAll(".container");
var timer = document.querySelector("#time");
var ContainerA = document.querySelector("#A");
var ContainerB = document.querySelector("#B");
var ContainerC = document.querySelector("#C");
var ContainerD = document.querySelector("#D");
var main_container = document.querySelector(".main-container");
var displayGoB = document.querySelector(".iscorrect");
questionquiz.classList.toggle('hide');
highscores.classList.toggle('hide');
h1content.innerHTML = ("Quiz Challenge");
var numberQuestion = 0;
var timeLeft = 100;

var allQuestions = [
    {
        Q: "What is HTML?",
        A:[
            {answer: "Hyper Text Markup Language", is:true},
            {answer: "Hyper Test Makeup Location", is:false},
            {answer: "Hope This Email Last", is:false},
            {answer: "Hyper Touch Medial Language", is:false},
        ]
    },
    {
        Q: "What is CSS?",
        A:[
            {answer: "Cascade Sort Styler", is:false},
            {answer: "Close Styles Serial", is:false},
            {answer: "Cascade Styles Sheet", is:true},
            {answer: "Constant Styles Sheets", is:false},
        ]
    },
    {
        Q: "Select a use of media queries in CSS",
        A:[
            {answer: "Set color", is:false},
            {answer: "None", is:false},
            {answer: "Set font-size", is:false},
            {answer: "Viewport", is:true},
        ]
    },
    {

    },
];

function selectQuestion(){
    h1content.innerHTML = numberQuestion+1 + "." + allQuestions[numberQuestion].Q;
    ContainerA.innerHTML = "A. " + allQuestions[numberQuestion].A[0].answer;
    ContainerB.innerHTML = "B. " + allQuestions[numberQuestion].A[1].answer;
    ContainerC.innerHTML = "C. " + allQuestions[numberQuestion].A[2].answer;
    ContainerD.innerHTML = "D. " + allQuestions[numberQuestion].A[3].answer;
    console.log(numberQuestion);
}

nextbtn.addEventListener("click", function(){
    startquiz.classList.toggle('hide');
    questionquiz.classList.toggle('shown');
    selectQuestion();
    countdown();
})

function validateQA(answer){
    let iscorrect;
    if (answer==="A"){
        iscorrect = allQuestions[numberQuestion].A[0].is;
    }else if(answer==="B"){
        iscorrect = allQuestions[numberQuestion].A[1].is;
    }else if(answer==="C"){
        iscorrect = allQuestions[numberQuestion].A[2].is;
    }else if (answer==="D"){
        iscorrect = allQuestions[numberQuestion].A[3].is;
    }

    if(iscorrect){
        displayGoB.innerHTML = ("Nice!");
    }else{
        displayGoB.innerHTML = ("Bad one! :(");
        timeLeft=timeLeft-10;
    }
    return iscorrect;
}

function asignQA(event){
    let answer = event.target.id;
    validateQA(answer);
    if(allQuestions[numberQuestion+1] === "" || timeLeft === 0){
        startquiz.classList.toggle('hide');
        questionquiz.classList.toggle('hide');
        highscores.classList,toggle('shown');
    }else{
        selectQuestion();
        numberQuestion++;
    }
}

main_container.addEventListener("click",asignQA);

function countdown() {
    var timeInterval = setInterval(function(){
      timeLeft--;
      timer.innerHTML = timeLeft + " seconds remaining";
  
      if(timeLeft===0){
        clearInterval(timeInterval);
      }
    },1000);
}
