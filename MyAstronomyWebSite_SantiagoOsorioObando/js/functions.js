/*
Hecho por Santiago Osorio Obando
Todas las funciones en este archivo fueron creadas de cero, el template que descargado no traía funciones
*/

function suscribeToNewsPaper(){
	var adress = document.getElementById("emailAdress").value;
	for(var i = 0; i < adress.length; i++){
		if(adress.substring(i,i + 1) == "@"){
			document.getElementById("newspaperThanks").innerHTML = adress + " registered<br>" + "Thanks for subscribing to our newspaper!";
		}
	}
}
//Funciones de About us
function muskMessage(){
	document.getElementById("musk_sama").innerHTML = "I'm so great, aren't I?";
}
//Funciones de Gallery
function showImgInGallery(img){
	document.getElementById("bigImage").src = img;
}
//Funciones del Form de "Travelling with us"
function checkMail(){
	var adress = document.getElementById("emailForm").value;
	for(var i = 0; i < adress.length; i++){
		if(adress.substring(i,i + 1) == "@"){
			document.getElementById("emailBlur").style.color="green";
			document.getElementById("emailBlur").innerHTML = "Correct adress";
		}
	}
}
function checkPhoneNumber(){
	var num = String(document.getElementById("phoneNum").value);
	if(num.length == 10){
		document.getElementById("phoneBlur").style.color="green";
		document.getElementById("phoneBlur").innerHTML = "Correct number"
	}
}
//Función para enviar finalmente el form

function formSucces(){
	alert("Information submited! Our team will be in contact with you to speak about every doubt you have and to help you select your dream plan. Thank you!");
}
