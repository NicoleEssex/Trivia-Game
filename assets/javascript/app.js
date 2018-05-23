
var ansCrct = 0;
var ansWrng = 0;



//start timer function to be called when event listener on.click starts the game
function startTimer (duration, display){
    var timer = duration, seconds;
    setInterval(function() {
        // minutes = parseInt(timer / 60, 10)
        seconds = parseInt(timer % 30, 10);

        // minutes = minutes < 10 ? "0" + minutes : minutes;
        seconds = seconds < 10 ? "0" + seconds : seconds;

        display.textContent = seconds;

        if (--timer < -1) {
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
    var oneMinute = 30,
        display = document.querySelector('#countDown');
    startTimer(oneMinute, display);
    $(":radio[name=trivia]").change(function() {
        var userGuess1 = (this.value);
        console.log(userGuess1);
        if(userGuess1 === 'ute') {
            console.log('Correct');
            ansCrct++;
            console.log(ansCrct);
        }else {
            console.log('Wrong');
            ansWrng++;
            console.log(ansWrng);
        }
        $(":radio[name='trivia']:not(:checked)").attr("disabled", true);       
    });
    $(":radio[name=trivia1]").change(function() {
        var userGuess2 = (this.value);
        console.log(userGuess2);
        if(userGuess2 === 'cougar') {
            console.log('Correct');
            ansCrct++;
            console.log(ansCrct);
        }else {
            console.log('Wrong');
            ansWrng++;
            console.log(ansWrng);
        }
        $(":radio[name='trivia1']:not(:checked)").attr("disabled", true);       
    });
    $(":radio[name=trivia2]").change(function() {
        var userGuess3 = (this.value);
        console.log(userGuess3);
        if(userGuess3 === 'topaz') {
            console.log('Correct');
            ansCrct++;
            console.log(ansCrct);
        }else {
            console.log('Wrong');
            ansWrng++;
            console.log(ansWrng);
        }
        $(":radio[name='trivia2']:not(:checked)").attr("disabled", true); 
    });
    $(":radio[name=trivia3]").change(function() {
        var userGuess4 = (this.value);
        console.log(userGuess4);
        if(userGuess4 === 'coal') {
            console.log('Correct');
            ansCrct++;
            console.log(ansCrct);
        }else {
            console.log('Wrong');
            ansWrng++;
            console.log(ansWrng);
        }
        $(":radio[name='trivia3']:not(:checked)").attr("disabled", true); 
    });
    $(":radio[name=trivia4]").change(function() {
        var userGuess5 = (this.value);
        console.log(userGuess5);
        if(userGuess5 === 'kings') {
            console.log('Correct');
            ansCrct++;
            console.log(ansCrct);
        }else {
            console.log('Wrong');
            ansWrng++;
            console.log(ansWrng);
        }
        $(":radio[name='trivia4']:not(:checked)").attr("disabled", true); 
    });
    })

}
startGame();   
//TODO
//change alert to popup with option to play again.
// restart game function
    // reset ('form') to hidden;
    // reset timer to 30;
    // reset ansWrng variable and ansCrct variable to 0;



