
var ansCrct = 0;
var ansWrng = 0;
// var timer = duration, minutes, seconds;

//start timer function to be called when event listener on.click starts the game
function startTimer (duration, display){
    var timer = duration, minutes, seconds;
    setInterval(function() {
        minutes = parseInt(timer / 60, 10)
        seconds = parseInt(timer % 60, 10);

        minutes = minutes < 10 ? "0" + minutes : minutes;
        seconds = seconds < 10 ? "0" + seconds : seconds;

        display.textContent = minutes + ":" + seconds;

        if (--timer < 0) {
            timer = duration;
            alert("Better Luck Next Time" 
            + " Answers Correct:" + ansCrct + 
            " Answers Wrong:" + ansWrng);
        
        }
    }, 1000);
}

function startGame(){
    $('#play').on('click', function (event) {
        $("form").show();
    var oneMinute = 60,
        display = document.querySelector('#countDown');
    startTimer(oneMinute, display);
    })

}   

//When time is up store user answer selection in question variables. Compare checked radio with correct value. Increase correct answer variable or increase wong answer variable with if/else statements.
function endGame() {
    var q1answer = $('input[name="trivia-3"]:checked');
    if(q1answer == "ute"){
        ansCrct++;
        console.log(ansCrct);
    }else {
        ansWrng++;
    }
    var q2answer = $('input[name="trivia-2"]:checked');
    if(q2answer.val() == "cougar"){
         console.log(q2answer.val());
    }else {
        ansWrng++;
    }
    var q3answer = $('input[name="trivia-3"]:checked');
    if(q3answer.val() === "topaz"){
        ansCrct++;  
    }else {
        ansWrng++;
    }
    var q4answer = $('input[name="trivia-4"]:checked');
    if(q4answer.val() === "coal"){
        ansCrct++;
    }else {
        ansWrng++;
    }
    var q5answer = $('input[name="trivia-5"]:checked');
    if(q5answer.val() === "kings") {
        ansCrct++;
    } else {
        ansWrng++;
    }
     
}
startGame();
endGame();
// restart game function
    // reset ('form') to hidden;
    // reset timer to 1:00;
    // reset ansWrng varibale and ansCrct variable to 0;



