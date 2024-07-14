$(document).ready(function(){
    $(" .btn-search").click(function(){
      $(".search-box").css("visibility","visible");
    });
    $(" .btn-search").dblclick(function(){
      $(".search-box").css("visibility","hidden");
    });
  
  });