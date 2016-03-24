function sortIdeas() {
  $('#sort').on('click', function() {
    var ideas = $('.idea')
    var sortedIdeas = ideas.sort(function(nextidea, idea) {
      var idea = $(idea)
      var nextidea = $(nextidea)
      idea = idea.find('.quality').text()
      nextidea = nextidea.find('.quality').text()
      return idea.localeCompare(nextidea)
    })
    var divs = $('.ideas').empty()
    divs.append( sortedIdeas )
  })
}
