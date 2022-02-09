var questions = [
    {
        question: "Commonly used data types do NOT include:",
        options: [
            "strings", 
            "booleans", 
            "alerts", 
            "numbers"
        ],
        correct: "strings"
    }, 
    {
        question: "The condition with an if / else statement is enclosed with ___",
        options: [
            'quotes', 
            'curly brackets', 
            'perenthesis', 
            'square brackets'
        ],
        correct: "square brackets",
    }, 
    {
        question: "Arrays in Javascript can be used to store ___",
        options: [
            'numbers and strings', 
            'other arrays', 
            'booleans', 
            'all of the above'
        ],
        correct: "other arrays"
    }, 
    {
        question: "String values most be enclosed within ___ when being associated to variables",
        options: [
            'commas',
            'curly brackets',
            'quotes',
            'perenthesis'],
        correct: "curly brackets"
    }, 
    {
        question: "A very useful tool used during development and debugging for printing content to the debugger is:",
        options: ['JavaScript',
        'terminal/bash',
        'for loops',
        'console.log'],
        correct: "for loops"
    }
]

const startBtn = document.getElementById('start-button')
const questionDiv = document.getElementById('question')
const optionsContainer = document.getElementById('options')

startBtn.addEventListener('click', function() {
    startBtn.setAttribute('class', 'hidden')
    nextQuestion()
})

var questionIndex = 0

function nextQuestion() {
    if (questionIndex > questions.length - 1) {
        return
    }
    
    questionDiv.textContent = ''
    optionsContainer.textContent = ''

    questionDiv.textContent = questions[questionIndex].question
    
    for(var i = 0; i < questions[questionIndex].options.length; i++) {
        var option = document.createElement('li')
        option.setAttribute('id', questions[questionIndex].options[i])
        option.textContent = questions[questionIndex].options[i]
        optionsContainer.append(option)

        option.addEventListener('click', function(event) {
            if (event.target.id === questions[questionIndex].correct) {              
            } else {
                console.log('incorrect')
            }
            questionIndex++
            nextQuestion()
        })
    }
}


function endQuiz() {
    questionDiv.textContent = ''
    optionsContainer.textContent = ''
    
}