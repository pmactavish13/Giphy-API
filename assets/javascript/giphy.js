$(document).ready(function () {

    var animal = "dog";
    var behavior = ["Tail", "Smile", "Lazy", "Swim", "Play", "Bathe", "Sleep", "Stairs", "Eat", "Lick", "Treats", "Fetch", "Cat", "Car"];
    var yourClick;


    function postButtons() {
        // Make Buttons
        for (var j=0; j < (behavior.length); j++) {
            var dogButtons = $("<button>" + (behavior[j]) + "</button>");
            dogButtons.addClass("buttons").val(behavior[j]);
            dogButtons.css({
            "background": "rgb(20, 75, 20)", "margin-top": "7px", "margin-right": "5px", "font-size": "14px", "font-family": "'Merriweather', serif", "color": "rgb(255, 255, 222)", "border-radius": "8px", "padding": "6", "min-width": "85px" 
            });
            $("#dogButtons").append(dogButtons);
        };  
    }

    // Activate button attributes and populate div with still images when clicked   
    $(document).on("click", "button.buttons", function loadGiphyStills() { 
        // clear giphy and text input divs
        $("#giphys").empty();
        $("#yourChoice").empty();
        // set up info for query
        behaviorWanted= this.value;
        var queryURL = "https://api.giphy.com/v1/gifs/search?q=dog+" + behaviorWanted + "&api_key=lN8bGeGk9m7SFABzGBkz44bTJrCWU1KH&limit=10&fixed_height=200";
        // get info from url
        $.ajax({
            url: queryURL,
            method: "GET"
        })
        // response - promise
        .then(function(response) {
            // show still images
            for (var i =0; i < (response.data.length); i++) {
                // generate giphy image to be added to the screen
                var giphy = $("<embed src=" + (response.data[i].images["original_still"]["url"]) + 
                " data-animate=" + (response.data[i].images["original"]["url"]) + "  data-still=" + response.data[i].images["original_still"]["url"] + " data-state='still' Class='gifs'>");
                giphy.css({
                    "margin-right": "13px", "margin-bottom": "5px", "border-color": "rgb(255, 255, 222)", "border": "solid", "border-width": "3px", "width": "220px", "height": "160px", "float": "left", 
                });
                // generate giphy rating to be added to screen
                rating = (response.data[i].rating);
                var ratingBanner = $("<p>"+'Rated: ' + (response.data[i].rating) + "</p>");
                ratingBanner.css({
                    "float": "left", "font-size": "13px", "margin-top": "170px", "margin-bottom": "15px", "margin-left": "-155px",     
                }) 
                // add giphy still image and rating to the screen
                $("#giphys").append(giphy);
                $("#giphys").append(ratingBanner);    
            };
        });
    });

    // anamate-still images
    $("#giphys").on("click", "embed.gifs", function animateGiphy(){
        var state = $(this).attr("data-state");
        // check to see if the image is animated or still
        if (state === "still") {
            //if still, animate by chaning the src url and the data state to animate
            $(this).attr("src", $(this).attr("data-animate"));
            $(this).attr("data-state", "animate");
        } else {
            // if animated, stil by changing the src url and the data state to still
            $(this).attr("src", $(this).attr("data-still"));
            $(this).attr("data-state", "still");   
        };
        console.log(behaviorWanted);
    });

    // enable user to add a behavior button
    $("#otherBehaviors").submit(function(event){
        if ($.trim($("#yourChoice").val()) === "" || $.trim($("#yourChoice").val()) === "Enter Your Choice") {
            return false
        }
        event.preventDefault();
        var yourChoice = $("#yourChoice").val();
        behavior.push(yourChoice);
        $('input[name="behavior"]').val("")
        $("#dogButtons").empty();
        postButtons();
    });

    // call postButtons function to load the screen
    postButtons();
});
