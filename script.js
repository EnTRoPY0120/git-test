function GetComputerChoice(){
    let num = Math.floor(Math.random() * 10);
    if(num >= 0 && num <= 3){
        return 'rock';
    } else if(num>=4 && num >=7){
        return "paper";
    }
        else {
            return "scissors";
        }
}

let ScoreUser = 0;
let ScoreComputer = 0;
let flag
function PlayRound(PlayerSelection,ComputerSelection){
    let User = PlayerSelection.toLowerCase();
    let Computer = ComputerSelection.toLowerCase();
    if(User === Computer){
        flag = -1;
        // console.log("Sorry the match is tied");
        alert("Sorry the match is tied");
    }
    else if(User === 'rock' && Computer === 'scissors')
    {
        flag= 1;
        // console.log(`You win!!! ${user} beats ${computer}`);
        alert(`You win!!! ${User} beats ${Computer}`);

    } else if(User === 'scissors' && Computer === 'paper')
    {
        flag= 1;
        // console.log(`You win!!! ${user} beats ${computer}`);
        alert(`You win!!! ${User} beats ${Computer}`);
    }   
    else if(User === 'paper' && Computer === 'rock'){
        flag= 0;
        // console.log(`You win!!! ${user} beats ${computer}`);
        alert(`You win!!! ${User} beats ${Computer}`);
    }
    else {
        flag= 0;
        // console.log(`You lose!!!  ${computer} beats ${user}`);
        alert(`You lose!!!  ${Computer} beats ${User}`);
    }
}


function game(){
    for( i = 1 ; i <= 5 ; i++){
        const PlayerSelection = window.prompt("Enter Rock , Paper or Scissors ?","Rock");
        const ComputerSelection = GetComputerChoice();
        PlayRound(PlayerSelection,ComputerSelection);
        if(flag == -1){
        continue;
        }
        else if(flag == 0){
            ScoreComputer++;
        }
        else if(flag == 1){
            ScoreUser++;
        }
    }
}

function score(){
    if(ScoreUser > ScoreComputer){
        // console.log("user wins");
        alert("user wins");

    }
    else if(ScoreUser == ScoreComputer){
        // console.log("Score tied");
        alert("Score tied");

    }
    else {
        // console.log("computer wins");
        alert("Computer wins");

    }
}

game();
score();