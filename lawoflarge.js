function lawOfLarge(num) {
    returnedToss = coinToss();
    if (returnedToss == 0) {
        document.getElementById("rollContainer").innerHTML += "Tails<br>";
    } else {
        document.getElementById("rollContainer").innerHTML += "Heads<br>";
    }
}

function coinToss() {
    toss = Math.floor(Math.random() * 2);
    return toss;
}