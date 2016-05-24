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
	$('#attackMessage').show(1000, function(){
	$('#attackMessage').html('Ultron attacked Captain America for ' + ultronAttack + ' damage');
	reset();
	return;
	});
	
}

if(choice=="ironman"){
	$('#attackMessage').show(1000, function(){
	$('#attackMessage').html('Ultron attacked Ironman for ' + ultronAttack + ' damage');
	reset();
	return;
	});
	
}

if(choice=="deadpool"){
	$('#attackMessage').show(1000, function(){
	$('#attackMessage').html('Ultron attacked Deadpool for ' + ultronAttack + ' damage');
	reset();
	return;
	});
	
}

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

	// Hero Attack Sequence
	$('#cap').on('click', function(){
	$(this).css('border', '3px solid blue');
	
	$('.boss').on('mouseenter', function(){
		$(this).css('border', '3px solid red');
	});
	
	$('.boss').on('mouseleave', function(){
		$(this).css('border', '');
	});

	$('.boss').on('click', function(){
		
		$('#attackMessage').show();
		$('#attackMessage').html('Captain America attacked for ' + capAttack + ' damage');
		reset();
		bossAttackSequence();
		
	});
});

	$('#ironman').on('click', function(){
	$(this).css('border', '3px solid blue');
	
	$('.boss').on('mouseenter', function(){
		$(this).css('border', '3px solid red');
	});
	
	$('.boss').on('mouseleave', function(){
		$(this).css('border', '');
	});

	$('.boss').on('click', function(){
		$('#attackMessage').show();
		$('#attackMessage').html('Ironman attacked for ' + ironmanAttack + ' damage');
		reset();
		bossAttackSequence();
		
	});
});

	$('#deadpool').on('click', function(){
	$(this).css('border', '3px solid blue');
	
	$('.boss').on('mouseenter', function(){
		$(this).css('border', '3px solid red');
	});
	
	$('.boss').on('mouseleave', function(){
		$(this).css('border', '');
	});

	$('.boss').on('click', function(){
		$('#attackMessage').show();
		$('#attackMessage').html('Deadpool attacked for ' + deadpoolAttack + ' damage');
		reset();
		bossAttackSequence();
		
	});
});




}



heroAttackSequence();

















});