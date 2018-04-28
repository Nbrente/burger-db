// Make sure we wait to attach our handlers until the DOM is fully loaded.
$(function () {
  $(".eat-burger").on("click", function (event) {
    var id = $(this).data("id");
    
    var newEatenState = {
      isEaten: 1
    };
    
    console.log('did a thing')
    // Send the PUT request.
    $.ajax("/api/burgers/" + id, {
      type: "PUT",
      data: [id]
    }).then(
      function () {
        // Reload the page to get the updated list
        location.reload();
      }
    );
  });

  $(".create-form").on("submit", function (event) {
    // Make sure to preventDefault on a submit event.
    event.preventDefault();

    var newBurger = {
      name: $("#ca").val().trim(),
    };

    if(newBurger.name.length > 0)
      // Send the POST request.
      $.ajax("/api/burgers", {
        type: "POST",
        data: newBurger
      }).then(
        function () {
          console.log("created new burger");
          // Reload the page to get the updated list
          location.reload();
        }
      );
  });
});
