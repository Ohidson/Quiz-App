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
];

const questionElement = document.querySelector(".questions");
const answerButton = document.querySelector(".answer-buttons");
const nextBtn = document.querySelector(".next-btn");

let currentQuestionIndex  = 0;
let score = 0;

const startQuiz = () => {
  currentQuestionIndex  = 0;
  score = 0;
  nextBtn.innerHTML = "Next";
  showQuestion();
}

const showQuestion = () => {
  resetState();
  let questionNumber = currentQuestionIndex  + 1;
  let currentQuestion = questions[currentQuestionIndex]
  questionElement.innerHTML = questionNumber + ". " + currentQuestion['question'];

  currentQuestion.answers.forEach(answer => {
    const button = document.createElement("button");
    button.innerHTML = answer.text;
    button.classList.add("btn");
    answerButton.appendChild(button)
  })
};

const resetState = () => {
  nextBtn.style.display = "none";
  while(answerButton.firstChild){
    answerButton.firstChild.remove()
  }
} 
startQuiz();