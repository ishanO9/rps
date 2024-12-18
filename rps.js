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
    
}
let rounds = 5;
/*function playGame(rounds)
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
}*/
   let humChoice;
    //let newhumchoice = humChoice.toLowerCase();
    let compchoice;
    //playRound(humChoice,compchoice);

function playRound(humChoice,compchoice) //1:rock 2: paper 3: scissors
{


        const p  = document.createElement("p");
        let result = document.createElement("div");
        let scores = document.createElement("p");
        let fresult = document.createElement("p");

        p.textContent = `Computer picked ${compchoice}!`;
        switch(humChoice)
            {
                case "rock":
                    switch(compchoice)
                    {
                        case "rock": result.textContent = `It is a Tie!`;
                            break;
                        case "paper": result.textContent = "You Lose!";
                            compscore+=1;
                            break;
                        case "scissors": result.textContent= "You Win!";
                            humanscore+=1;
                            break;
                    }
                    break;
    
                case "paper":
                    switch(compchoice)
                    {
                        case "rock": result.textContent= "You Win!";
                            humanscore+=1;
                            break;
                        case "paper": result.textContent = `It is a Tie!`;
                            break;
                        case "scissors": result.textContent = "You Lose!";
                            compscore+=1;
                            break;
                    }
                    break;
                
                case "scissors":
                    switch(compchoice)
                    {
                        case "paper": result.textContent= "You Win!";
                            humanscore+=1;
                            break;
                        case "scissors": result.textContent = `It is a Tie!`;
                            break;
                        case "rock": result.textContent = "You Lose!";
                            compscore+=1;
                            break;
                    }
                    break;
            }
    

        scores.textContent = `Your score: ${humanscore}\nComputer score: ${compscore}`;
        
        if(humanscore === 5)
        {
            fresult.textContent = `Final Score: You: ${humanscore}\nComputer: ${compscore}\nWinner: You!`;
            div.append(p,result,scores,fresult);
            return `GAME OVER`;
          
        } 
        else if(compscore === 5)
        {
            fresult.textContent = `Final Score: You: ${humanscore}\nComputer: ${compscore}\nWinner: Computer!`;
            div.append(p,result,scores,fresult);
            return 'GAME OVER';

        }
                
        div.append(p,result,scores,fresult);
        
    }
//playGame(rounds);



const body = document.querySelector("body");
const div = document.querySelector("div");
let buttons = document.querySelectorAll("button");
let button2 = document.createElement("button");



    buttons.forEach((button) => {
        button.addEventListener("click", (e) =>{
            console.log('click');
    
            humChoice = button.textContent.toLowerCase();
            compchoice = getComputerChoice();
        
            let gameover = playRound(humChoice,compchoice);
            if(gameover === 'GAME OVER')
            {
                let gm = document.createElement("p");
                gm.textContent = gameover;
                gameover = '';
                humanscore = 0;
                compscore = 0;
                button2.textContent = "Play Again?";
                div.append(gm,button2);
                
            }
        });
    }

);

button2.addEventListener("click",()=>{
    
    div.remove();

});







