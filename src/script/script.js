$(document).ready(function(){









	// work from languige
// var languige = "";


// document.getElementById('buttonnnn').onclick = function () {
// 	using_languige();
// };
// function using_languige() { //функкція визначення вибранної мови по натискненню на кнопку///
// 		var val = $("#Language option:selected").val();		
// 		languige = val.toLowerCase();	
// 		alert(languige);	
// };




// // change language

// $( "#Language" ).change(function() {  //function on the reaction in a change in the selector language 
//  alert( "Handler for .change() called." );
// });


// change language








// use google table
	$.getJSON("https://spreadsheets.google.com/feeds/list/1Rb6CCOrguhD55Bod1btbk76VDQ033RKbxGJjdt_bFuY/od6/public/values?alt=json", function(data){
		data = data['feed']['entry']
		console.log(data);
		show_menu(data);
	})


	function show_menu(data){
		
		
	}
// end use google table









// menu navigation

var indecator_opening = false;
var count_openes = 0;                   // прапорець індикатор що показує відкрите чи закрите меню ()///
var windows_width = $(window).width();



	

document.getElementById('position_button_menu').onclick = function () {                         //фенккція відкритт та закриття меню ()///
	
	
console.log("hiiii");
	if (indecator_opening===false)               //Якщо меню закрите то ми робимо це ()///
		{
			$(".button_menu").css("display", "block");            // Ховаэмо кнопку выдкриття меню ()///
			$(".close_button_menu").css('display', 'none'); // показуэмо кнопку закриття меню()///
			$(".open_menu_navigation").css("right", "-600px");

	

			if(count_openes==0)
					{
						$(".menu_navigation").addClass("open_menu_navigation"); // додяэмо клас з цсс властивостями до елементу меню що його відкрити()///
						$(".open_menu_navigation").css("right", "-600px");
					}
			indecator_opening = true; //записуємо що меню відкрите ()///

			count_openes++; // flag whot show what menu was in do

		}
		else //меню відкрите()///
			{
				$(".open_menu_navigation").css("right", "0px");  //видаляемо клас відкритого меню скриваємо меню()///
				$(".button_menu").css("display", "none"); //показуємо кнопку відкриття меню ()///
				$(".close_button_menu").css('display', 'block');//ховаємо кнопку приховання меню()///
				
			
				indecator_opening = false;//пишемо що меню закрите()///
			}
};

function adaptat (){
	if (windows_width<1126) {	
		$(".button_menu").css("display", "block");            // Ховаэмо кнопку выдкриття меню ()///
		$(".close_button_menu").css('display', 'none'); // показуэмо кнопку закриття меню()///
		$(".menu_navigation").addClass("open_menu_navigation"); // додяэмо клас з цсс властивостями до елементу меню що його відкрити()///
		$(".open_menu_navigation").css("right", "-600px");
		count_openes++;
		indecator_opening = true; 

	}
}

adaptat();



  
tree.onclick = function (event){
	console.log(event.target.tagName);


if (event.target.tagName !='SPAN') return;

let childrenContiner = event.target.parentNode.querySelector('ul');


}









});


