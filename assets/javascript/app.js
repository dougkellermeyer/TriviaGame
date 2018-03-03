$(document).ready(function () {
    //Need a function to store questions, the quiz, results/answers and the submit button
    var letter = ["a", "b", "c"];
    const quizContainer = document.getElementById('quiz');
    const resultsContainer = document.getElementById('results');
    const submitButton = document.getElementById('submit');

    function runQuiz() {
        //Create an empty array to store HTML output
        const output = [];
        const gameQuestions = [
            {
                question: "What was the first video game ever made?",
                answers: {
                    a: "Snake",
                    b: "Pong",
                    c: "Brick Breaker"
                },
                correctAnswer: "b"
            },
            {
                question: "What was the first RPG game ever made?",
                answers: {
                    a: "Dungeons & Dragons",
                    b: "Adventure",
                    c: "RuneQuest"
                },
                correctAnswer: "a"

            },
            {
                question: "What was the first FPS game ever made?",
                answers: {
                    a: "Doom",
                    b: "Wolfenstein",
                    c: "Half-Life"
                },
                correctAnswer: "b"

            },
            {
                question: "What was the first video game console ever made?",
                answers: {
                    a: "Fairchild Channel F",
                    b: "Atari 2600",
                    c: "Magnavox Odyssey"
                },
                correctAnswer: "c"

            },
            {
                question: "What was the first multiplayer/networked video game ever made?",
                answers: {
                    a: "STAR",
                    b: "CAVE",
                    c: "Spectre"
                },
                correctAnswer: "c"

            },
        ]
        gameQuestions.forEach(
            (currentQuestion, questionNumber) => {
                //store the list of possible answers
                const answers = [];

                //Use jQuery to create an HTML radio buttton 
                answers.push(   
                    `<label>
                      <input type="radio" name="question${questionNumber}" value="${letter}">
                      ${letter} :
                      ${currentQuestion.answers[letter]}
                    </label>`
                );


                output.push(
                    `<div class="question"> ${currentQuestion.question} </div> 
            <div class="answers"> ${answers.join('')} </div><br><br>`
                );
            quizContainer.innerHTML = output.join('');
            })
    }

    runQuiz();
    //Have a function to show the answers/results of the quiz
    function showResults() { }

    submitButton.addEventListener('click', showResults);



});

// //need to run through the possible answer choices
// for (var i = 0; i < questions.length; i++) {
//     //reset array so we can push answers to it
//     answers = [];

//     for (letter in questions[i].answers) {

//         answers.push(
//             '<label>'
//             + '<input type="radio" name="question' + i + '" value="' + letter + '">'
//             + letter + ': '
//             + questions[i].answers[letter]
//             + '</label>'
//         );
//     }

//     output.push(
//         '<div class="question">' + questions[i].question + '</div>'
//         + '<div class="answers">' + answers.join('') + '</div>'
//     );
// }

