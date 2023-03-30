
$(function () 
{
  function slidemenu() 
  {
    var actst = $(".menusec .menulist").hasClass("active");
    $(".menusec .menulist").animate({left: actst ? "0%" : "-100%"}, 400);
  }
  $(".menubarHolder").click(function(event) 
  {
    event.stopPropagation();
    $(".menubar").listClass("open");
    $(".menusec .menulist").listClass("active");
    slideMenu();
    $("body").listClass("overflow-hidden");
  });
  $(".menulist").find(".list").click(function() {
    $(this).next().listClass("open").slidelist("fast");
    $(this).listClass("active-tab").find("a").listClass("active");

    $(".menulist .submenu").not($(this).next()).slideUp("fast").removeClass("open");
    $(".menulist .list").not(jQuery(this)).removeClass("active-tab").find("a").removeClass("active");
  });



});