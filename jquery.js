$(document).ready(function(){
//document ready, main wrapper

$('#attackMessage').hide();

function reset(){
	$('.hero').css('border', '');
	$('.boss').css('border', '');
	$('#attackMessage').delay(2000).fadeOut();
};

//Variables
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



// Boss Attack Sequence
function bossAttackSequence(){

$(document).ready(function(){

var heroes = ["cap", "ironman", "deadpool"];

var choice = heroes[Math.floor(Math.random()*3)];

var ultronAttack = Math.floor(Math.random()*(300-200+1)+200);

var ultronCrit = Math.floor(Math.random()*100);

if(ultronCrit <= 15){
		ultronAttack = Math.floor(ultronAttack + .25*ultronAttack);
	}



if(choice=="cap"){
	$('#attackMessage').show(1500, function(){
	$('#attackMessage').html('Ultron attacked Captain America for ' + ultronAttack + ' damage');
	reset();
	new Audio('laugh.mp3').play();
	capHealth = capHealth - ultronAttack;
	$('#capbox').html('Health: ' + capHealth);
	return;
	});
	
}

if(choice=="ironman"){
	$('#attackMessage').show(1500, function(){
	$('#attackMessage').html('Ultron attacked Ironman for ' + ultronAttack + ' damage');
	reset();
	new Audio('laugh.mp3').play();
	ironmanHealth = ironmanHealth - ultronAttack;
	$('#ironmanbox').html('Health: ' + ironmanHealth);
	return;
	});
	
}

if(choice=="deadpool"){
	$('#attackMessage').show(1500, function(){
	$('#attackMessage').html('Ultron attacked Deadpool for ' + ultronAttack + ' damage');
	reset();
	new Audio('laugh.mp3').play();
	deadpoolHealth = deadpoolHealth - ultronAttack;
	$('#deadpoolbox').html('Health: ' + deadpoolHealth);
	return;
	});
	
}

	if(ultronHealth1 <=0 && ultronHealth2 <=0 && ultronHealth3 <=0){location.replace('win.html');};

});

};




//Hero MainAttack Sequence
function heroAttackSequence(){

	//Critical Hit Percentages
	var capCrit =  Math.floor(Math.random()*100);
	var ironmanCrit =  Math.floor(Math.random()*100);
	var deadpoolCrit =  Math.floor(Math.random()*100);

	// Random Attack Values
	var capAttack = Math.floor(Math.random()*(300-250+1)+250);
	var ironmanAttack = Math.floor(Math.random()*(400-300+1)+300);
	var deadpoolAttack = Math.floor(Math.random()*(300-200+1)+200);
	

	// Result of Crits
	if(capCrit <= 25){
		capAttack = Math.floor(capAttack + .25*capAttack);
	}

	if(ironmanCrit <= 20){
		ironmanAttack = Math.floor(ironmanAttack + .25*ironmanAttack);
	}

	if(deadpoolCrit <= 25){
		deadpoolAttack = Math.floor(deadpoolAttack + .25*deadpoolAttack);
	}

	// Cap Attack Sequence
	$('#cap').on('click', function(){
	$(this).css('border', '3px solid blue');
	
	$('.boss').on('mouseenter', function(){
		$(this).css('border', '3px solid red');
	});
	
	$('.boss').on('mouseleave', function(){
		$(this).css('border', '');
	});

	$('#ultron1').on('click', function(){
		
		$('#attackMessage').show();
		$('#attackMessage').html('Captain America attacked for ' + capAttack + ' damage');
		reset();
		new Audio('shieldslash.mp3').play();
		ultronHealth1 = ultronHealth1 - capAttack;
		$('#ultronbox1').html('Health: ' + ultronHealth1);
		if(ultronHealth1 <= 0){
			$('#ultron1').remove();
			$('#ultronbox1').remove();
			$('#healthBoss1').remove();
			new Audio('impossible.mp3').play();
		};
		if(ultronHealth1 <=0 && ultronHealth2 <=0 && ultronHealth3 <=0){location.replace('win.html');};
		return;
		
		
	});

	$('#ultron2').on('click', function(){
		
		$('#attackMessage').show();
		$('#attackMessage').html('Captain America attacked for ' + capAttack + ' damage');
		reset();
		new Audio('shieldslash.mp3').play();
		ultronHealth2 = ultronHealth2 - capAttack;
		$('#ultronbox2').html('Health: ' + ultronHealth2);
		if(ultronHealth2 <= 0){
			$('#ultron2').remove();
			$('#ultronbox2').remove();
			$('#healthBoss2').remove();
			new Audio('impossible.mp3').play();
		};
		if(ultronHealth1 <=0 && ultronHealth2 <=0 && ultronHealth3 <=0){location.replace('win.html');};
		return;
		
		
	});

	$('#ultron3').on('click', function(){
		
		$('#attackMessage').show();
		$('#attackMessage').html('Captain America attacked for ' + capAttack + ' damage');
		reset();
		new Audio('shieldslash.mp3').play();
		ultronHealth3 = ultronHealth3 - capAttack;
		$('#ultronbox3').html('Health: ' + ultronHealth3);
		if(ultronHealth3 <= 0){
			$('#ultron3').remove();
			$('#ultronbox3').remove();
			$('#healthBoss3').remove();
			new Audio('impossible.mp3').play();
		};
		if(ultronHealth1 <=0 && ultronHealth2 <=0 && ultronHealth3 <=0){location.replace('win.html');};
		return;
		
		
	});
});
	//Ironman Attack Sequence
	$('#ironman').on('click', function(){
	$(this).css('border', '3px solid blue');
	
	$('.boss').on('mouseenter', function(){
		$(this).css('border', '3px solid red');
	});
	
	$('.boss').on('mouseleave', function(){
		$(this).css('border', '');
	});

	$('#ultron1').on('click', function(){
		$('#attackMessage').show();
		$('#attackMessage').html('Ironman attacked for ' + ironmanAttack + ' damage');
		reset();
		new Audio('unibeam.mp3').play();
		ultronHealth1 = ultronHealth1 - ironmanAttack;
		$('#ultronbox1').html('Health: ' + ultronHealth1);
		if(ultronHealth1 <= 0){
			$('#ultron1').remove();
			$('#ultronbox1').remove();
			$('#healthBoss1').remove();
			new Audio('impossible.mp3').play();
		};
		if(ultronHealth1 <=0 && ultronHealth2 <=0 && ultronHealth3 <=0){location.replace('win.html');};
		return;
		
		
	});

	$('#ultron2').on('click', function(){
		$('#attackMessage').show();
		$('#attackMessage').html('Ironman attacked for ' + ironmanAttack + ' damage');
		reset();
		new Audio('unibeam.mp3').play();
		ultronHealth2 = ultronHealth2 - ironmanAttack;
		$('#ultronbox2').html('Health: ' + ultronHealth2);
		if(ultronHealth2 <= 0){
			$('#ultron2').remove();
			$('#ultronbox2').remove();
			$('#healthBoss2').remove();
			new Audio('impossible.mp3').play();
		};
		if(ultronHealth1 <=0 && ultronHealth2 <=0 && ultronHealth3 <=0){location.replace('win.html');};
		return;
		
		
	});

	$('#ultron3').on('click', function(){
		$('#attackMessage').show();
		$('#attackMessage').html('Ironman attacked for ' + ironmanAttack + ' damage');
		reset();
		new Audio('unibeam.mp3').play();
		ultronHealth3 = ultronHealth3 - ironmanAttack;
		$('#ultronbox3').html('Health: ' + ultronHealth3);
		if(ultronHealth3 <= 0){
			i++;
			$('#ultron3').remove();
			$('#ultronbox3').remove();
			$('#healthBoss3').remove();
			new Audio('impossible.mp3').play();
		};
		if(ultronHealth1 <=0 && ultronHealth2 <=0 && ultronHealth3 <=0){location.replace('win.html');};
		return;
		
		
	});
});
	//Deadpool Attack Sequence
	$('#deadpool').on('click', function(){
	
	$(this).css('border', '3px solid blue');
	
	$('.boss').on('mouseenter', function(){
		$(this).css('border', '3px solid red');
	});
	
	$('.boss').on('mouseleave', function(){
		$(this).css('border', '');
	});

	$('#ultron1').on('click', function(){
		$('#attackMessage').show();
		$('#attackMessage').html('Deadpool attacked for ' + deadpoolAttack + ' damage');
		reset();
		new Audio('bangbang.mp3').play();
		ultronHealth1 = ultronHealth1 - deadpoolAttack;
		$('#ultronbox1').html('Health: ' + ultronHealth1);
		if(ultronHealth1 <= 0){
			$('#ultron1').remove();
			$('#ultronbox1').remove();
			$('#healthBoss1').remove();
			new Audio('impossible.mp3').play();
		};
		if(ultronHealth1 <=0 && ultronHealth2 <=0 && ultronHealth3 <=0){location.replace('win.html');};
		return;
		
		
	});

	});

	$('#ultron2').on('click', function(){
		$('#attackMessage').show();
		$('#attackMessage').html('Deadpool attacked for ' + deadpoolAttack + ' damage');
		reset();
		new Audio('bangbang.mp3').play();
		ultronHealth2 = ultronHealth2 - deadpoolAttack;
		$('#ultronbox2').html('Health: ' + ultronHealth2);
		if(ultronHealth2 <= 0){
			$('#ultron2').remove();
			$('#ultronbox2').remove();
			$('#healthBoss2').remove();
			new Audio('impossible.mp3').play();
		};
		if(ultronHealth1 <=0 && ultronHealth2 <=0 && ultronHealth3 <=0){location.replace('win.html');};
		return;
		
		
	});

	$('#ultron3').on('click', function(){
		$('#attackMessage').show();
		$('#attackMessage').html('Deadpool attacked for ' + deadpoolAttack + ' damage');
		reset();
		new Audio('bangbang.mp3').play();
		ultronHealth3 = ultronHealth3 - deadpoolAttack;
		$('#ultronbox3').html('Health: ' + ultronHealth3);
		if(ultronHealth3 <= 0){
			$('#ultron3').remove();
			$('#ultronbox3').remove();
			$('#healthBoss3').remove();
			new Audio('impossible.mp3').play();
		};
		if(ultronHealth1 <=0 && ultronHealth2 <=0 && ultronHealth3 <=0){location.replace('win.html');};
		return;
		
		
	});





};



heroAttackSequence();

$('.boss').on('click', function(){

	bossAttackSequence();
});

if(ultronHealth1 <=0 && ultronHealth2 <=0 && ultronHealth3 <=0){
	location.replace('win.html');
}


















});