
sleepiness = 5
fun = 5
hunger = 5
love = 5

function updatePet(buttonClicked){
    $("#sleep-lvl").text("Sleepy Level: " + sleepiness);
    $("#play-lvl").text("Fun Level: " + fun);
    $("#feed-lvl").text("Hunger Level: " + hunger);
    $("#pet-lvl").text("Love Level: " + love);

    lowestStat = Math.min(sleepiness, fun, hunger, love);
    avgStat = (sleepiness + fun + hunger + love) / 4

    if(avgStat == 0){
        $("#pet-face").text("(ｘ＿ｘ)");
    }
    else if(avgStat <= 2){
        $("#pet-face").text("(╥﹏╥)");
    }
    else if(avgStat <= 4){
        if(lowestStat == sleepiness){
            $("#pet-face").text("(－_－) zzZ");
        }
        else if(lowestStat == fun){
            $("#pet-face").text("╮(￣_￣)╭");
        }
        else if(lowestStat == hunger){
            $("#pet-face").text("(￣o￣)");
        }
        else{
            $("#pet-face").text("(. _ .)");
        }
    }
    else if(avgStat <= 6){
        $("#pet-face").text("(◕‿◕)");
    }
    else if(avgStat <= 7){
        $("#pet-face").text("٩(◕‿◕｡)۶");
    }
    else{
        $("#pet-face").text("＼(⁀ᗢ⁀)/");
    }

    plusOne(buttonClicked);    
}

function plusOne(buttonClicked){
    $("#" + buttonClicked).text(buttonClicked + " + 1");
    setTimeout(function(){$("#" + buttonClicked).text(buttonClicked)}, 500);
}

$("#feed").click(function(){
    if(hunger < 10){
        hunger++;
        updatePet("feed");
    }
});

$("#play").click(function(){
    if(fun < 10){
        fun++;
        updatePet("play");
    }
});

$("#sleep").click(function(){
    if(sleepiness < 10){
        sleepiness++;
        updatePet("sleep");
    }
});

$("#pet").click(function(){
    if(love < 10){
        love++;
        updatePet("pet");
    }
});

setInterval(function(){
    if(sleepiness > 0){
        sleepiness--
    }
    if(fun > 0){
        fun--
    }
    if(hunger > 0){
        hunger--
    }
    if(love > 0){
        love--
    }
    updatePet();
}, 2500);
