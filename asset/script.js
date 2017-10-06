$(document).ready(function(){
  var sr = ScrollReveal();
  sr.reveal(".rev",{
    origin:"top",
    duration:2000,
    scale:0.5
  });
  
  function switchPage(url)
  {
    $(".page").fadeOut(1000);
    $.ajax({
      url:url,
      type:"get",
      cache:false,
      async:true,
      success:function(res)
      {
        var t = 2;
        var inter = setInterval(function(){
          t--;
          if(t === 0)
          {
            $(".page").fadeIn(1000);
            $(".page").html(res);
            
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

