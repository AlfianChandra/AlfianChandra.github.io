$(document).ready(function(){
  class City
  {
    loadcity(url,target)
    {
      $.ajax({
        url:url,
        type:"get",
        cache:false,
        async:true,
        success:function(res)
        {
          target.html(res);
        }
      });
    }

    loadto(url,target)
    {
      $.ajax({
        url:url,
        type:"get",
        cache:false,
        async:true,
        success:function(res)
        {
          $(target).html(res);
        }
      });
    }
  }

  //Create Object
  city = new City;
  //Init Cities
  city.loadcity("city/asset/kota.php",$('.city-init'));

  $('.city-init').change(function(){
    //Get Target
    var target = $(this).attr("city-target");

    //Get Value
    var value = $(this).val();
    var res = value.replace(/ /g, "");
    var tar = res.toLowerCase();

    //Create new attribute and set using value
    $(this).attr("city-url",value);
    //Loads cities//
    city.loadto("city/asset/kab/"+tar+".php",target);
  });
});
