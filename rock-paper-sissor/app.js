let userScore = 0;
let computerScore = 0;
const userScore_span = document.getElementById("user-score");
const computerScore_span = document.getElementById("computer-score");
const scoreBoard_div = document.querySelector(".score-board")
const result_p = document.querySelector(".result > p");
const rock_div = document.getElementById("r");
const paper_div = document.getElementById("p");
const scissors_div = document.getElementById("s");

function getComputerChoice(){
    const choices = ['r', 'p', 's'];
const randomNumber = Math.floor(Math.random()*3);
return choices[randomNumber]; 
}


function convertToWord(letter){
    if(letter === "r") return "Rock";
    if(letter === "p") return "Paper";
    return "Scissors";
}

function win(userChoice, computerChoice){
    userScore++;
    userScore_span.innerHTML= userScore;
    computerScore_span.innerHTML =  computerScore;
    const userChoice_div = document.getElementById(userChoice);
    const smallUserWord = "[user]".fontsize(3).sub();
    const smallCompWord = "[comp]".fontsize(3).sub();
    result_p.innerHTML=`${convertToWord(userChoice)}${smallUserWord} beats to ${convertToWord(computerChoice)}${smallCompWord}. You Win!❤️‍🔥`
    userChoice_div.classList.add('green-glow');
    setTimeout(() => userChoice_div.classList.remove('green-glow'), 300)
}

function loose(userChoice, computerChoice){
    computerScore++;
    userScore_span.innerHTML= userScore;
    computerScore_span.innerHTML =  computerScore;
    const userChoice_div = document.getElementById(userChoice);
    const smallUserWord = "[user]".fontsize(3).sub();
    const smallCompWord = "[comp]".fontsize(3).sub();
    result_p.innerHTML=`${convertToWord(userChoice)}${smallUserWord} looses to ${convertToWord(computerChoice)}${smallCompWord}. You LOST!🤧`
    userChoice_div.classList.add('red-glow');
    setTimeout(()=> userChoice_div.classList.remove('red-glow'), 300)
}

function draw(userChoice, computerChoice){
    const userChoice_div = document.getElementById(userChoice);
    const smallUserWord = "[user]".fontsize(3).sub();
    const smallCompWord = "[comp]".fontsize(3).sub();
    result_p.innerHTML=`${convertToWord(userChoice)}${smallUserWord} equals ${convertToWord(computerChoice)}${smallCompWord}. It's a DRAW!`
    userChoice_div.classList.add('grey-glow');
    setTimeout(()=> userChoice_div.classList.remove('grey-glow'), 300)
}
function game(userChoice){ 
    const computerChoice = getComputerChoice();
    switch(userChoice + computerChoice){
        case "rs":
        case "pr":
        case "sp":
        win(userChoice, computerChoice);
            break;
            case "sr":
            case "rp":
            case "ps":
                loose(userChoice, computerChoice);
                break;
                    case "rr":
                    case "pp":
                    case "ss":
                    draw(userChoice, computerChoice);
                    break;

    }
}

function main(){
    rock_div.addEventListener('click',()=> game('r'));
    paper_div.addEventListener('click',() => game('p'));
    scissors_div.addEventListener('click',() => game('s'));
    
}
main();


