function editIdea() {
  $('.ideas').delegate('.editing', 'click', function() {
    var id = $(this).parent().attr('data-id')
    var button = $(this)
    $(this).parent().find('span').attr('contentEditable', true)
    // debugger
    button.text('Save')
    button.toggleClass('editing saving')
  })
}


function updateIdea()  {
  $('.ideas').delegate('.saving', 'click', function() {
  $(this).parent().find('span').attr('contentEditable', false)
  var id = $(this).parent().attr('data-id')
  var body = $(this).parent().find('.body').text()
  var title = $(this).parent().find('.title').text()
  var button = $(this)
  $.ajax({
    type: "PUT",
    url: 'api/v1/ideas.json',
    data: { id: id, postParams: { title: title,
        body: body }  },
    success: function() {
      console.log('Success!')
      button.toggleClass('editing saving')
      button.text('Edit')
    },
    error: function(xhr) {
      console.log(xhr.responseText)
    }
  })
})
}
