// BACK END //
function Places(place, location, landmarks, timeofYear, notes) {
  this.place = place;
  this.placeLocation = location;
  this.landmarks = landmarks;
  this.timeofYear = timeofYear;
  this.notes = notes;
}

// FRONT END //
$(function() {
  $("form#new-place").submit(function(event) {
    event.preventDefault();

    var inputtedPlace = $("#place-name").val();
    var inputtedLocation = $("#location").val();
    var inputtedLandmarks = $("#landmarks").val();
    var inputtedTimeofYear = $("#time-of-year").val();
    var inputtedNotes = $("#notes").val();

    var newPlace = new Places(inputtedPlace, inputtedLocation, inputtedLandmarks, inputtedTimeofYear, inputtedNotes);

    $("ul#places").append("<li><span class='place'>" + newPlace.place + "</span></li>");

    $(".place").last().click(function() {
      $("#show-places").show();
      $(".landmarks").text(newPlace.landmarks);
      $(".time-of-year").text(newPlace.timeofYear);
      $(".location").text(newPlace.placeLocation);
      $(".notes").text(newPlace.notes);
    });
  });
});
