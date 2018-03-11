$(document).ready(function () {
// Global Variables
var animal = "dog";
var behavior = ["Tail", "Smile", "Lazy", "Swim", "Play", "Bathe", "Sleep", "Stairs", "Eat", "Lick", "Treats", "Fetch", "Car", "Cat"];
var giphy;

    // Make Buttons
    for (var j=0; j < (behavior.length); j++) {
        var dogButtons = $("<button>" + (behavior[j]) + "</button>");
        dogButtons.addClass("buttons").val(behavior[j]);
        dogButtons.css({
            "background": "rgb(20, 75, 20)", "margin-top": "7px", "margin-right": "5px", "font-size": "14px", "font-family": "'Merriweather', serif", "color": "rgb(255, 255, 222)", "border-radius": "8px", "padding": "6", "min-width": "85px"
        });
        $("#dogButtons").append(dogButtons);
    }; 
    
    // Activate button attributes and populate div with still images when clicked 
    $(document).on("click", "button.buttons", function loadGiphyStills() { 
    // clear div
    $("#giphys").empty();
    // set up info for query
    behaviorWanted= this.value;
    var queryURL = "https://api.giphy.com/v1/gifs/search?q=dog+" + behaviorWanted + "&api_key=lN8bGeGk9m7SFABzGBkz44bTJrCWU1KH&limit=10&fixed_height=200";
    // get info from url 
    $.ajax({
        url: queryURL,
        method: "GET"
    })
    // log response
    .then(function(response) {
        console.log(response);
        // show images on screen
        for (var i =0; i < (response.data.length); i++) {
            var giphy = $("<embed src=" + (response.data[i].images["fixed_height_still"]["url"]) + 
            " data-animate=" + (response.data[i].embed_url) + "  data-still=" + response.data[i].images["fixed_height_still"]["url"] + " data-state='still' Class='gifs'>");
            giphy.css({
                "margin-top": "10px", "margin-right": "8px", "margin-bottom": "-4px", "border-color": "rgb(255, 255, 222)", "border": "solid", "border-width": "3px", "width": "200px", "height": "160px"
            });
            // console.log(response.data[0].images["fixed_height_still"]["url"]);
            // console.log(response.data[i].embed_url);
            $("#giphys").append(giphy);
        };
    });
});

    // activate image attributes
    $("#giphys").on("click", "embed.gifs", function animateGiphy(){   
        var state = $(this).attr("data-state");
        // check to see if the image is animated or still
        if (state === "still") {
            //if still, animate by chaning the src url and the data state to animate
            $(this).attr("src", $(this).attr("data-animate"));
            $(this).attr("data-state", "animate");
            console.log("Why Won't")
        } else {
            // if animated, stil by changing the src url and the data state to still
            $(this).attr("src", $(this).attr("data-still"));
            $(this).attr("data-state", "still");
            console.log("This Work????")
        }
    });

    $("#giphys").on("clickUp", "embed.gifs", function activateAnimateGiphy(){
        if (state === "still") {
            console.log("I'm getting")
        } else {
            console.log("really FRUSTRATED") 
        }
    });

});
