$(document).ready(function () {

var animal = "dog";
var behavior = ["Tail", "Window", "Smile", "Lazy", "Swim", "Play", "Bathe", "Sleep", "Stairs", "Eat", "Lick", "Treats", "Fetch"];
var giphy;
//for (var i=0; i < (animal.length); i++) {
    for (var j=0; j < (behavior.length); j++) {
        var dogButtons = $("<button>" + (behavior[j]) + "</button>");
        dogButtons.addClass("buttons").val(behavior[j]);
        dogButtons.css({
        "background": "rgb(20, 75, 20)", "margin-top": "7px", "margin-right": "5px", "font-size": "14px", "font-family": "'Merriweather', serif", "color": "rgb(255, 255, 222)", "border-radius": "8px", "padding": "6", "min-width": "85px"
        });
        $("#dogButtons").append(dogButtons);
    }; 
//};    
  
$(document).on("click", "button.buttons", function loadGiphyStills() { 
//    if ((this.value) !== behaviorWanted) {
    $("#giphys").empty();
    behaviorWanted= this.value;
    var queryURL = "https://api.giphy.com/v1/gifs/search?q=dog+" + behaviorWanted + "&api_key=lN8bGeGk9m7SFABzGBkz44bTJrCWU1KH&limit=10&fixed_height=200";
     
    $.ajax({
        url: queryURL,
        method: "GET"
    }).then(function(response) {
        console.log(response);
  
        for (var i =0; i < (response.data.length); i++) {
            var giphy = $("<embed src=" + (response.data[i].images["fixed_height_still"]["url"]) + 
            " data-animate=" + (response.data[i].embed_url) + "  data-still=" + response.data[i].images["fixed_height_still"]["url"] + " data-state='still' Class='gifs'>");
            giphy.css({
                "margin-right": "8px", "margin-bottom": "5px", "border-color": "rgb(255, 255, 222)", "border": "solid", "border-width": "3px", "width": "200px", "height": "160px"
                });
            // console.log(response.data[0].images["fixed_height_still"]["url"]);
            // console.log(response.data[i].embed_url);
            $("#giphys").append(giphy);
        };
    });
});


$("#giphys").on("click", "embed.gifs", function animateGiphy(){
    var state = $(this).attr("data-state");
      // If the clicked image's state is still, update its src attribute to what its data-animate value is.
      // Then, set the image's data-state to animate
      // Else set src to the data-still value
      if (state === "still") {
        $(this).attr("src", $(this).attr("data-animate"));
        $(this).attr("data-state", "animate");
        // (this).css({
        //     "width": "500px", "height": "350px"
        // })
        console.log("HI")
      } else {
        $(this).attr("src", $(this).attr("data-still"));
        $(this).attr("data-state", "still");
        console.log("THERE")
        // giphy.css({
        //     "width": "200px", "height": "160px"
        // })
      }
});

$("#giphys").on("clickUp", "embed.gifs", function activateAnimateGiphy(){
    console.log("HI")
      // If the clicked image's state is still, update its src attribute to what its data-animate value is.
      // Then, set the image's data-state to animate
      // Else set src to the data-still value
      if (state === "still") {
          console.log("if state still")
        // giphy.css({
        // "width": "75%", "height": "60%"
        // })
      } else {
        console.log("if state active") 
        // giphy.css({
        // "width": "200px", "height": "160px"
        // })
      }
});

});
