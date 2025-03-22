let userScore = 0;
let compScore = 0;

const choices = document.querySelectorAll(".choice"); // sara div ko access kr skte h 
const msg = document.querySelector("#msg");

const userScorePara = document.querySelector("#user-score");
const compScorePara = document.querySelector("#comp-score");
const genComputerChoice = ()=> {
    const options = ["rock" , "paper", "scissors"];
    const randomIdx= Math.floor(Math.random()*3);
 // floor se tumhar decimal points hatata h, and math.random will give any random value inspite being a fucntion
 // and if we want to generate a number like 0-2 tak to hmko math.random ko *3 karna hoga 
   return options[randomIdx];
}

 const drawGame = () => {
    msg.innerText = "Draw!";
    msg.style.backgroundColor = "#081b31";
 }

 const showWinner = (userWin , choiceId , compChoice) => {
    if(userWin){
        userScore++;
        userScorePara.innerText = userScore;
        msg.innerText = `You win!  Your ${choiceId} beats ${compChoice}`;
        msg.style.backgroundColor = "green";
    }
    else{
        compScore++;
        compScorePara.innerText = compScore;
        msg.innerText = `You lose!  ${compChoice} beats  Your ${choiceId}`; 
        msg.style.backgroundColor = "red";
    }
 }
const playGame = (choiceId) => {
    console.log("user choice = ",choiceId)
    // generate computer choice
    const compChoice = genComputerChoice();
    console.log("comp choice = ", compChoice);
   
    if(choiceId===compChoice){
        drawGame();
    }
    else{
        let userWin = true;
        if(choiceId === "rock"){ // comp choice ya to scissor hoga ya phir paper
          userWin =  compChoice === "paper" ? false : true; // false -- when comp win as chose paper , true when user wins as chose scissor
          // if user give rock , and comp gives papaer , the comp win , isiliye userwin is false
          // lekin agr comp scissor diya then user wins
        } else if(choiceId === "paper") {
             // comp ya to rock ya phir scissor choose kiya hoga
           userWin = compChoice === "scissors" ? false : true;
        } else {
          userWin= compChoice === "rock" ? false : true; 
        }
         showWinner(userWin , choiceId , compChoice);
    }

 
}
choices.forEach((choice)=> { // sara choices se ek ek individual div nikalte h 
     // har ek individual choice wala div print ho rha
    choice.addEventListener("click" , ()=> { // har ek div k upar ek event ko add karege , which track our click
     const choiceId = choice.getAttribute("id");  // hmlog id ko bhi access kr lenge
        
        playGame(choiceId);
    });
})