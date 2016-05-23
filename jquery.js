$(document).ready(function(){
//document ready, main wrapper

$('#attackMessage').hide();

function reset(){
	$('.hero').css('border', '');
	$('.boss').css('border', '');
	$('#attackMessage').delay(2000).fadeOut();
};


var capHealt = 1100;
var ironmanHealth = 950;
var deadpoolHealth = 850;
var ultronHealth1 = 1000;
var ultronHealth2 = 1000;
var ultronHealth3 = 1000;	


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
	if(capCrit >= 25){
		capAttack = Math.floor(capAttack + .25*capAttack);
	}

	if(ironmanCrit >= 20){
		ironmanAttack = Math.floor(ironmanAttack + .25*ironmanAttack);
	}

	if(deadpoolCrit >= 25){
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
		$('#cap').off('click');
		
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
		$('#ironman').off('click');
		
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
		$('#deadpool').off('click');
		
	});
});




}



heroAttackSequence();

















});