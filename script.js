const fighters =['RICARDO ABREU','Papy Abedi','Juan Adam', 'Conor mcgregor','khabib Nurmagomedov'];
const ranks =['10','20','30','40','50','60','70','80','90','100'];

const Card1Element = document.getElementById('card1');
const Card2Element= document.getElementById('card2');
const WinnerElement =document.getElementById('winner');
const trumpfighterElement =document.getElementById('trumpFighter');

function getRandomCard() {
    const fighter = fighters[Math.floor(Math.random() * fighters.length)];
    const rank = ranks[Math.floor(Math.random() * ranks.length)];
return {fighter, rank};
}

function getWinner(card1, card2, trumpfighters) {
if (card1.fighter == trumpfighters && card2.fighter !== trumpfighters) return 1;
if (card2.fighter == trumpfighters && card1.fighter !== trumpfighters) return 2;
if (ranks.indexOf(card1.rank)> ranks.indexOf(card2.rank)) return 1;
if (ranks.indexOf(card2.rank)> ranks.indexOf(card1.rank)) return 2;
return 0;
}

function dealCards() {
const trumpfighter = fighters[Math.floor(Math.random()* fighters.length)];
trumpfighterElement.innerHTML= `Trump fighter; ${trumpfighter}`;

const card1 = getRandomCard();
const card2 = getRandomCard();

Card1Element.innerHTML = `${card1.rank} of ${card1.fighter}`;
Card2Element.innerHTML = `${card2.rank} of ${card2.fighter}`;

const winner = getWinner(card1,card2,trumpfighter);

if (winner == 1) {
WinnerElement.innerHTML = "fighter 1 wins!";
}else if (winner == 2) {
WinnerElement.innerHTML = "fighter 2 wins!";
}else {
    WinnerElement.innerHTML = "its a tie!"
}

}
//intitlaize
dealCards();