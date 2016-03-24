function searchIdeas() {
  $('#search').on('keydown', function() {
  var word = this.value.toLowerCase()
  var ideas = $('.idea')

  ideas.each(function (index, idea) {
    var idea = $(idea)
    var ideaName = idea.find('.title').text().toLowerCase()

      if (ideaName.startsWith(word)){
        idea.show()
      } else {
        idea.hide()
      }
    })
  })
}
