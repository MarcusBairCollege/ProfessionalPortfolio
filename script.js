const questions = [
    {
        question: "What is the capital of France?",
        options: ["Paris", "London", "Berlin", "Madrid"],
        answer: "Paris"
    },
    {
        question: "Which planet is known as the Red Planet?",
        options: ["Earth", "Mars", "Jupiter", "Saturn"],
        answer: "Mars"
    },
    {
        question: "Who wrote The Hunger Games?",
        options: ["Suzanne Collins", "Mark Twain", "J.K. Rowling", "Ernest Hemingway"],
        answer: "Suzanne Collins"
    },
    {
        question: "What is James Bond's code name?",
        options: ["003", "004", "009", "007"],
        answer: "007"
    },
    {
        question: "What is the largest human organ?",
        options: ["Heart", "Skin", "Brain", "Kidney"],
        answer: "Skin"
    },
    {
        question: "What is the largest country in the world?",
        options: ["Russia", "China", "Argentina", "Mexico"],
        answer: "Russia"
    },
    {
        question: "What is the only food that can never go bad?",
        options: ["Milk", "Apples", "Honey", "Cheese"],
        answer: "Honey"
    }
];

let currentQuestionIndex = 0;
let score = 0;

function loadQuestion() {
    const questionElement = document.getElementById("question");
    const optionsElement = document.getElementById("options");

    console.log(questionElement); 
    console.log(optionsElement);

    questionElement.textContent = questions[currentQuestionIndex].question;
    optionsElement.innerHTML = '';

    questions[currentQuestionIndex].options.forEach(option => {
        const button = document.createElement("button");
        button.textContent = option;
        button.className = "option";
        button.onclick = () => selectOption(option);
        optionsElement.appendChild(button);
    });
}

function selectOption(selectedOption) {
    const correctAnswer = questions[currentQuestionIndex].answer;
    if (selectedOption === correctAnswer) {
        score++;
    }

    nextQuestion();
}

function nextQuestion() {
    currentQuestionIndex++;
    if (currentQuestionIndex < questions.length) {
        loadQuestion();
    } else {
        showScore();
    }
}

function showScore() {
    const quizContainer = document.getElementById("quiz-container");
    quizContainer.innerHTML = `
        <h2>Your score: ${score}/${questions.length}</h2>
        <button id="reload-button" onclick="reloadQuiz()">Reload Quiz</button>
    `;
}

function reloadQuiz() {
    currentQuestionIndex = 0;
    score = 0;

    const quizContainer = document.getElementById("quiz-container"); 
    quizContainer.innerHTML = ` 
        <div id="question"></div> 
        <div id="options"></div> 
        <button id="next-button" onclick="nextQuestion()">Next</button> 
        `;

    loadQuestion();
}

loadQuestion();
