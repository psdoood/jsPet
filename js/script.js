
sleepiness = 5
fun = 5
hunger = 5
love = 5

function updateStats(){
    $("#sleep").text("sleep: " + sleepiness);
    $("#play").text("play: " + fun);
    $("#feed").text("feed: " + hunger);
    $("#pet").text("pet: " + love);
}

$("#feed").click(function(){

});

$("#play").click(function(){

});

$("#sleep").click(function(){

});

$("#pet").click(function(){

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
}, 2000);