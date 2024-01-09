$(function(){
  $('#sign-up').on('click', function(e){
      $('.log-in').css('display', 'none');
      $('.sign-up').css('display', 'inline');
      e.preventDefault();
  });     
});
$(function(){
  $('#log-in').on('click', function(e){
      $('.sign-up').css('display', 'none');
      $('.log-in').css('display', 'inline');
      e.preventDefault();
  });     
});

document.getElementById("#sign-up").style.transition = "all 3s";