


var movieTitle = ["Goodfellas", "Godfather", "Scarface", "Serpico"];

console.log(movieTitle);

$()




$("buttons").on("click", function() {

var movie = $(this).attr(".data-movie");

var apiKey = "rEQLIlplmzy2aXN8Sbpmkr6qJGH2cc4d";

var queryUrl = "https://api.giphy.com/v1/gifs/search?q=" + movie + "&api_key=rEQLIlplmzy2aXN8Sbpmkr6qJGH2cc4d&limit=10";

$.ajax ({
url: queryUrl,
method: "GET"
})

.then(function(response) {

    console.log(queryUrl);

    console.log(response);

    var response = response.data;

    for (var i = 0; i < results.length; index++) {
        
        
    }





});






});

