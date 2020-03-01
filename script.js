function compChoice() {
    const comp = Math.random();
    if (comp < 0.34) return "rock";
    if (comp >= 0.34 && comp < 0.67) return "scissors";
    return "paper"
}

function getResult(comp, player) {
    if (player == comp) return "Draw";
    if (player == 'rock') return (comp == 'paper') ? "KALAH" : "MENANG!";
    if (player == 'scissors') return (comp == 'rock') ? "KALAH" : "MENANG!";
    if (player == 'paper') return (comp == 'scissors') ? "KALAH" : "MENANG!";


}

function random() {

    const imgComputer = document.querySelector('.img-computer');
    const img = ['rock', 'paper', 'scissors'];
    let i = 0;
    const start = new Date().getTime();
    setInterval(function () {
        if (new Date().getTime() - start > 1000) {
            clearInterval;
            return
        }
        imgComputer.setAttribute('src', 'img/' + img[i++] + '-right.png');
        if (i == img.length) i = 0;
    }, 100);
}



const choice = document.querySelectorAll('.area-player div');
let playerScore = 0;
let compScore = 0;
let draw = 0
let round = 1
choice.forEach(function (pil) {
    console.log(pil);
    pil.addEventListener('click', function () {
        const comp = compChoice();
        const playerChoice = pil.className;
        const result = getResult(comp, playerChoice);
        random();

        setTimeout(function () {

            const imgComputer = document.querySelector('.img-computer');
            const imgPlayer = document.querySelector('.img-player');
            imgPlayer.setAttribute('src', 'img/' + playerChoice + '-left.png ');
            imgComputer.setAttribute('src', 'img/' + comp + '-right.png ');

            if (result == "MENANG!") playerScore += 1;
            if (result == "KALAH") compScore += 1;
            if (result == "Draw") draw += 1;
            console.log(playerScore);

            const scoreP = document.querySelector('.playerScore');
            const scoreC = document.querySelector('.compScore');
            const Draw = document.querySelector('.draw');
            const Round = document.querySelector('.round');
            scoreC.innerHTML = compScore;
            scoreP.innerHTML = playerScore;
            Draw.innerHTML = draw;
            Round.innerHTML = round += 1;

        }, 1000)
    })
})