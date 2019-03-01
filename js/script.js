// *************************** YOUR CODE BELOW *******************************
//******************TEST EARLY AND OFTEN USING console.log() ******************
//****************** SERIOUSLY TEST USING console.log()!!! ******************
/* global $ */
let api_url="https://api.giphy.com/v1/gifs/search?q=puppy&rating=pg&api_key=dc6zaTOxFJmzC";
$("#search-button").click(function(){
    
  
  
  
});

$.ajax({
        url: api_url,
        method: "GET",
        success: function(response) {
          $("body").append(`<img src="${response.data[0].images.original.url}">`);
        }
        
    }); 