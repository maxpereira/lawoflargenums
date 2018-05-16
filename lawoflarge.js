window.onload = function() {
    fillTable();
}

function lawOfLarges(num) {
    var headCount = 0;
    var tailCount = 0;
    for (i = 0; i < num; i++) {
        returnedToss = coinToss();
        if (returnedToss == 0) {
            tailCount++;
        } else {
            headCount++;
        }
    }

    headCountPercent = (headCount/num)*100;
    tailCountPercent = (tailCount/num)*100;
    hcp = Math.round(headCountPercent*100)/100;
    tcp = Math.round(tailCountPercent*100)/100;

    return [headCount, hcp, tailCount, tcp];
}

function fillTable(num) {
    currentRoll = lawOfLarges(10);
    document.getElementById("heads10").innerHTML = currentRoll[0] + " ("+currentRoll[1]+"%)";
    document.getElementById("tails10").innerHTML = currentRoll[2] + " ("+currentRoll[3]+"%)";
    currentRoll = lawOfLarges(100);
    document.getElementById("heads100").innerHTML = currentRoll[0] + " ("+currentRoll[1]+"%)";
    document.getElementById("tails100").innerHTML = currentRoll[2] + " ("+currentRoll[3]+"%)";    
    currentRoll = lawOfLarges(1000);
    document.getElementById("heads1000").innerHTML = currentRoll[0] + " ("+currentRoll[1]+"%)";
    document.getElementById("tails1000").innerHTML = currentRoll[2] + " ("+currentRoll[3]+"%)";    
    currentRoll = lawOfLarges(10000);
    document.getElementById("heads10000").innerHTML = currentRoll[0] + " ("+currentRoll[1]+"%)";
    document.getElementById("tails10000").innerHTML = currentRoll[2] + " ("+currentRoll[3]+"%)";    
    currentRoll = lawOfLarges(100000);
    document.getElementById("heads100000").innerHTML = currentRoll[0] + " ("+currentRoll[1]+"%)";
    document.getElementById("tails100000").innerHTML = currentRoll[2] + " ("+currentRoll[3]+"%)";    
    currentRoll = lawOfLarges(1000000);
    document.getElementById("heads1000000").innerHTML = currentRoll[0] + " ("+currentRoll[1]+"%)";
    document.getElementById("tails1000000").innerHTML = currentRoll[2] + " ("+currentRoll[3]+"%)";    
}

function superRoll() {
    var headCount = 0;
    var tailCount = 0;
    var num = 1;
    for (i = 0; i < num; i++) {
        returnedToss = coinToss();
        if (returnedToss == 0) {
            tailCount++;
        } else {
            headCount++;
        }
        headCountPercent = (headCount/num)*100;
        tailCountPercent = (tailCount/num)*100;
        hcp = Math.round(headCountPercent*100)/100;
        tcp = Math.round(tailCountPercent*100)/100;
        if (hcp != "50.00" && tcp != "50.00") {
            num++;
        } else {
            alert(headCount);
        }
    }
}

function coinToss() {
    toss = Math.floor(Math.random() * 2);
    return toss;
}