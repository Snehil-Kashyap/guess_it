var tryNumber = document.querySelector(".tries");
var result = document.querySelector(".result");
var guess = document.querySelector(".guess");
var submit = document.querySelector(".submit");

document.querySelector(".playbtn").addEventListener("click",start);

function start(){
    document.querySelector(".playbtn").innerHTML="Press To Restart";
    document.querySelector(".playbtn").addEventListener("click", () => {
        result.innerHTML = "";
        start();
        guess.value = "";
    })
    var tries = 10;
    const number = Math.floor(Math.random()*100)+1;
    console.log(number);
    tryNumber.innerHTML = "Guess the number between 1 to 100, You have 10 tries";
    submit.addEventListener("click", () => {
        Number(guess.value);
        if(Number(guess.value)<1 || Number(guess.value)>100 || isNaN(Number(guess.value))){
            result.innerHTML = "Please enter a number between 1 to 100";
        }
        else if(Number(guess.value)<number){
            tries=tries-1;
            if(tries==0){
                result.innerHTML = "You lose! The number was "+ number;
                start();
            }
            else{
                result.innerHTML="Your guess is lower";
                tryNumber.innerHTML="You have "+ tries + " tries left"
            }
        }
        else if(Number(guess.value)>number){
            if(tries==1){
                result.innerHTML = "You lose! The number was "+ number;
                start();
            }
      
            else{
                tries=tries-1;
                result.innerHTML="Your guess is higher";
                tryNumber.innerHTML="You have "+ tries + " tries left"
            }
        }
        else{
            result.innerHTML = "Hurray! You guessed it right"
        }
    })
}