// add scripts

$(document).on('ready', function() {

  $('form').on('submit', function(event) {
    event.preventDefault();
    var toDo = $('input').val();
    $('#all-todos').prepend('<li><h2>'+toDo+
      '&nbsp;<button class="btn btn-danger btn-sm">X</button></h2></li>');
  });

//target the button with the x in it for a click event
  $('.container').on("click", ".btn-danger", function(event){
    //console.log("clicked!!");
    //when the target is clicked, remove the closest li
    $(event.target).closest('li').remove();
  });


});


