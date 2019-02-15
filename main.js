(function($){
  $(function(){
    var nextScreen = document.getElementById("next-screen").innerHTML;
    var nextScreenTemplate = Handlebars.compile(nextScreen);

    var welcomeScreen = document.getElementById("welcome-screen").innerHTML;
    var welcomeScreenTemplate = Handlebars.compile(welcomeScreen);


    function displayWelcomeScreen(){
      $('.app').html(welcomeScreenTemplate());

      // Register event handler for the next button
      $('#next-button').on('click', function(e){
        e.preventDefault();
        displayNextScreen();
      });
    }

    // $.ajax('game/', {success: displayNextScreen});

    function displayNextScreen(){
      var context = {
        'name': 'Dan'
      };

      $('.app').html(nextScreenTemplate(context));

      $('#back-button').on('click', function(e){
        e.preventDefault();
        displayWelcomeScreen();
      })
    }

    // Run the program for the first time!
    displayWelcomeScreen();
  });
}(jQuery));