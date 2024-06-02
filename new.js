const correct = document.querySelector("#correct");
    const incorrect = document.querySelector("#incorrect");
    const miss = document.querySelector("#miss");
    const progress = document.querySelector("progress");
    let letter;
    let timer;
    let delay = 100;
    document.querySelector("button").addEventListener("click",startGame)
    function startGame() {
        
        function randomLetter(){
        const alpha = "abcdefghijklmnopqrstuvwxyz";
        let value = Math.floor(Math.random() * alpha.length);
        letter = alpha[value];
        letter = letter.toUpperCase();
        console.log(letter);
        document.querySelector("#display").innerHTML = letter;
        
        }
    randomLetter();
    startTimer();
    document.body.addEventListener("keyup",(event)=>{
        let key = event.key.toUpperCase();
        console.log(key);
        if(letter == key){
            correct.innerHTML++;
            if(correct.innerHTML > 50){
                delay = 20;
            }
            else if(correct.innerHTML > 20){
                delay =50;
            }
            else if(correct.innerHTML > 10 ){
                delay =75;
            }
            startTimer();
        }
        else {
            incorrect.innerHTML++;
        }
        randomLetter();
    });
    function startTimer(){
        progress.value = 100;
        clearInterval(timer);
        timer = setInterval(function(){
            progress.value--;
            if(progress.value == 0){
                miss.innerHTML++;
                progress.value = 100;
                randomLetter();
            }
        },delay)
    }
    let Button = document.querySelector("button");
    if(Button.textContent == "Start Game") {
        console.log("hi");
        Button.style.visibility='hidden';
        delay = 100;
    }
    else {
        document.querySelector("#highest").innerHTML = correct.innerHTML;;
        correct.innerHTML = 0;
        incorrect.innerHTML = 0;
        miss.innerHTML = 0;
        ;
    }
    }
            