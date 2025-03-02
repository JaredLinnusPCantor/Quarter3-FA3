var num1;
var num2;
var num3;
var nHi;
var pClass;
var time;
var hour;
var mins;

let alpha = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

function scanResults(){
    console.log("Testing");
    num1 = Math.round(Math.random()*21);
    num2 = Math.round(Math.random()*21);
    num3 = Math.round(Math.random()*21);

    numComp();
    letterGet();
    timeGet();

    replace.innerHTML = "Survey on which " + systemName.value + " consumers prefer";
    rand1.innerHTML = systemName.value + " 1: " + num1 + " votes";
    rand2.innerHTML = systemName.value + " 2: " + num2 + " votes";
    rand3.innerHTML = systemName.value + " 3: " + num3 + " votes";
    analysis.innerHTML = systemName.value + " with highest number of votes: " + nHi + "</br> The first option starts with letter: " + pClass + "</br> Total Time of Survey: " + time + " minutes (" + hour + ":" + mins + ")";
}

function numComp(){
    if(num1 == num2 && num2 == num3){
        nHi = systemName.value + " 1, 2 & 3 | " + num1 + " vote/s each";
    }else{
        if(num1 == num2 && num1 > num3){
            nHi = systemName.value + " 1 & 2 | " + num1 + " vote/s each";
        }else{
            if(num1 > num2){
                if(num1 > num3){
                    nHi = systemName.value + " 1 | " + num1 + " vote/s";
                }else{
                    if(num1 == num3){
                        nHi = systemName.value + " 1 & 3 | " + num3 + " vote/s each";
                    }else{
                    nHi = systemName.value + " 3 | " + num3 + " vote/s"; 
                    }
                }
            }else{
                if(num2 > num3){
                    nHi = systemName.value + " 2 | " + num2 + " vote/s";
                }else{
                    if(num2 == num3){
                        nHi = systemName.value + " 2 & 3 | " + num3 + " vote/s each";
                    }else{
                    nHi = systemName.value + " 3 | " + num3 + " vote/s"; 
                    }
                }
            }
        }
    }
}

function letterGet(){
    pClass = alpha.charAt(num1);
}

function timeGet(){
    time = num2*num3;
    hour = Math.floor(time/60);
    mins = time%60;
}