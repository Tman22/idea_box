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


  function renderIdea(idea) {
    $('.ideas').prepend(
      "<div class='idea' data-id='" +
        idea.id +
        "'><h6>Published on: " +
        idea.created_at +
        "</h6><p>Title: " +
        idea.title +
        "</p>" +
        "</h6><p>Body: " +
        idea.body +
        "</p>" +
        "</h6><p>Quality: " +
        idea.quality +
        "</p>" +
        "<button id='delete-idea' name='button-fetch' class='btn btn-default btn-xs'>Delete</button>" +
        "<button id='thumbs-up' name='button-fetch' class='btn btn-default btn-xs'>Thumbs Up</button>" +
        "<button id='thumbs-down' name='button-fetch' class='btn btn-default btn-xs'>Thumbs Down</button>" +
        "</div><br>"
    )
  }

  function fetchIdeas() {
    $.getJSON('/api/v1/ideas/', function(ideas){
      $.each(ideas, function(index, idea){
        renderIdea(idea)
      })
    })
  }

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
      },
      error: function(xhr) {
        console.log(xhr.responseText)
      }
    })
  }

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



})