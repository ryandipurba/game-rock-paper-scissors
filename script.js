function compChoice() {
    const comp = Math.random();
    if (comp < 0.34) return "gajah";
    if (comp >= 0.34 && comp < 0.67) return "orang";
    return "semut"
}

function getResult(comp, player) {
    if (player == comp) return "Draw";
    if (player == 'gajah') return (comp == 'orang') ? "KALAH" : "MENANG!";
    if (player == 'orang') return (comp == 'gajah') ? "KALAH" : "MENANG!";
    if (player == 'semut') return (comp == 'orang') ? "KALAH" : "MENANG!";

}