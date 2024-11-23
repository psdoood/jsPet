
sleepiness = 5
fun = 5
hunger = 5
love = 5

function updateStats(){
    $("#sleep-lvl").text("Sleepy Level: " + sleepiness);
    $("#play-lvl").text("Fun Level: " + fun);
    $("#feed-lvl").text("Hunger Level: " + hunger);
    $("#pet-lvl").text("Love Level: " + love);
}

$("#feed").click(function(){
    if(hunger < 10){
        hunger++;
        updateStats();
    }
});

$("#play").click(function(){
    if(fun < 10){
        fun++;
        updateStats();
    }
});

$("#sleep").click(function(){
    if(sleepiness < 10){
        sleepiness++;
        updateStats();
    }
});

$("#pet").click(function(){
    if(love < 10){
        love++;
        updateStats();
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
    updateStats();
}, 1500);