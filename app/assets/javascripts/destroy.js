$('.ideas').delegate('#delete-idea', 'click', function() {
  var id = $(this).parent().attr('data-id')
  var theIdea = $(this).parent()

  $.ajax({
    type: "DELETE",
    url: 'api/v1/ideas.json',
    data: { id: id },
    success: function(id) {
      theIdea.remove()
    },
    error: function(xhr) {
      console.log(xhr.responseText)
    }
  })
})
