// build quiz is from this tutorial: https://www.sitepoint.com/simple-javascript-quiz/

const quizContainer = document.getElementById('question');
const resultsContainer = document.getElementById('results');
const submitButton = document.getElementById('submit');
let results = [0, 0, 0, 0, 0, 0];
let answers = [];

window.onbeforeunload = function () {
    return "Data will be lost if you leave the page, are you sure?";
};

function buildQuiz() {
    shuffle(questions);  //randomize question order
    buildQuestion(0);
}


// taken from https://stackoverflow.com/questions/2450954/how-to-randomize-shuffle-a-javascript-array
function shuffle(array) {
    let currentIndex = array.length;

    // While there remain elements to shuffle...
    while (currentIndex !== 0) {

        // Pick a remaining element...
        let randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex--;

        // And swap it with the current element.
        [array[currentIndex], array[randomIndex]] = [
            array[randomIndex], array[currentIndex]];
    }
}

function buildQuestion(number) {
    let question = questions[number];
    const answers = [];
    const attributes = ["Charisma", "Intuition", "Logic", "Charm", "Performance", "Stealth"];
    const attIndex = attributes.indexOf(question.attribute);
    answers.push(`<span>Never</span>`);
    
    for (let value = 0; value < 6; value++) {
        let question_value = value 
        if (question.negative) {
            question_value = 5 - value;
        }
        let type = "large";
        if (value === 1 || value === 4) {
            type = "med";
        } else if (value === 2 || value === 3) {
            type = "small";
        }
        
        answers.push(
            `<label class="container ${type}"> 
  <input type="checkbox"  name="question${number}" value="${question_value}" data-att-index="${attIndex}">
  <span class="checkmark"></span>
    <div class="arc"></div>
    <div class="arc2"></div>
</label>`)
    }
    
    answers.push(`<span>Always</span>`);
    let result = `<div class="question" id="question${number}"> <b>${question.question}</b><br><br>
        <div class="answers"> ${answers.join('')}</div></div>`;
    
    if (number !== 0) {
        result += `<button class="button" onClick="back(${number})">Back</button>`;
    }
    quizContainer.innerHTML = result;

    const questionContainer = document.getElementById(`question${number}`);

    questionContainer.addEventListener("animationend", function (event) {
        if (event.animationName !== 'circleClicked') {
            return;
        }
        const checked = document.querySelectorAll(".question input[type=checkbox]:checked")[0];
        onClick(checked);
    });

}

function onClick(radioElement) {
    const currentNumber = parseInt(radioElement.name.substring(8)) + 1;
    const percent = (currentNumber) / 60;
    const attr = radioElement.dataset.attIndex
    const val = parseInt(radioElement.value)

    results[attr] += val;
    answers.push([attr, val])
    if (currentNumber < 60) {
        buildQuestion(currentNumber);
        updatePercent(percent);
    } else {
        showResults();
    }


}

function back(number) {
    let lastRes = answers.pop();
    const attr = lastRes[0];
    const val = lastRes[1];
    results[attr]-=val;
    buildQuestion(number-1);
    updatePercent((number-1)/60);
    
    
}

function updatePercent(percent) {
    document.getElementById('percent').innerHTML = `The Silver Key is ${Math.round(percent * 100)}% full.`
    document.getElementById('full-key').style.clipPath = `inset(${Math.round((1 - percent) * 100*.70+16)}% 0 0 0)`;
    document.getElementById('empty-key').style.clipPath = `inset(0 0 ${100-Math.round((1 - percent) * 100*.70+16)}% 0)`;
}

buildQuiz();

