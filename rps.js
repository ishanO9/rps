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

   let humChoice;
    let compchoice;


function playRound(humChoice,compchoice) //1:rock 2: paper 3: scissors
{


        const p  = document.createElement("p");
        //let result = document.createElement("div");
        
        let fresult = document.createElement("p");
        let res = document.querySelector(".result");
        let o = document.querySelector(".outcome");
        o.textContent = `Computer picked ${compchoice}!`;
        let scores = document.createElement("p");
        
        //div.append(p,scores);

        switch(humChoice)
            {
                case "rock":
                    switch(compchoice)
                    {
                        case "rock": o.textContent += `It is a Tie!`;
                            break;
                        case "paper": o.textContent += "You Lose!";
                            compscore+=1;
                            break;
                        case "scissors": o.textContent += "You Win!";
                            humanscore+=1;
                            break;
                    }
                    break;
    
                case "paper":
                    switch(compchoice)
                    {
                        case "rock": o.textContent += "You Win!";
                            humanscore+=1;
                            break;
                        case "paper": o.textContent += `It is a Tie!`;
                            break;
                        case "scissors": o.textContent += "You Lose!";
                            compscore+=1;
                            break;
                    }
                    break;
                
                case "scissors":
                    switch(compchoice)
                    {
                        case "paper": o.textContent += "You Win!";
                            humanscore+=1;
                            break;
                        case "scissors": o.textContent += `It is a Tie!`;
                            break;
                        case "rock": o.textContent += "You Lose!";
                            compscore+=1;
                            break;
                    }
                    break;
            }
    
        
        res.textContent = `Your score: ${humanscore} Computer score: ${compscore}`;
        //scores.textContent = `Your score: ${humanscore}\nComputer score: ${compscore}`;
        
        if(humanscore === 5)
        {
            fresult.textContent = `Winner: You!`;
            end.append(scores,fresult);
            return `GAME OVER`;
          
        } 
        else if(compscore === 5)
        {
            fresult.textContent = `Winner: Computer!`;
            end.append(scores,fresult);
            return 'GAME OVER';

        }    
    }

const body = document.querySelector("body");
const div = document.querySelector("div");
const end = document.querySelector(".end");
let buttons = document.querySelectorAll("button");
let button2 = document.createElement("button");

let gameover;

    buttons.forEach((button) => {
        button.addEventListener("click", () =>{
            console.log('click');
    
            humChoice = button.textContent.toLowerCase();
            compchoice = getComputerChoice();
        
            gameover = playRound(humChoice,compchoice);
            if(gameover === 'GAME OVER')
            {
                let gm = document.createElement("p");
                gm.textContent = gameover;
                button2.textContent = "Play Again?";
                end.append(gm,button2);
                deleteButtons();

            }
        }
    );
    }
);

function deleteButtons()
{
    buttons.forEach((button) =>{
        button.disabled = true;
    })
}

button2.addEventListener("click",()=>{
    
    location.reload();

});







