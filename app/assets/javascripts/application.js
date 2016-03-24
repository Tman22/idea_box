// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, vendor/assets/javascripts,
// or any plugin's vendor/assets/javascripts directory can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// compiled file.
//
// Read Sprockets README (https://github.com/rails/sprockets#sprockets-directives) for details
// about supported directives.
//
//= require jquery
//= require jquery_ujs
//= require_tree .


$(document).ready(function() {
  fetchIdeas()
  editIdea()
  updateIdea()
  thumbsUp()
  thumbsDown()
  searchIdeas()
})


function renderIdea(idea) {
  $('.ideas').prepend(
    "<div class='idea' data-id='" +
      idea.id +
      "'><p><h4>Title:</h4><br><span class='title'>" +
      idea.title +
      "</span></p>" +
      "</h6><p><h4>Body:</h4><br><span class='body'>" +
      idea.body +
      "</span></p>" +
      "</h6><p>Quality: <strong class='quality'>" +
      idea.quality +
      "</strong></p>" +
      "<button id='delete-idea' name='button-fetch' class='btn btn-default btn-xs'>Delete</button>" +
      "<button name='button-fetch' class='btn btn-default btn-xs thumbs-up'>Thumbs Up</button>" +
      "<button name='button-fetch' class='btn btn-default btn-xs thumbs-down'>Thumbs Down</button>" +
      "<button name='button-fetch' class='btn btn-default btn-xs editing'>Edit</button> " +
      "<br></div>"
  )
}

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


// function truncate(string) {
//   if (string.length > 100) {
//     var trimString = $.trim(string).substring(0, 100)
//     return trimString.split(' ').slice(0, -1).join(' ') + "..."
//   }
//   return string
// }

function fetchIdeas() {
  $.getJSON('/api/v1/ideas/', function(ideas){
    $.each(ideas, function(index, idea){
      renderIdea(idea)
    })
  })
}
