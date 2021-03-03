 /////////////////////////////////////////////////////////////////////////////

 /////////////////////// Do not modify the below code ////////////////////////

 /////////////////////////////////////////////////////////////////////////////

 (function() {
     function buildQuiz() {
         // we'll need a place to store the HTML output
         const output = [];

         // for each question...
         myQuestions.forEach((currentQuestion, questionNumber) => {
             // we'll want to store the list of answer choices
             const answers = [];

             // and for each available answer...
             for (letter in currentQuestion.answers) {
                 // ...add an HTML radio button
                 answers.push(
                     `<label>
           <input type="radio" name="question${questionNumber}" value="${letter}">
           ${letter} :
           ${currentQuestion.answers[letter]}
         </label>`
                 );
             }

             // add this question and its answers to the output
             output.push(
                 `<div class="question"> ${currentQuestion.question} </div>
       <div class="answers"> ${answers.join("")} </div>`
             );
         });

         // finally combine our output list into one string of HTML and put it on the page
         quizContainer.innerHTML = output.join("");
     }

     function showResults() {
         // gather answer containers from our quiz
         const answerContainers = quizContainer.querySelectorAll(".answers");

         // keep track of user's answers
         let numCorrect = 0;

         // for each question...
         myQuestions.forEach((currentQuestion, questionNumber) => {
             // find selected answer
             const answerContainer = answerContainers[questionNumber];
             const selector = `input[name=question${questionNumber}]:checked`;
             const userAnswer = (answerContainer.querySelector(selector) || {}).value;

             // if answer is correct
             if (userAnswer === currentQuestion.correctAnswer) {
                 // add to the number of correct answers
                 numCorrect++;

                 // color the answers green
                 //answerContainers[questionNumber].style.color = "lightgreen";
             } else {
                 // if answer is wrong or blank
                 // color the answers red
                 answerContainers[questionNumber].style.color = "red";
             }
         });

         // show number of correct answers out of total
         resultsContainer.innerHTML = `${numCorrect} out of ${myQuestions.length}`;
     }

     const quizContainer = document.getElementById("quiz");
     const resultsContainer = document.getElementById("results");
     const submitButton = document.getElementById("submit");


     /////////////////////////////////////////////////////////////////////////////

     /////////////////////// Do not modify the above code ////////////////////////

     /////////////////////////////////////////////////////////////////////////////






     /////////////// Write the MCQ below in the exactly same described format ///////////////


     const myQuestions = [{
            question: "1. 101 <sub>4,800,000,023</sub> mod 35.", ///// Write the question inside double quotes
            answers: {
                a: "36", ///// Write the option 1 inside double quotes
                b: "9", ///// Write the option 2 inside double quotes
		c: "26", ///// Write the option 1 inside double quotes
                d: "17", ///// Write the option 2 inside double quotes
            },
            correctAnswer: "a" ///// Write the correct option inside double quotes
        },

    {
      question: "<img src='images/8.PNG'><br>Identify the location of Secondary electron detectorWhich among these is a generator of Z*13",  ///// Write the question inside double quotes
      answers: {
        a: "3", ///// Write the option 1 inside double quotes
        b: "4", ///// Write the option 2 inside double quotes
        c: "7",
	d: "2",
      },
      correctAnswer: "c"                ///// Write the correct option inside double quotes
    },


    {
      question: "The set of quadratic residues modulo 211 has cardinality of",  ///// Write the question inside double quotes
      answers: {
        a: "210", ///// Write the option 1 inside double quotes
        b: "106", ///// Write the option 2 inside double quotes
        c: "212",
	d: "105",
      },
      correctAnswer: "c"                ///// Write the correct option inside double quotes
    },


    {
      question: "4. N=90 then Ø(n) =? Where Ø(n) is the number of elements co-prime to ‘n’ [Ø(n) is also called Euler Totient function]",  ///// Write the question inside double quotes
      answers: {
        a: "8", ///// Write the option 1 inside double quotes
        b: "24", ///// Write the option 2 inside double quotes
        c: "48",
	d: "14",
      },
      correctAnswer: "c"                ///// Write the correct option inside double quotes
    },



			  
     ];




     /////////////////////////////////////////////////////////////////////////////

     /////////////////////// Do not modify the below code ////////////////////////

     /////////////////////////////////////////////////////////////////////////////


     // display quiz right away
     buildQuiz();

     // on submit, show results
     submitButton.addEventListener("click", showResults);
 })();


 /////////////////////////////////////////////////////////////////////////////

 /////////////////////// Do not modify the above code ////////////////////////

 /////////////////////////////////////////////////////////////////////////////
