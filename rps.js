let humanscore = 0;
let compscore = 0; 
function getComputerChoice()
{
    let compchoice = Math.floor(Math.random() * 3) + 1;
    switch(compchoice)
    {
        case 1: compchoice = "rock";
        break;
        case 2: compchoice = "paper";
        break;
        case 3: compchoice = "scissors";
        break;
    }
    return compchoice;
}
function getHumanChoice()
{
    let userchoice =prompt("Enter your choice!: rock, paper, scissors");
    return userchoice;
}
let rounds = 5;
function playGame(rounds)
{
    for(let i = 0; i < rounds; i++)
    {
        let humChoice = getHumanChoice();
        let newhumchoice = humChoice.toLowerCase();
        let compchoice = getComputerChoice();
        console.log(newhumchoice);
        playRound(newhumchoice,compchoice);
    }
    console.log(`Final score: You:${humanscore}  Computer:${compscore}`);
    if(humanscore > compscore)
    {
        console.log("You win!");
    }
    else if(humanscore === compscore)
    {
        console.log("Its a tie!");
    }
    else
    {
        console.log("You lose!");
    }
}

function playRound(humChoice,compchoice) //1:rock 2: paper 3: scissors
{
    //console.log(humChoice.slice(0));
    //if(humChoice.slice(0) !== "rock" || humChoice.slice(0) !== "paper" || humChoice.slice(0) !== "scissors")
    //{
    //    console.log("Enter valid input");
    //}
    //else
    //{
    console.log("Computer picked " + compchoice + "!"); 
    switch(humChoice)
        {
            case "rock":
                switch(compchoice)
                {
                    case "rock": console.log("It is a tie!");
                        break;
                    case "paper": console.log("You Lose!");
                        compscore+=1;
                        break;
                    case "scissors": console.log("You Win!");
                        humanscore+=1;
                        break;
                }
                break;

            case "paper":
                switch(compchoice)
                {
                    case "rock": console.log("You Win!");
                        humanscore+=1;
                        break;
                    case "paper": console.log("It is a tie!");
                        break;
                    case "scissors": console.log("You Lose!");
                        compscore+=1;
                        break;
                }
                break;
            
            case "scissors":
                switch(compchoice)
                {
                    case "paper": console.log("You Win!");
                        humanscore+=1;
                        break;
                    case "scissors": console.log("It is a tie!");
                        break;
                    case "rock": console.log("You Lose!");
                        compscore+=1;
                        break;
                }
                break;
        }
    //}

    console.log("Your score: " + humanscore);
    console.log("Computer score: " + compscore);
    
}
 
playGame(rounds);

