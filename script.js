const questions = [
  {
    question: "Which is the capital of Ethiopia?",
    answers: [
      {text: "Abuja", correct: "false"},
      {text: "Abidjan", correct: "false"},
      {text: "Adisababa", correct: "true"},
      {text: "Accra", correct: "false"}
    ]
  },
  {
    question: "Nigeria becomes a Republic in what year?",
    answers: [
      {text: "1960", correct: "false"},
      {text: "1961", correct: "false"},
      {text: "1962", correct: "false"},
      {text: "1963", correct: "true"}
    ]
  },
  {
    question: "Which is the highest mountain in the world?",
    answers: [
      {text: "Everest", correct: "true"},
      {text: "Kilamanjaro", correct: "false"},
      {text: "Fuji", correct: "false"},
      {text: "Olumo", correct: "false"}
    ]
  },
  {
    question: "Which of the following is the hottest planet?",
    answers: [
      {text: "Mecury", correct: "false"},
      {text: "Venus", correct: "true"},
      {text: "Earth", correct: "false"},
      {text: "Mars", correct: "false"}
    ]
  },
  {
    question: "Which of the programming language is best for web development?",
    answers: [
      {text: "Java", correct: "false"},
      {text: "C++", correct: "false"},
      {text: "Python", correct: "false"},
      {text: "JavaScript", correct: "true"}
    ]
  },
];

// DOM variables declaration
const questionElement = document.querySelector(".questions");
const answerButton = document.querySelector(".answer-buttons");
const nextBtn = document.querySelector(".next-btn");

let currentQuestionIndex  = 0;
let score = 0;

// function handling the starting of the quiz
const startQuiz = () => {
  currentQuestionIndex  = 0;
  score = 0;
  nextBtn.innerHTML = "Next";
  showQuestion();
};

//function to display questions
const showQuestion = () => {
  resetState();
  let currentQuestion = questions[currentQuestionIndex];
  let questionNo = currentQuestionIndex + 1;
  questionElement.innerHTML = questionNo + ". " + currentQuestion.question;

  currentQuestion.answers.forEach(answer => {
    const button = document.createElement("button");
    button.innerHTML = answer.text;
    button.classList.add("btn");
    answerButton.appendChild(button);
    if(answer.correct){
      button.dataset.correct = answer.correct;
    }
    button.addEventListener('click', selectAns)
  })
};

// Reseting of state
const resetState = () => {
  nextBtn.style.display = "none";
  while(answerButton.firstChild){
    answerButton.removeChild(answerButton.firstChild)
  }
}

// Function handling selection of answers
const selectAns = (e) => {
  const selectBtn = e.target;
  const isCorrect = selectBtn.dataset.correct === "true";
  if(isCorrect){
    selectBtn.classList.add("correct");
    score++;
  } else {
    selectBtn.classList.add("incorrect")
  }
  Array.from(answerButton.children).forEach(button => {
    if(button.dataset.correct === "true"){
      button.classList.add("correct")
    }
    button.disabled = "true";
  });
  nextBtn.style.display = "block";
}

// Handling of next question otherwise showing completion 
// of the quiz and displaying of score
const handleNextBtn = () => {
  currentQuestionIndex++;
  if(currentQuestionIndex < questions.length){
    showQuestion();
  } else {
    resetState();
    questionElement.innerHTML = `You score ${score} out of ${questions.length}`
    nextBtn.innerHTML = "Play Again"
  }
  nextBtn.style.display = "block"
}

// function that handles the next question 
// when a question have been answered
nextBtn.addEventListener("click", ()=>{
  if(currentQuestionIndex < questions.length){
    handleNextBtn();
  } else {
    startQuiz();
  }
});

startQuiz();