//Funzione che crea la scelta del computer
function computerChoice(){
    let choices = ["rock", "paper", "scissors"];
    let index = Math.floor(Math.random()*3)
    return choices[index];
}
//Funzione per la scelta del giocatore
function humanChoice() {
    const userChoices = ["rock", "paper", "scissors"];
    let choice = prompt("What do you choose?")
    return choice;
}
//Funzione per lo svolgimento del singolo round
function round (computerCho, humanCho){
    if (computerCho === humanCho){
        console.log("DRAW!")
    }
    else if (computerCho === "rock" && humanCho === "scissors"||
             computerCho === "paper" && humanCho === "rock" ||
             computerCho === "scissors" && humanCho === "paper"){
                console.log("Computer wins!")
                computerScore++
                }
    else {
        console.log("Human wins!")
        humanScore++
    }
  
}


//Dichiarazione variabili globali
let humanScore = 0
let computerScore = 0
//Funzione partita
function partita(){
    while (true){
        let question = prompt("You wanna play?")
        if (question.toLowerCase() === "yes"){
            let sceltaDelComputer = computerChoice().toLowerCase()
            let sceltaDellUmano = humanChoice().toLowerCase()
            //stampa delle scelte
            console.log("Your choice is: " + sceltaDellUmano)
            console.log("Meanwhile the computer chose: " + sceltaDelComputer)
            round(sceltaDelComputer, sceltaDellUmano)
                        //stampa dei punteggi
            console.log("Computer points: " +computerScore)
            console.log("Human points: " + humanScore)     
        }
        else {
            console.log("Game is over!")
            console.log(`The final results are: ${humanScore} for you and ${computerScore} for the computer!`)
            break
        }
    }

}
partita()
