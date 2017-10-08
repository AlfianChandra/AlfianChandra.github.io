$(document).ready(function(){  
  var sr = ScrollReveal();
  sr.reveal(".rev",{
    origin:"top",
    duration:2000,
    scale:0.5
  });
    
  function switchPage(url)
  {
    $.ajax({
      url:url,
      type:"get",
      cache:false,
      async:true,
      beforeSend:function()
      {
        $(".preloader").slideDown(1000);
      },
      success:function(res)
      {
        $(".page").html("");
        var t = 5;
        var inter = setInterval(function(){
          t--;
          if(t === 2)
          {
            $(".page").html(res);
          }
          if(t === 0)
          {
            $(".preloader").slideUp(1000);
            $(".page").html(res);
            location = "#top";
            clearInterval(inter);
          }
        },1000);
      }
    });
  }
  
  $(window).load(function(){
    switchPage("home.html");
  });
  
  $(".page-switch").click(function(){
    var page = $(this).attr("target-to");
    switchPage(page);
  });
});
