// *************************** YOUR CODE BELOW *******************************
//******************TEST EARLY AND OFTEN USING console.log() ******************
//****************** SERIOUSLY TEST USING console.log()!!! ******************
/* global $ */

// let api_url="https://api.giphy.com/v1/gifs/search?q=puppy&rating=pg&api_key=dc6zaTOxFJmzC";
$("#search-button").click(function(){
    let value=$("#search-term").val();
    
  $.ajax({
        url: `https://api.giphy.com/v1/gifs/search?q=${value}&rating=pg&api_key=dc6zaTOxFJmzC`,
        method: "GET",
        success: function(response) {
            let number=Math.floor(Math.random()*response.data.length);
            console.log(number);
          $(".gallery").append(`<img src="${response.data[number].images.original.url}">`);
        }
        
    }); 
    $(".text-center").hide();
  
});

