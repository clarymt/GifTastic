$(document).ready(function() {

var horrors = ["evil dead", "evil dead 2", "army of darkness", "ghost", "demon", "necronomicon", "haunting", "the exorcist", "hellraiser", "satan"]

function renderButtons() {
	$("#horror-buttons").empty();
	for (i = 0; i < horrors.length; i++) {
		$("#horror-buttons").append("<button class='btn btn-danger' data-movie='" + horrors[i] + "'>" + horrors[i] + "</button>");
		}
    }
    renderButtons();

var queryURL = "https://api.giphy.com/v1/gifs/search?q=" +
        horror + "&api_key=BkaUZZWcFij6J7AoQj3WtPb1R2p9O6V9&limit=10";

});