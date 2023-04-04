
let cards = []
let sum = 0
let hasBlackjack=false
//console.log(sum)
let isAlive=false
let message=""



let messageEl=document.getElementById("message-el")
console.log(messageEl)

let sumEl=document.getElementById("sum-el")
//let sumEl=document.querySelector("#sum-el")
console.log(sumEl)

let cardEl=document.getElementById("card-el")


//CASH OUT
//console.log(hasBlackjack)
console.log(isAlive)
console.log(cards)


let player = {
    name: "anshika",
    chips: 145
}

let playerEl = document.getElementById("player-el")
playerEl.textContent = player.name + ": $" + player.chips

function getRandomcard(){
    let randomNumer= Math.floor(Math.random()*13)+1
    if (randomNumer > 10) {
        return 10
    } else if (randomNumer === 1) {
        return 11
    } else {
        return randomNumer
    }
}

function startgame(){
    isAlive=true
    let fcard= getRandomcard()
let scard= getRandomcard()
cards=[fcard,scard]
sum= fcard+scard
    rendergame()
}


function rendergame(){
    cardEl.textContent="Cards:"
    for(let i=0;i<cards.length;i++){
        cardEl.textContent += cards[i]+" "
    }

    sumEl.textContent = "Sum: " + sum

if (sum<21){
   //console.log("Do you want to draw a new card?") 
    message="Do you want to draw a new card?" 

}
else if(sum ==21){
    message="yaya! got the blackjack"
    hasBlackjack=true
}
else {
    message="you are out of the game"
    isAlive=false
}
//console.log(message)
messageEl.textContent=message
}

function newcard(){
    console.log("Drawing a new card from the deck!")
    if (isAlive === true && hasBlackjack === false) {
    let card=getRandomcard()
    sum=sum +card
    cards.push(card)
    rendergame()
    }
}