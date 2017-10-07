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
        $(".preloader").fadeIn(1000);
      },
      success:function(res)
      {
        $(".page").html(res);
        var t = 2;
        var inter = setInterval(function(){
          t--;
          if(t === 0)
          {
            $(".preloader").fadeOut(1000);
            clearInterval(inter);
          }
        },200);
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

