var mainpage = document.getElementById ('mainpage')
mainpage.style.display = 'none'
var questionEle = document.getElementById("Questions")
var answer1 = document.getElementById ('option1')
var answer2 = document.getElementById ('option2')
var answer3 = document.getElementById ('option3')
var answer4 = document.getElementById ('option4')
var startbutton = document.getElementById('startbutton')
var cqno = 0
var questions = [
    {
        question:"What is HTML?",
        choices:["hypertext markup language","s","ss","xx"],
        answer:0
    }
]
startbutton.addEventListener("click",function(){
    mainpage.style.display = 'block'
    startbutton.style.display = 'none'
    displayQuestion ()
})

function displayQuestion (){
questionEle.textContent = questions[cqno].question
answer1.textContent = questions[cqno].choices[0]
answer2.textContent = questions[cqno].choices[1]
answer3.textContent = questions[cqno].choices[2]
answer4.textContent = questions[cqno].choices[3]
} 
function displayAnswers (){
    console.log(this.textContent)
}
answer1.addEventListener('click' , displayAnswers)
answer2.addEventListener('click' , displayAnswers)
answer3.addEventListener('click' , displayAnswers)
answer4.addEventListener('click' , displayAnswers)