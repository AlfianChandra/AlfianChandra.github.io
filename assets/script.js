$(document).ready(function(){
   $(".brand").fadeIn(5000);
   var home = $(".home");
   var info = $(".info");
   var bio = $(".bio");
   
   home.click(function(){
       $(".welcome").html("I hope you are enjoy the welcome!");
      //DisplayWrapper
      removeZindex();
      $(".big").removeClass("opacitor"); 
      $(".big2").removeClass("opacitor");
      $(".big").removeClass("full-width");
      $(".big2").removeClass("full-width");
      $(".info-wrap").fadeOut(1000);
      $(".bio-wrap").fadeOut(1000);
       
      $(".no1").removeClass("box-right-1");
      $(".no2").removeClass("box-right-2");
      $(".no3").removeClass("box-right-3");
      $(".big").removeClass("big-right1");
      $(".big2").removeClass("big-right2");
       
      //Reset Classes
      $(".no1").removeClass("box-right-1");
      $(".no2").removeClass("box-right-2");
      $(".no3").removeClass("box-right-3");
      $(".no1").removeClass("box-left-1");
      $(".no2").removeClass("box-left-2");
      $(".no3").removeClass("box-left-3");
      $(".big").removeClass("big-right1");
      $(".big2").removeClass("big-right2");
      $(".big").removeClass("big-left1");
      $(".big2").removeClass("big-left2");
       
      $(".mynav-menu").removeClass("btn-active");
      $(this).addClass("btn-active");
      $(".my-nav").removeClass("lean-right");
      $(".my-nav").removeClass("lean-left");
   });
   
   info.click(function(){
       $(".welcome").html("Viewing About me...");
      //Display Wrapper
      removeZindex();
      $(".info-wrap").fadeIn(1000); 
      $(".bio-wrap").fadeOut(1000); 
      
      $(".big").removeClass("opacitor"); 
      $(".big2").removeClass("opacitor");
      $(".big").removeClass("full-width");
      $(".big2").removeClass("full-width");
      $(".big").addClass("opacitor");
      $(".big").addClass("full-width");
       
      $(".big").addClass("big-left1");
      $(".big2").addClass("big-left2");
      $(".no1").addClass("box-left-1");
      $(".no2").addClass("box-left-2");
      $(".no3").addClass("box-left-3");
      
       
      $(".mynav-menu").removeClass("btn-active");
      $(this).addClass("btn-active");
      $(".my-nav").removeClass("lean-right");
      $(".my-nav").addClass("lean-left");
   });
   
   bio.click(function(){
       $(".welcome").html("Viewing My Contact...");
      //DisplayWrapper 
      removeZindex();
      $(".info-wrap").fadeOut(1000); 
      $(".bio-wrap").fadeIn(1000); 
      
      $(".big").removeClass("opacitor"); 
      $(".big2").removeClass("opacitor"); 
      $(".big").removeClass("full-width");
      $(".big2").removeClass("full-width");
      $(".big2").addClass("opacitor"); 
      $(".big2").addClass("full-width");
       
      $(".no1").removeClass("box-left-1");
      $(".no2").removeClass("box-left-2");
      $(".no3").removeClass("box-left-3");
      $(".big").removeClass("big-left1");
      $(".big2").removeClass("big-left2");
      
      $(".big").addClass("big-right1");
      $(".big2").addClass("big-right2");
      $(".no1").addClass("box-right-1");
      $(".no2").addClass("box-right-2");
      $(".no3").addClass("box-right-3");
      
      
      $(".mynav-menu").removeClass("btn-active");
      $(this).addClass("btn-active");
      $(".my-nav").removeClass("lean-left"); 
      $(".my-nav").addClass("lean-right"); 
   });
   
   function removeZindex()
   {
       $(".big").removeClass(".z-index");
       $(".big2").removeClass(".z-index");
   }
});