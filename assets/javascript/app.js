function stopTimer ( duration, display){
    
}


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
            alert("Better Luck Next Time")
        
        }
    }, 1000);
}

function startGame(){
    $('#button').on('click', function (event) {
        $("form").show();
    var oneMinute = 60,
        display = document.querySelector('#countDown');
    startTimer(oneMinute, display);
    })

}   

function endGame() {
    var q1answer = $('input[name="trivia-1"]:checked');
    if(q1answer.val()==="ute"){
        correct ++;
    }else {
        incorrect ++;
    }
}
startGame();