$('#create').on('click', function() {
  var postParams = {
      title: $('#idea-title').val(),
      body: $('#idea-body').val(),
      quality: $('#idea-quality').val()
  }
  createIdea(postParams)
})


function createIdea(postParams) {
  $.ajax ({
    type: "POST",
    url: "api/v1/ideas.json",
    data: { postParams },
    success: function(newIdea) {
      renderIdea(newIdea)
      $('#idea-title').val('')
      $('#idea-body').val('')
    },
    error: function(xhr) {
      console.log(xhr.responseText)
    }
  })
}
