$(document).ready(function() {
    $('#preloader').hide();
    $('#homePage').show();

    $("#cardPostit").on("click", function () {
        window.open("https://shielded-brushlands-80704.herokuapp.com/");
    });
    $("#cardPokemon").on("click", function () {
        window.open("https://jaysunhong.github.io/pokemon_rock-paper-scissors/");
    });
    $("#cardRentployment").on("click", function () {
        window.open("https://lakegapo.github.io/rentployment/");
    });
    $("#cardHangman").on("click", function () {
        window.open("https://jaysunhong.github.io/Hangman-Game/");
    });
    $("#cardAlgorithmers").on("click", function () {
        window.open("https://jaysunhong.github.io/algorithmers/");
    });
    $("#cardSuperheroTrivia").on("click", function () {
        window.open("https://jaysunhong.github.io/Superhero-TriviaGame/");
    });

    $("#tabAbout").on("click", function (event) {
        event.preventDefault();
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    });
    $("#tabProjects").on("click", function (event) {
        event.preventDefault();
        window.scrollTo({
            top: 700,
            behavior: "smooth"
        });
    });
    $("#tabSkills").on("click", function (event) {
        event.preventDefault();
        window.scrollTo({
            top: 1790,
            behavior: "smooth"
        });
    });
});