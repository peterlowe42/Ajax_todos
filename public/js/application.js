$(document).ready(function() {
  $("#add_task").hide();
  $('button').click (function(e) {
    e.preventDefault();

    var url = $(this).parent().attr('action');

    $.ajax({
      url: url,
      method: 'delete'
    }).done(function(id){
       $("#" + id).remove();
    });
  });

  $('#new_task').click (function(e){
    e.preventDefault();
    $('#add_task').show();
    $("#new_task").hide();
  });

  $('#add_task').submit (function(e){
    e.preventDefault();
    $('#add_task').hide();
    $("#new_task").show();

    var data = $(this).serialize();

    $.ajax({
      url: "/",
      method: 'post',
      data: data
    }).done(function(partial){
      $("#todos").append(partial);

    });
  });
});
