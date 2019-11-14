


var movieTitle = ["Goodfellas", "The Godfather", "Scarface", "Serpico", "Gladiator", "The Perfect Storm", "Field of Dreams", "Apollo 13"]

console.log(movieTitle);

var movieBtn;

var movieImage;

function createButtons() {

    $("#movie-btn-div").empty();

    for( i =0; i < movieTitle.length; i++) {

        var movieBtn = $("<button>");

        movieBtn.text(movieTitle[i]);

        movieBtn.attr("data-name", movieTitle[i]);

        movieBtn.addClass("btn btn-primary p-2 mr-3 mb-2 movie-btn");

        $("#movie-btn-div").append(movieBtn);

    }
}

createButtons();

$("buttons").on("click", function() {

var movie = $(this).attr("data-movie");
console.log(movie);

var queryUrl = "https://api.giphy.com/v1/gifs/search?q=" + movie + "&api_key=BkaUZZWcFij6J7AoQj3WtPb1R2p9O6V9&limit=10";

$.ajax ({
url: queryUrl,
method: "GET"
})

.then(function(response) {

    console.log(queryUrl);

    console.log(response);

    var results = response.data.title;

    for (var i = 0; i < results.length; index++) {
        if (results[i].rating !== "r" && results[i].rating !== "pg-13") {

        var movieDiv = $("<div>");

        var rating = results[i].rating;

        var p = $("<p>").text("Rating: " + results[i].rating);

        var movieImage = $("<img>");  

        movieImage.attr("src", results[i].images.fixed_height.url);

        movieDiv.append(p);
        movieDiv.append(movieImage);

        
        $("#gifs-appear-here").prepend(movieDiv);
        
        
        }
    };
});
});

