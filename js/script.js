
$( document ).ready(function() {

  $('.cb-slideshow').hide()

  $("#typedLine").typed({
    strings: ["Welcome to...^500", "Vision Software^500"],
    typeSpeed: 100,
    callback: function(){
      console.log('typed js callback.');
      $('.cb-slideshow').show();
      $('.typed-cursor').hide();
      $("#typedLine").hide();
    }
  });


  $(".astext").on('click', function(){
    alert('Thanks for your submission. We will get back to you soon')
  })



});


/*
$("#instructionLabel").typed({
     strings: ["Welcome. Before you can make a booking",
     "You need to pass a simple coding test."],
     typeSpeed: 0,
     callback: function() {
         $('.typed-cursor').show();
           $('#submitQuizButton').show();
           console.log('running quiz from typed callback');
       runQuiz();
     }
    }
   );

   */
