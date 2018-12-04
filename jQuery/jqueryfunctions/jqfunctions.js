$(document).ready(function (){
   
    $( ".clickbutton" ).click(function() {
        alert( "Handler for .click() called." );
      });

      $( "#hideme" ).click(function() {
        $( "#pic" ).hide( "slow", function() {
          alert( "Bye Bye Johnny :(" );
        });

    });

    $( "#shower" ).click(function() {
        $( "#pic" ).show( "slow", function() {
            alert( "Johnny 5 is alive!" );
          });
      });


      $( "#push" ).click(function() {
        $( "p" ).toggle();
      });

      $( "#push2" ).click(function() {
        $( ".slidep" ).slideDown();
      });

      $( "#push3" ).click(function() {
        $( ".slidep" ).slideUp();
      });

      $( "#push4" ).click(function() {
        $( ".bark" ).slideToggle();
      });

      $( "#push5" ).click(function() {
        $( ".pic5" ).fadeIn();
      });

      $( "#push6" ).click(function() {
        $( ".pic5" ).fadeOut();
      });

      $( "#push7" ).click(function() {
        $( "#highlight" ).addClass("greentext");
      });

      $( "#push8" ).click(function() {
        $( "#beforep" ).before("<p>BARK BARK BARK!</p>");
      });

      $( "#push9" ).click(function() {
        $( "#beforep" ).after("<p>MEOW MEOW NOW!</p>");
      });

      $( "#push10" ).click(function() {
        $( "#appendp" ).append("<strong>HELLO!</strong>");
      });

      $( "#htmldiv" ).click(function() {
        var htmlString = $( this ).html();
        $( this ).text( htmlString );
      });
     

});

