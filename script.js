// Quiz data
const quizData = [
    {
        question: "Which keyword is used to declare variables in JavaScript?",
        choices: ["var", "let", "const", "All of the above"],
        correct: 3
    },
    {
        question: "Which method removes the last element from an array?",
        choices: ["push()", "pop()", "shift()", "unshift()"],
        correct: 1
    },
    {
        question: "Which operator is used for strict equality comparison in JavaScript?",
        choices: ["=", "==", "===", "!="],
        correct: 2
    }
];

// Application state
let currentQuestionIndex = 0;
let score = 0;
let selectedAnswer = null;

// Get DOM elements
const questionText = document.getElementById('question-text');
const choicesContainer = document.getElementById('choices-container');
const currentQuestionSpan = document.getElementById('current-question');
const quizContainer = document.getElementById('quiz-container');
const resultContainer = document.getElementById('result-container');
const correctAnswersSpan = document.getElementById('correct-answers');
const totalAnswersSpan = document.getElementById('total-answers');
const percentageSpan = document.getElementById('percentage');
const restartBtn = document.getElementById('restart-btn');

// Initialize
function init() {
    currentQuestionIndex = 0;
    score = 0;
    selectedAnswer = null;
    showQuestion();
    quizContainer.style.display = 'block';
    resultContainer.style.display = 'none';
}

// Display question
function showQuestion() {
    const question = quizData[currentQuestionIndex];
    questionText.textContent = question.question;
    currentQuestionSpan.textContent = currentQuestionIndex + 1;
    
    // Generate choice buttons
    choicesContainer.innerHTML = '';
    question.choices.forEach((choice, index) => {
        const button = document.createElement('button');
        button.className = 'choice-btn';
        button.textContent = choice;
        button.addEventListener('click', () => selectAnswer(index));
        choicesContainer.appendChild(button);
    });
}

// Select answer
function selectAnswer(choiceIndex) {
    if (selectedAnswer !== null) return; // Do nothing if already answered
    
    selectedAnswer = choiceIndex;
    const buttons = choicesContainer.querySelectorAll('.choice-btn');
    
    // Disable all buttons
    buttons.forEach(btn => btn.disabled = true);
    
    // Apply styles to selected button and correct answer
    const correctIndex = quizData[currentQuestionIndex].correct;
    
    buttons.forEach((btn, index) => {

        const feedbackSpan = document.createElement('span');
        feedbackSpan.classList.add('feedback')

      if (index === choiceIndex && index === correctIndex) {
        // Selected and correct
        btn.classList.add('correct');
        feedbackSpan.textContent = 'Correct!';
        btn.appendChild(feedbackSpan);
      } else if (index === choiceIndex && index !== correctIndex) {
        // Selected and incorrect
        btn.classList.add('incorrect');
        feedbackSpan.textContent = 'Incorrect!';
        btn.appendChild(feedbackSpan);
      } else if (index === correctIndex) {
        // Not selected but correct
        btn.classList.add('correct');
        feedbackSpan.textContent = 'Correct!';
        btn.appendChild(feedbackSpan);
      }
    });
    
    // Check if answer is correct
    if (choiceIndex === correctIndex) {
        score++;
    }
    
    // Move to next question (with delay to show result)
    setTimeout(() => {
        nextQuestion();
    }, 1500);
}

// Move to next question
function nextQuestion() {
    currentQuestionIndex++;
    
    if (currentQuestionIndex < quizData.length) {
        selectedAnswer = null;
        showQuestion();
    } else {
        showResult();
    }
}

// Display result
function showResult() {
    const percentage = Math.round((score / quizData.length) * 100);

    if (score === quizData.length) {
        confetti();
    }
    
    correctAnswersSpan.textContent = score;
    totalAnswersSpan.textContent = quizData.length;
    percentageSpan.textContent = percentage;
    
    quizContainer.style.display = 'none';
    resultContainer.style.display = 'block';
}

// Restart button event listener
restartBtn.addEventListener('click', init);

// Start application
document.addEventListener('DOMContentLoaded', init);

// ===============================
// クイズアプリの処理の流れ（メモ）
// ===============================
// 1. DOMContentLoaded → init()
// 2. init() → showQuestion()
// 3. showQuestion() → 選択肢クリック → selectAnswer(index)
// 4. selectAnswer():
//    - 回答ロック（disable）
//    - スタイル付与（correct / incorrect / selected）
//    - setTimeout → nextQuestion()
// 5. nextQuestion():
//    - 問題が残っていれば showQuestion() ...3に戻る
//    - なければ showResult()
// 6. showResult() → 結果表示・スコア表示
// 7. restartBtnクリック → init() → 最初に戻る