$(document).ready(function() {

var horrors = ["evil dead", "evil dead 2", "army of darkness", "ghost", "demon", "necronomicon", "haunting", "the exorcist", "hellraiser", "satan", "your pretty face is going to hell", "are you afraid of the dark", "beetlejuice", "saw", "the toxic avenger", "killer clowns from outer space", "alien", "halloween"]

function renderButtons() {
	$("#horror-buttons").empty();
	for (i = 0; i < horrors.length; i++) {
		$("#horror-buttons").append("<button class='btn btn-danger' data-horror='" + horrors[i] + "'>" + horrors[i] + "</button>");
		}
    }
    renderButtons();

    $("button").on("click", function() {
        // Grabbing and storing the data-animal property value from the button
        var horrors = $(this).attr("data-horror");
  
        // Constructing a queryURL using the animal name
        var queryURL = "https://api.giphy.com/v1/gifs/search?q=" +
          horrors + "&api_key=aNKEB7vfbBsZhY4hJXxNB21jU16vOjYk&limit=10";
  
        // Performing an AJAX request with the queryURL
        $.ajax({
          url: queryURL,
          method: "GET"
        })
          // After data comes back from the request
          .then(function(response) {
            console.log(queryURL);
  
            console.log(response);
            // storing the data from the AJAX request in the results variable
            var results = response.data;
  
            // Looping through each result item
            for (var i = 0; i < results.length; i++) {
  
              // Creating and storing a div tag
              var horrorDiv = $("<div>");
  
              // Creating a paragraph tag with the result item's rating
              var p = $("<p>").text("Rating: " + results[i].rating);
  
              // Creating and storing an image tag
              var horrorImage = $("<img>");
              // Setting the src attribute of the image to a property pulled off the result item
              horrorImage.attr("src", results[i].images.fixed_height.url);
  
              // Appending the paragraph and image tag to the animalDiv
              horrorDiv.append(p);
              horrorDiv.append(horrorImage);
  
              // Prependng the animalDiv to the HTML page in the "#gifs-appear-here" div
              $("#horrors").prepend(horrorDiv);
            }

             // This function handles events where one button is clicked
      $("#add-horror").on("click", function(event) {
        // Preventing the buttons default behavior when clicked (which is submitting a form)
        event.preventDefault();
        // This line grabs the input from the textbox
        var horror = $("#horror-input").val().trim();

        // Adding the movie from the textbox to our array
        horrors.push(horror);

        // Calling renderButtons which handles the processing of our movie array
        renderButtons();

      });

          });
      });
});