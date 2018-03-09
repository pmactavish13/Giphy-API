behavior = ["Tail", "Window", "Smile", "Lazy", "Swim", "Play", "Bathe", "Sleep", "Stairs", "Eat", "Lick", "Treats", "Fetch"]
var dogGiphy = $.get("http://api.giphy.com/v1/gifs/search?q=dog+(Tail)&api_key=lN8bGeGk9m7SFABzGBkz44bTJrCWU1KH&limit=10");
xhr.done(function(data) { console.log("success got data", data); });

$(document).ready(function () {



for (var i=0; i < (behavior.length); i++) {
    var dogButtons = $("<button>" + (behavior[i]) + "</button>");
    dogButtons.addClass("giphys").val([i])//funnyGiphyAccessRoute[i]);
    dogButtons.css({
        "background": "rgb(20, 75, 20)", "margin-top": "7px", "margin-right": "5px", "font-size":
        "14px", "font-family": "'Merriweather', serif", "color": "rgb(255, 255, 222)",
        "border-radius": "8px", "padding": "6"
    });
    $("#dogButtons").append(dogButtons);
}
      
$(window).on("load", "button.dogButtons", function waitForInput() {    

});

});