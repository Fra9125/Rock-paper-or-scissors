function computerChoice(){
    let choices = ["Rock", "Paper", "Scissors"];
    let index = Math.floor(Math.random()*3)
    return choices[index];
}
function humanChoice() {
    const userChoices = ["Rock", "Paper", "Scissors"];
    let choice = prompt("What do you choose?")
    return choice;
}
let sceltaDelComputer = computerChoice().toLowerCase()
let sceltaDellUmano = humanChoice().toLowerCase()
function partita (sceltaDelComputer, sceltaDellUmano){
    if (sceltaDelComputer === sceltaDellUmano){
        console.log("DRAW!")
    }
    else if (sceltaDelComputer === "rock" && sceltaDellUmano === "scissors"||
             sceltaDelComputer === "paper" && sceltaDellUmano === "rock" ||
             sceltaDelComputer === "scissors" && sceltaDellUmano === "paper"){
                console.log("Computer wins!")
                }
    else {
        console.log("Human wins!")
    }
  
}
partita(sceltaDelComputer,sceltaDellUmano)
