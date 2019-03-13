$(document).ready(function(){
  
    $('#goTop').click(function(e){
      
      e.preventDefault();
      
      var target = $(e.currentTarget).attr('href');
      
      var offset = $(target).offset();
      
      //$(document).scrollTop(0);
      $('html, body').animate({scrollTop: offset.top});
      
    });
    
  });