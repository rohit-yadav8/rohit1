let userscore=0;
let comscore=0;
const choices=document.querySelectorAll(".choice");
const msg=document.querySelector("#msg");
const userscorepara =document.querySelector("#user-score");
const compscorepara =document.querySelector("#comp-score");
const restartGame = () => {
    userscore = 0;
    comscore = 0;
    userscorepara.innerText = userscore;
    compscorepara.innerText = comscore;
    msg.innerText = "Let's play again!";
    msg.style.backgroundColor = "black";
};
const gencompchoice = () =>
{
    const options=["rock","paper","scissors"];
    const randidx = Math.floor(Math.random() * 3);
    return options[randidx];
}
const drawgame = () =>{
    console.log("it's draw");
    msg.innerText="game draw ...paly again";
    msg.style.backgroundColor="blue";
}
const showwinner =(userwin,userchoice,compchoice) =>
{
     if(userwin){
        userscore++;
        
        userscorepara.innerText=userscore;
        console.log("you win");
        msg.innerText=`you win! your ${userchoice} beats ${compchoice}`;
        msg.style.backgroundColor="green";
   }
   else{
    comscore++;
    compscorepara.innerText=comscore;
    console.log("you loose");
    msg.innerText=`you loose! ${compchoice} beats ${userchoice}`;
    msg.style.backgroundColor="red";
   }
}
const playgame = (userchoice) => {
    console.log("user choice= ", userchoice);
    const compchoice = gencompchoice();
    console.log("comp choice= ", compchoice);
    if (userchoice === compchoice) {
        drawgame();
    } else {
        let userwin = true;
        if (userchoice === "rock") {
            userwin = compchoice === "paper" ? false : true;
        } else if (userchoice === "paper") {
            userwin = compchoice === "scissors" ? false : true;
        } else {
            userwin = compchoice === "rock" ? false : true;
        }
        showwinner(userwin, userchoice, compchoice);
        if (userscore === 3) {
            msg.innerText = "Congratulations! You won the game!";
            msg.style.backgroundColor = "green";
            setTimeout(restartGame, 2000); // Restart the game after 3 seconds
        } else if (comscore === 3) {
            msg.innerText = "Oops! Computer won the game!";
            msg.style.backgroundColor = "red";
            setTimeout(restartGame, 2000); // Restart the game after 3 seconds
        }
    }
};

choices.forEach(choice => {
    choice.addEventListener("click", () =>
{
    const userchoice = choice.getAttribute("id");
    console.log("choice was clicked", userchoice);
    playgame(userchoice);
});
});
