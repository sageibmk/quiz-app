const questions = [
    {
        question : "What is the capital of japan?",
        answers: [
            {text: "Tokyo", correct: true},
            {text: "London", correct: false},
            {text: "Helsinki", correct: false},
            {text: "Nairobi", correct: false},
        ]
    },
    {
        question : "Which of these premier league team won treble in 2023?",
        answers: [
            {text: "Manchester city", correct: true},
            {text: "Manchester United", correct: false},
            {text: "Arsenal", correct: false},
            {text: "Chelsea", correct: false},
        ]
    },
    {
        question : "Which of these footballer won 2022 world cup?",
        answers: [
            {text: "C.Ronaldo", correct: false},
            {text: "Benzima", correct: false},
            {text: "Messi", correct: true},
            {text: "Lowandoski", correct: false},
        ]
    },
    {
        question : "What is national Animal of Australia?",
        answers: [
            {text: "Monkey", correct: false},
            {text: "snake", correct: false},
            {text: "Red Kangaroo", correct: true},
            {text: "Lion", correct: false},
        ] 
    },
    {
        question : "Which European country is known for its tulips?",
        answers: [
            {text: "England", correct: false},
            {text: "Germany", correct: false},
            {text: "Austria", correct: false},
            {text: "Netherlands", correct: true},
        ] 
    },
    {
        question : "What is the largest country by land area?",
        answers: [
            {text: "Russia", correct: true},
            {text: "England", correct: false},
            {text: "Canada", correct: false},
            {text: "Netherlands", correct: false},
        ] 
    }
]

let displayQuestion = document.querySelector(".question");
let answerBtn = document.querySelector(".answer-btn");
let nextBtn = document.querySelector(".next");

var currentQuestionIndex = 0;
var score = 0;

function startQuiz(){
    currentQuestionIndex = 0;
    score = 0;
    nextBtn.innerHTML = "Next";
    showQuestion();
};

function showQuestion(){
    displayQuestion.innerHTML = "";
    answerBtn.innerHTML = "";

    let currentQuestion = questions[currentQuestionIndex];
    let questionNo = currentQuestionIndex + 1;
    displayQuestion.innerHTML = questionNo + ". " + currentQuestion.question;

    currentQuestion.answers.forEach(answer =>{
        const button = document.createElement("button");
        button.innerHTML = answer.text;
        button.classList.add("btn")
        answerBtn.appendChild(button)

        if(answer.correct){
           button.dataset.correct = answer.correct;
        }
        
        button.addEventListener('click', selectAnswer);
    });
   
}

function selectAnswer(e){
  const selectedBtn = e.target;
  const isCorrect = selectedBtn.dataset.correct === "true";

  if(isCorrect){
    selectedBtn.style.backgroundColor = "#1c9d1c";
    score++;
  }else{
    selectedBtn.style.backgroundColor = "#ee4343";
    selectedBtn.style.color = "#fff";
  }

  Array.from(answerBtn.children).forEach(button =>{ 
       if(button.dataset.correct === "true"){
         button.style.backgroundColor = "#1c9d1c";
       }
       button.disabled = true;
  });
  nextBtn.style.display = "block";
}

function showScore(){

    displayQuestion.innerHTML = "";
    answerBtn.innerHTML = "";

    displayQuestion.innerHTML = `You scored ${score} out of ${questions.length}!`;
    nextBtn.innerHTML = "play again";
    nextBtn.style.display = "block";
}

function handleNextBtn(){
    currentQuestionIndex++;
    if(currentQuestionIndex < questions.length){
        showQuestion();
    }else{
        showScore();
    }
}

nextBtn.addEventListener("click", ()=>{
    if(currentQuestionIndex < questions.length){
        handleNextBtn();
    }else{
        startQuiz();
    }
});
startQuiz();