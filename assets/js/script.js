var questions = [
    {
        question: "Commonly used data types do NOT include:",
        options: [
            "strings", 
            "booleans", 
            "alerts", 
            "numbers"
        ],
        correct: "alerts"
    }, 
    {
        question: "The condition with an if / else statement is enclosed with ___",
        options: [
            'quotes', 
            'curly brackets', 
            'perenthesis', 
            'square brackets'
        ],
        correct: "curly brackets",
    }, 
    {
        question: "Arrays in Javascript can be used to store ___",
        options: [
            'numbers and strings', 
            'other arrays', 
            'booleans', 
            'all of the above'
        ],
        correct: "all of the above"
    }, 
    {
        question: "String values most be enclosed within ___ when being associated to variables",
        options: [
            'commas',
            'curly brackets',
            'quotes',
            'perenthesis'],
        correct: "quotes"
    }, 
    {
        question: "A very useful tool used during development and debugging for printing content to the debugger is:",
        options: ['JavaScript',
        'terminal/bash',
        'for loops',
        'console.log'],
        correct: "console.log"
    }
]

const startBtn = document.getElementById('start-button')
const questionDiv = document.getElementById('question')
const optionsContainer = document.getElementById('options')
const form = document.getElementById('userForm')
const timeContainer = document.getElementById('timer')

startBtn.addEventListener('click', function() {
    startBtn.setAttribute('class', 'hidden')
    nextQuestion()
    timerCountdown()
})

var timer = 90
var score = 0
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
                console.log('correct')
                score += 50              
            } else {
                console.log('incorrect')
                timer -= 20
            }
            questionIndex++
            nextQuestion()
        })
    }
}

//timer set to begin when you press the start button
//and begin the quiz
function timerCountdown() {
    var beginTimer = setInterval(function() {
        timeContainer.textContent = timer
        timer--
        if (timer < 0 || questionIndex > questions.length - 1 ) {
            clearInterval(beginTimer)
            endQuiz()
            return
        }
    }, 1000)
}


// function to end the quiz
function endQuiz() {
    questionDiv.textContent = ''
    optionsContainer.textContent = ''
    timeContainer.textContent = ''

    var initials = document.createElement('input')
    initials.setAttribute('placeholder', 'Enter your initials')
    form.prepend(initials)

    var submitBtn = document.createElement('button')
    submitBtn.textContent = 'Submit'
    form.append(submitBtn)

    submitBtn.addEventListener('click', function(e) {
        e.preventDefault()
        var storage = JSON.parse(localStorage.getItem('highscores'))
        if (storage === null) {
            storage = []
        }
        
        var user = {
            name: initials.value,
            score: score

        }

        storage.push(user)

        localStorage.setItem('highscores', JSON.stringify(storage))
        
        window.location.href = 'highscores.html'
    })
}
