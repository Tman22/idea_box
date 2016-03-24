function thumbsUp() {
  $('.ideas').delegate('.thumbs-up', 'click', function() {
    var id = $(this).parent().attr('data-id')
    var quality = $(this).parent().find('.quality')

    if (quality.text() === "swill") {
      quality.text("plausible")
      updateQuality(quality.text(), id)
    } else if (quality.text() === "plausible") {
      quality.text("genius")
      updateQuality(quality.text(), id)
    } else if (quality.text() === "genius") {
      alert("Can't go any higher!")
    }
  })
}

function thumbsDown() {
  $('.ideas').delegate('.thumbs-down', 'click', function() {
    var id = $(this).parent().attr('data-id')
    var quality = $(this).parent().find('.quality')

    if (quality.text() === "genius") {
      quality.text("plausible")
      updateQuality(quality.text(), id)
    } else if (quality.text() === "plausible") {
      quality.text("swill")
      updateQuality(quality.text(), id)
    } else if (quality.text() === "swill") {
      alert("Can't go any Lower!")
    }
  })
}

function updateQuality(quality, id) {
  $.ajax({
    type: "PUT",
    url: "api/v1/ideas.json",
    data: {id: id, postParams: { quality: quality } },
    success: function() {
      console.log('Success')
    },
    error: function(xhr) {
      console.log(xhr.responseText)
    }
  })
}
