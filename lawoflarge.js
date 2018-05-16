window.onload = function() {
    fillTable(10);
}

function coinToss() {
    toss = Math.floor(Math.random() * 2);
    return toss;
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
    hcp = headCountPercent.toFixed(2);
    tcp = tailCountPercent.toFixed(2);

    if (tcp == hcp && headCount == tailCount) {
        return [headCount, "<b>"+hcp+"%</b>", tailCount, "<b>"+tcp+"%</b>"];
    }

    return [headCount, hcp+"%", tailCount, tcp+"%"];
}

function rerollBtn() {
    num = document.getElementById("baseNumber").value
    if (num > 10000) {
        alert("Maximum Base Number is 10000.");
    } else {
        fillTable(num);
    }
}

function fillTable(num) {
    currentRoll = lawOfLarges(num);
    document.getElementById("tosses1").innerHTML = num;
    document.getElementById("heads1").innerHTML = currentRoll[0] + " ("+currentRoll[1]+")";
    document.getElementById("tails1").innerHTML = currentRoll[2] + " ("+currentRoll[3]+")";
    currentRoll = lawOfLarges(num*10);
    document.getElementById("tosses2").innerHTML = num*10;
    document.getElementById("heads2").innerHTML = currentRoll[0] + " ("+currentRoll[1]+")";
    document.getElementById("tails2").innerHTML = currentRoll[2] + " ("+currentRoll[3]+")";    
    currentRoll = lawOfLarges(num*100);
    document.getElementById("tosses3").innerHTML = num*100;
    document.getElementById("heads3").innerHTML = currentRoll[0] + " ("+currentRoll[1]+")";
    document.getElementById("tails3").innerHTML = currentRoll[2] + " ("+currentRoll[3]+")";    
    currentRoll = lawOfLarges(num*1000);
    document.getElementById("tosses4").innerHTML = num*1000;
    document.getElementById("heads4").innerHTML = currentRoll[0] + " ("+currentRoll[1]+")";
    document.getElementById("tails4").innerHTML = currentRoll[2] + " ("+currentRoll[3]+")";    
    currentRoll = lawOfLarges(num*10000);
    document.getElementById("tosses5").innerHTML = num*10000;
    document.getElementById("heads5").innerHTML = currentRoll[0] + " ("+currentRoll[1]+")";
    document.getElementById("tails5").innerHTML = currentRoll[2] + " ("+currentRoll[3]+")";    
    currentRoll = lawOfLarges(num*10000);
    document.getElementById("tosses6").innerHTML = num*100000;
    document.getElementById("heads6").innerHTML = currentRoll[0] + " ("+currentRoll[1]+")";
    document.getElementById("tails6").innerHTML = currentRoll[2] + " ("+currentRoll[3]+")";    
}