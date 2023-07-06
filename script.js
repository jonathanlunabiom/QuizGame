// var highscore-list
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
questionquiz.classList.toggle('hide');
highscores.classList.toggle('hide');
h1content.innerHTML = ("Quiz Challenge");
var numberQuestion = 0;
var corrects = 0;
var wrongs = 0;
var flag = false;

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
        Q: "Select a use of media queries in CSS?",
        A:[
            {answer: "Set color", is:false},
            {answer: "None", is:false},
            {answer: "Set font-size", is:false},
            {answer: "Viewport", is:true},
        ]
    },
];

function selectQuestion(){
    h1content.innerHTML = numberQuestion+1 + "." + allQuestions[numberQuestion].Q;
    ContainerA.innerHTML = "A. " + allQuestions[numberQuestion].A[0].answer;
    ContainerB.innerHTML = "B. " + allQuestions[numberQuestion].A[1].answer;
    ContainerC.innerHTML = "C. " + allQuestions[numberQuestion].A[2].answer;
    ContainerD.innerHTML = "D. " + allQuestions[numberQuestion].A[3].answer;
    numberQuestion++;
    console.log(numberQuestion)
}

nextbtn.addEventListener("click", function(){
    startquiz.classList.toggle('hide');
    questionquiz.classList.toggle('shown');
    selectQuestion();
    countdown();
})

ContainerA.addEventListener("click",function(){
    selectQuestion();
    if(allQuestions[numberQuestion-1].A[0].is){
        corrects++;
    }else{
        wrongs++;
        // timer-10
    }
})

ContainerB.addEventListener("click",function(){
    selectQuestion();
    if(allQuestions[numberQuestion-1].A[1].is){
        corrects++;
    }else{
        wrongs++;
        // timer-10
    }
})

ContainerC.addEventListener("click",function(){
    selectQuestion();
    console.log(allQuestions[numberQuestion-1].A[2].is)
    if(allQuestions[numberQuestion1].A[2].is){
        corrects++;
    }else{
        wrongs++;
    }
})

ContainerD.addEventListener("click",function(){
    selectQuestion();
    if(allQuestions[numberQuestion-1].A[3].is){
        corrects++;
    }else{
        wrongs++;
    }
})

function countdown() {
      var timeLeft = 100;
      // TODO: Use the `setInterval()` method to call a function to be executed every 1000 milliseconds
      var timeInterval = setInterval(function(){
        timeLeft--;
        timer.innerHTML = timeLeft + " seconds remaining";
    
        if(timeLeft===0){
          clearInterval(timeInterval);
        }
  
  
      },1000);
      
}

if(flag){
    questionquiz.classList.toggle('hide');
    startquiz.classList.toggle('hide');
    highscores.classList.toggle('shown');
}


// for (var i=0;i<allQuestions[0].A.length;i++){
//     allcontainers[i].addEventListener("click", function(){
//         selectQuestion();
//         console.log("click:" + i)
//     })
// }

// function concatAnswer(){

// }




// allcontainers[j].addEventListener("click", function(){
//     i++;
// })

// var score=0;

// function startQuiz(){
//     score=0;

// }
// console.log(allQuestions[1].Q);
// console.log(allQuestions[2].A[1].is)
// console.log(allQuestions[2].A[3].answer)
// console.log(allQuestions.length);
// console.log(allQuestions[0].A.length);


// for(var i=0; i<allQuestions.length;i++){
//     for(var j=0;j<allQuestions[i].A.length;j++){

//         if(allQuestions[i].A[j].is){
//             console.log("verdadero")
//         }else{
//             console.log("falso")
//         }
//         console.log(allQuestions[i].A[j].is)
//     }
// }

//when clicking next the section hides

//questions
