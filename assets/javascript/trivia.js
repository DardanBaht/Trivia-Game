
// Hide the buttons so that they don't appear on the first page. 

$("#buttonTwo").hide();
$("#buttonThree").hide();
$("#buttonFour").hide();
$("#buttonFive").hide();
$("#buttonSix").hide();
$("#buttonSeven").hide();
$("#buttonEight").hide();
$("#buttonNine").hide();
$("#buttonTen").hide();
$("#buttonElev").hide();
$("#buttonTwel").hide();
$("#buttonRestart").hide();


 // Set how much time to start with, how many correct and incorrect answers there are, your total score, a variable for new questions(yet to be decided). 
        var time = 30;
        var yes = 0;
        var no = 0;
        var total = 0;
        var newQuestions;
        newQuestion = 0;

// Variables for all the questions, answers, and which is right and wrong. I tried to make the questions, answers, and which is correct and inccorect all part of the same variable but I could not figure out how to display each and have them show up on the screen. 
   

    var questions = [
     "Is LeBron the best player in the NBA?",
     "Did the Raptors win the 2019 NBA Finals?",
     "Did Kevin Durant win finals MVP?",
     "Did Kawhi Leonard win finals MVP?",
    "Did the Lakers make the playoffs in 2019?",
]

 var answerOne = ["True", "False"];

 var answerTwo = ["True", "False"];

 var answerThree = ["True", "False"];

 var answerFour = ["True", "False"];

 var answerFive = ["True", "False"];

    
// Hide the start button once it is clicked and begin to display all the questions and selections for the answers. 
    $("#buttonOne").on('click', function(){
    $(this).hide()
    start();
    moreQuestions();
    $("#buttonTwo").show();
    $("#buttonThree").show();
    $("#buttonFour").show();
    $("#buttonFive").show();
    $("#buttonSix").show();
    $("#buttonSeven").show();
    $("#buttonEight").show();
    $("#buttonNine").show();
    $("#buttonTen").show();
    $("#buttonElev").show();
    $("#buttonTwel").show();
    
});

// Once the start button is clicked, it dissapears and you are taken to a page with all the quesitons, timer, right/wrong, score. 

function start(){
    $("#timer").text("Time left: " + time);
    $("#correct").text("Correct Answers: " + yes)
    $("#wrong").text("Wrong Answers: " + no)
    $("#buttonTwel").show();

    time = 30
    yes = 0
    no = 0 
    total = 0


}
// Displaying the questions on the screen. I need to figure out how to randomly display them after the game is restarted. For loop that I tried did not work. 

function moreQuestions() {

 
    $("#qOne").text(questions[0]);
    $("#buttonTwo").text(answerOne[0]);
    $("#buttonThree").html(answerOne[1]);

    $("#qTwo").text(questions[1]);
    $("#buttonFour").text(answerOne[0]);
    $("#buttonFive").html(answerOne[1]);

    $("#qThree").text(questions[2]);
    $("#buttonSix").text(answerOne[0]);
    $("#buttonSeven").html(answerOne[1]);

    $("#qFour").text(questions[3]);
    $("#buttonEight").text(answerOne[0]);
    $("#buttonNine").html(answerOne[1]);
    
    $("#qFive").text(questions[4]);
    $("#buttonTen").text(answerOne[0]);
    $("#buttonElev").html(answerOne[1]);
  
}

$("#buttonTwo").on("click", function() {
    $("#buttonTwo").hide()
    $("#buttonThree").hide()
    $("#here").text("WAY TO GO!!")
    yes++
    $("#correct").text("Correct Answers: " + yes)
});

$("#buttonThree").on("click", function() {
    $("#buttonTwo").hide()
    $("#buttonThree").hide()
    $("#here").text("Sorry. Try the next one.")
    no++
    $("#wrong").text("Wrong answers: " + no)
    
});
// ----------------------------------------------------------------
$("#buttonFour").on("click", function() {
    $("#buttonFour").hide()
    $("#buttonFive").hide()
    $("#hereTwo").text("WAY TO GO!!")
    yes++
    $("#correct").text("Correct Answers: " + yes)
    
});

$("#buttonFive").on("click", function() {
    $("#buttonFour").hide()
    $("#buttonFive").hide()
    $("#hereTwo").text("Sorry. Try the next one.")
    no++
    $("#wrong").text("Wrong answers: " + no)

});

// ----------------------------------------------------------------

$("#buttonSix").on("click", function() {
    $("#buttonSix").hide()
    $("#buttonSeven").hide()
    $("#hereThree").text("Sorry. Try the next one.")
    no++
    $("#wrong").text("Wrong answers: " + no)
});

$("#buttonSeven").on("click", function() {
    $("#buttonSix").hide()
    $("#buttonSeven").hide()
    $("#hereThree").text("WAY TO GO!!")
    yes++
    $("#correct").text("Correct Answers: " + yes)
});

// ---------------------------------------------------------------------

$("#buttonEight").on("click", function() {
    $("#buttonEight").hide()
    $("#buttonNine").hide()
    $("#hereFour").text("WAY TO GO!!")
    yes++
    $("#correct").text("Correct Answers: " + yes)
});

$("#buttonNine").on("click", function() {
    $("#buttonEight").hide()
    $("#buttonNine").hide()
    $("#hereFour").text("Sorry. Try the next one.")
    no++
    $("#wrong").text("Wrong answers: " + no)
    
});

// ----------------------------------------------------------------------

$("#buttonTen").on("click", function() {
    $("#buttonTen").hide()
    $("#buttonElev").hide()
    $("#hereFive").text("Sorry. Try the next one.")
    no++
    $("#wrong").text("Wrong answers: " + no)
   
});

$("#buttonElev").on("click", function() {
    $("#buttonTen").hide()
    $("#buttonElev").hide()
    $("#hereFive").text("WAY TO GO!!")
    yes++
    $("#correct").text("Correct Answers: " + yes)
});

// -----------------------------------------------------------------

// I feel like I made my code longer and more complicated than it needed to be. I could probably figure out to hide and show elements using less code. This is the way I was working through it so I kept it like this. 


$("#buttonTwel").on("click", function(){

$("#buttonTwo").hide();
$("#buttonThree").hide();
$("#buttonFour").hide();
$("#buttonFive").hide();
$("#buttonSix").hide();
$("#buttonSeven").hide();
$("#buttonEight").hide();
$("#buttonNine").hide();
$("#buttonTen").hide();
$("#buttonElev").hide();
$("#buttonTwel").hide();

$("#qOne").hide();
$("#qTwo").hide();
$("#qThree").hide();
$("#qFour").hide();
$("#qFive").hide();

$("#hereOne").hide();
$("#hereTwo").hide();
$("#hereThree").hide();
$("#hereFour").hide();
$("#hereFive").hide();

$("#timer").hide();
$("#correct").hide();
$("#wrong").hide();

$("#total").text("Your total score was: " + yes/5);




$("buttonRestart").show();


});


   
    
    
