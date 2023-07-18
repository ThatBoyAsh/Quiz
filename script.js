const startButton = document.getElementById('start-btn')
const nextButton = document.getElementById('next-btn')

const questionContainerElement = document.getElementById('question-container')
const questionElement = document.getElementById('question')
const answerButtonElement = document.getElementById('answer-button')

let shuffleQuestion, currentQuestionIndex;
let quizScore = 0;

function setStatusClass(element,correct){
    clearStatusClass(element)
    if(correct){
        element.classList.add('correct')
    }else{
        element.classList.add('wrong')
    }
}

function clearStatusClass(element){
    element.classList.remove('correct')
    element.classList.remove('wrong')
}

const questions = [
    {
        question: 'which of these is a JavaScript framework?',
        answers : [
            {text: 'Python', correct:false},
            {text: 'Django', correct:false},
            {text: 'React', correct:true},
            {text: '.NET', correct:false}
        ]
    },
    {
        question: 'Which of these programming languages is an OOP language',
        answers : [
            {text: 'Python', correct:false},
            {text: 'C++', correct:false},
            {text: 'Java', correct:true},
            {text: 'C', correct:false}
        ]
    },
]