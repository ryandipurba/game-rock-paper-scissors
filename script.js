function compChoice() {
    const comp = Math.random();
    if (comp < 0.34) return "gajah";
    if (comp >= 0.34 && comp < 0.67) return "orang";
    return "semut"
}

function getResult(comp, player) {
    if (player == comp) return "Draw";
    if (player == 'gajah') return (comp == 'semut') ? "KALAH" : "MENANG!";
    if (player == 'orang') return (comp == 'gajah') ? "KALAH" : "MENANG!";
    if (player == 'semut') return (comp == 'orang') ? "KALAH" : "MENANG!";


}

function random() {

    const imgComputer = document.querySelector('.img-komputer');
    const img = ['gajah', 'semut', 'orang'];
    let i = 0;
    const start = new Date().getTime();
    setInterval(function () {
        if (new Date().getTime() - start > 1000) {
            clearInterval;
            return
        }
        imgComputer.setAttribute('src', 'img/' + img[i++] + '.png');
        if (i == img.length) i = 0;
    }, 100);
}


const choice = document.querySelectorAll('.area-player ul li img')
choice.forEach(function (pil) {
    let playerScore = 0;
    let compScore = 0;
    pil.addEventListener('click', function () {


        const comp = compChoice();
        const playerChoice = pil.className;
        const result = getResult(comp, playerChoice);
        random();

        setTimeout(function () {

            const imgComputer = document.querySelector('.img-komputer');
            imgComputer.setAttribute('src', 'img/' + comp + '.png ');

            if (result == "MENANG!") playerScore += 1;
            if (result == "KALAH") compScore += 1;
            console.log(playerScore);

            const info = document.querySelector('.info');
            const scoreP = document.querySelector('.playerScore');
            const scoreC = document.querySelector('.compScore');
            info.innerHTML = result;
            scoreC.innerHTML = compScore;
            scoreP.innerHTML = playerScore;
        }, 1000)
    })
})