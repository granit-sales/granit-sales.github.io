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

let index_leng = 0;
languigee();


$( "#leng_select" ).change(function() {  //function on the reaction in a change in the selector language 
	chage_languige();
	alert(index_leng);
	languigee();
});



	function chage_languige(){

		if ($("#leng_select option:selected").val()==="ENG")
			{
				index_leng = 0;

			}
			else if($("#leng_select option:selected").val()==="RUS")
				{
					index_leng = 1;
				}
				else if($("#leng_select option:selected").val()==="DEU")
					{
						index_leng = 2;
					}
					else if($("#leng_select option:selected").val()==="UKR")
						{
							index_leng = 3;
						}
							else
								{
									
								}		
	}




function languigee(){

$.getJSON("https://spreadsheets.google.com/feeds/list/1Rb6CCOrguhD55Bod1btbk76VDQ033RKbxGJjdt_bFuY/od6/public/values?alt=json", function(data){
	data = data['feed']['entry']
	console.log(data);
	chage_languige();
	show_menu(data);
})


	function show_menu(data){


		$('.title_2').html(data[index_leng]['gsx$title2']['$t']);

		$('.title_3').html(data[index_leng]['gsx$title3']['$t']);

		$('.title_4').html(data[index_leng]['gsx$title4']['$t']);

		$('.title_5').html(data[index_leng]['gsx$title5']['$t']);
		
		$('.title_6').html(data[index_leng]['gsx$title6']['$t']);

		$('.title_7').html(data[index_leng]['gsx$title7']['$t']);
		
		$('.title_8').html(data[index_leng]['gsx$title8']['$t']);
		
		$('.title_9').html(data[index_leng]['gsx$title9']['$t']);
		
		$('.title_10').html(data[index_leng]['gsx$title10']['$t']);
		
		$('.title_11').html(data[index_leng]['gsx$title11']['$t']);
		
		$('.title_12').html(data[index_leng]['gsx$title12']['$t']);
		
		$('.title_13').html(data[index_leng]['gsx$title13']['$t']);
		
		$('.title_14').html(data[index_leng]['gsx$title14']['$t']);
		
		$('.title_15').html(data[index_leng]['gsx$title15']['$t']);
				
		$('.title_16').html(data[index_leng]['gsx$title16']['$t']);
		
		$('.title_17').html(data[index_leng]['gsx$title17']['$t']);		
		
		$('.title_18').html(data[index_leng]['gsx$title18']['$t']);

		$('.title_19').html(data[index_leng]['gsx$title19']['$t']);

		$('.title_20').html(data[index_leng]['gsx$title20']['$t']);

		$('.title_25').html(data[index_leng]['gsx$title25']['$t']);

		$('.title_26').html(data[index_leng]['gsx$title26']['$t']);


				
	}
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






// fix demo gallery

// const gallery_boxes = $(".list-unstyled");

let gallery_boxes = document.getElementsByClassName('demo-gallery');


gallery_boxes.forEach(function(item, i, gallery_boxes) {
  console.log( i + ": " + item + " (массив:" + arr + ")" );
});


const options =
 {
	root: null,
	rootMargin: '0px',
	threshold: 0.1
}

function handle_galery(g_box, observer){
	g_box.forEach(my_g_box =>{
		console.log(my_g_box.intersectionRatio);
		if (my_g_box.intersectionRatio > 0) {
			plus_id(my_g_box.target);
		}
		else{
			minus_id(my_g_box.target);
		}
	})
}

function plus_id(){

}


function minus_id(){

}

const observer = new IntersectionObserver(handle_galery, options);

gallery_boxes.forEach(boxx =>{
	observer.observe(boxx);
})




});


