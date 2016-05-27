$(document).ready(function(){
//document ready, main wrapper

$('#attackMessage').hide();

function reset(){
	$('.hero').css('border', '');
	$('.boss').css('border', '');
	$('#attackMessage').delay(2000).fadeOut();
};

//Variables
var i = 0;
var capHealth = 1100;
var ironmanHealth = 950;
var deadpoolHealth = 850;
var ultronHealth1 = 1000;
var ultronHealth2 = 1000;
var ultronHealth3 = 1000;
$('#ultronbox1').html('Health: ' + ultronHealth1);
$('#ultronbox2').html('Health: ' + ultronHealth2);
$('#ultronbox3').html('Health: ' + ultronHealth3);
$('#capbox').html('Health: ' + capHealth);
$('#ironmanbox').html('Health: ' + ironmanHealth);
$('#deadpoolbox').html('Health: ' + deadpoolHealth);
$('.boss').on('mouseenter', function(){
		$(this).css('border', '3px solid red');
	});
$('.boss').on('mouseleave', function(){
		$(this).css('border', '');
	});
$('.hero').on('click', function(){
	$(this).css('border', '3px solid blue');
});

//Hero Attack Probabilities
function heroAttackSequence(){
	//Critical Hit Percentages
	capCrit =  Math.floor(Math.random()*100);
	ironmanCrit =  Math.floor(Math.random()*100);
	deadpoolCrit =  Math.floor(Math.random()*100);

	// Random Attack Values
	capAttack = Math.floor(Math.random()*(300-250+1)+250);
	ironmanAttack = Math.floor(Math.random()*(400-300+1)+300);
	deadpoolAttack = Math.floor(Math.random()*(300-200+1)+200);
	

	//Result of Crits
	if(capCrit <= 25){
		capAttack = Math.floor(capAttack + .25*capAttack);
	};

	if(ironmanCrit <= 20){
		ironmanAttack = Math.floor(ironmanAttack + .25*ironmanAttack);
	};

	if(deadpoolCrit <= 25){
		deadpoolAttack = Math.floor(deadpoolAttack + .25*deadpoolAttack);
	};
};

// Boss Attack Sequence
function bossAttackSequence(){

var heroes = ["cap", "ironman", "deadpool"];

var choice = heroes[Math.floor(Math.random()*3)];

var ultronAttack = Math.floor(Math.random()*(300-200+1)+200);

var ultronCrit = Math.floor(Math.random()*100);

if(ultronCrit <= 15){
		ultronAttack = Math.floor(ultronAttack + .25*ultronAttack);
	}



if(choice=="cap"){
	$('#attackMessage').show(1000, function(){
	$('#attackMessage').html('Ultron attacked Captain America for ' + ultronAttack + ' damage');
	reset();
	new Audio('laugh.mp3').play();
	capHealth = capHealth - ultronAttack;
	$('#capbox').html('Health: ' + capHealth);
	return;
	});
	
}

if(choice=="ironman"){
	$('#attackMessage').show(1000, function(){
	$('#attackMessage').html('Ultron attacked Ironman for ' + ultronAttack + ' damage');
	reset();
	new Audio('laugh.mp3').play();
	ironmanHealth = ironmanHealth - ultronAttack;
	$('#ironmanbox').html('Health: ' + ironmanHealth);
	return;
	});
	
}

if(choice=="deadpool"){
	$('#attackMessage').show(1000, function(){
	$('#attackMessage').html('Ultron attacked Deadpool for ' + ultronAttack + ' damage');
	reset();
	new Audio('laugh.mp3').play();
	deadpoolHealth = deadpoolHealth - ultronAttack;
	$('#deadpoolbox').html('Health: ' + deadpoolHealth);
	return;
	});
	
}

	if(ultronHealth1 <=0 && ultronHealth2 <=0 && ultronHealth3 <=0){location.replace('win.html');};
return;
};





//This should always be last
if(ultronHealth1 <=0 && ultronHealth2 <=0 && ultronHealth3 <=0){
	location.replace('win.html');
};
	

if($('#cap').onclick() && ($('.boss').onclick())){
		alert('attack!');
		//captainAmerica();
		reset();
		bossAttackSequence();
		return;
	}


else if($('#ironman').on('click')){
		//ironman();
	$('.boss').on('click', function(){
		reset();
		bossAttackSequence()
		return;
	});
}

else if($('#deadpool').on('click')){
		//deadpool();
	$('.boss').on('click', function(){
		reset();
		bossAttackSequence();
		return;
	});
};

});
//Document on ready ends here!

