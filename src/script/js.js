$(document).ready(function(){var e="";document.getElementById("buttonnnn").onclick=function(){!function(){var n=$("#Language option:selected").val();e=n.toLowerCase(),alert(e)}()},$("#Language").change(function(){alert("Handler for .change() called.")}),$.getJSON("https://spreadsheets.google.com/feeds/list/1PvCDFWj4PmMAcP1oOX-TU8m-CG88cvFNNpa_R9sUdgE/od6/public/values?alt=json",function(n){n=n.feed.entry,console.log(n)});var n=!1,a=0;$(window).width();document.getElementById("position_button_menu").onclick=function(){!1===n?($(".button_menu").css("display","block"),$(".close_button_menu").css("display","none"),$(".open_menu_navigation").css("right","-600px"),0==a&&$(".menu_navigation").addClass("open_menu_navigation"),n=!0,a++):($(".open_menu_navigation").css("right","0px"),$(".button_menu").css("display","none"),$(".close_button_menu").css("display","block"),n=!1)},$(".js-button-campaign").click(function(){$(".js-overlay-campaign").fadeIn(),$(".js-overlay-campaign").addClass("disabled")}),$(".js-close-campaign").click(function(){$(".js-overlay-campaign").fadeOut()}),$(document).mouseup(function(n){var e=$(".js-popup-campaign");n.target!=e[0]&&0===e.has(n.target).length&&$(".js-overlay-campaign").fadeOut()})});