const quizData = [{
    question: "What is the full form of Wi-Fi?",
    a: "Wireless focus",
    b: "Wired Fidelity",
    c: "wired focus",
    d: "Wireless fidelity",
    correct: "d",
},
{
    question: "Where is the Headquarters of the Indian Space Research Organisation (ISRO)??",
    a: "Bangalore",
    b: "Pune",
    c: "Lucknow",
    d: "Mumbai",
    correct: "a",
},
{
    question: "When was ISRO formed?",
    a: "15 August 1947",
    b: "15 August 1969",
    c: "15 August 1952",
    d: "15 August 1967",
    correct: "b",
},
{
    question: "What was ISRO known before 1969?",
    a: "ACROSS",
    b: "INCOSPAR",
    c: "DAE",
    d: "INSA",
    correct: "b",
}
];
let index = 0;
let correct = 0,
incorrect = 0,
total = quizData.length;
let questionBox = document.getElementById("questionBox");
let allInputs = document.querySelectorAll("input[type='radio']")
const loadQuestion = () => {
if (total === index) {
    return quizEnd()
}
reset()
const data = quizData[index]
questionBox.innerHTML = `${index + 1}) ${data.question}`
allInputs[0].nextElementSibling.innerText = data.a
allInputs[1].nextElementSibling.innerText = data.b
allInputs[2].nextElementSibling.innerText = data.c
allInputs[3].nextElementSibling.innerText = data.d
}

document.querySelector("#submit").addEventListener(
"click",
function() {
    const data = quizData[index]
    const ans = getAnswer()
    if (ans === data.correct) {
        correct++;
    } else {
        incorrect++;
    }
    index++;
    loadQuestion()
}
)

const getAnswer = () => {
let ans;
allInputs.forEach(
    (inputEl) => {
        if (inputEl.checked) {
            ans = inputEl.value;
        }
    }
)
return ans;
}

const reset = () => {
allInputs.forEach(
    (inputEl) => {
        inputEl.checked = false;
    }
)
}

const quizEnd = () => {
// console.log(document.getElementsByClassName("container"));
document.getElementsByClassName("container")[0].innerHTML = `
    <div class="col">
        <h3 class="w-100"> Hii, you've scored ${correct} / ${total} </h3>
    </div>
`
}
loadQuestion(index);