// build quiz is from this tutorial: https://www.sitepoint.com/simple-javascript-quiz/

const quizContainer = document.getElementById('quiz');
const resultsContainer = document.getElementById('results');
const submitButton = document.getElementById('submit');
let results = [0,0,0,0,0,0];

window.onbeforeunload = function() {
  return "Data will be lost if you leave the page, are you sure?";
};

function buildQuiz() {
    // variable to store the HTML output
    const output = [];
    shuffle(questions);  //randomize question order
    // for each question...
    questions.forEach(
        (currentQuestion, questionNumber) => {

            // variable to store the list of possible answers
            const answers = [];
            const attributes = ["Charisma", "Intuition", "Logic","Charm", "Performance","Stealth"];
            const attIndex = attributes.indexOf(currentQuestion.attribute);
            // and for each available answer...
            const responses = ["Never", "Rarely", "Sometimes", "Often", "Almost always", "Always"];
            responses.forEach(
                (response, value) => {
                    if (currentQuestion.negative) {
                        value = 5 - value;
                    }
                    // ...add an HTML radio button
                    answers.push(
                        `<label>
            <input type="radio" name="question${questionNumber}" value="${value}" data-att-index="${attIndex}">
            ${response}
          </label>`
                    );
                });

            // add this question and its answers to the output
            output.push(
                `<div class="question" id="question${questionNumber}"> ${currentQuestion.question} </div>
        <div class="answers"> ${answers.join('')} </div>`
            );
        }
    );

    // finally combine our output list into one string of HTML and put it on the page
    quizContainer.innerHTML = output.join('');
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

buildQuiz();

