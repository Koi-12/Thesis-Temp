$(document).ready(function(){
    $('.select-tab ul li').click(function(){
      $('.select-tab li').removeClass("active");
      $(this).addClass("active");
  });
  });

// Another Document for --active class ///

  $(document).ready(function(){
    $('.tracktab ul li').click(function(){
      $('.tracktab li').removeClass("activee");
      $(this).addClass("activee");
  });
  });