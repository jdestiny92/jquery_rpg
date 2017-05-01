$(document).ready(function(){

//Variables + Starting Conditions
$('#attackMessage').hide();

$('#myModal').modal('show');

$('.btn').on('click', function(){
	//console.log($(this).attr('id'));
	var difficulty = $(this).attr('id');

	if(difficulty === 'easy'){
		upperNumber = 300;
		lowerNumber = 200;
	}
	else if(difficulty === 'medium'){
		upperNumber = 400;
		lowerNumber = 300;
	}
	else{
		upperNumber = 400;
		lowerNumber = 350;
	}

	$('#myModal').modal('hide');
})

function reset(){
	
	$('#attackMessage').delay(2000).fadeOut();
};

function ultronAttack(){
	return Math.floor(Math.random()*(upperNumber - lowerNumber + 1)+ lowerNumber);
};

var ultronLastAttack;
var heroes = ["cap", "ironman", "deadpool"];
var upperNumber;
var lowerNumber;
var capHealth = 1100;
var ironmanHealth = 950;
var deadpoolHealth = 850;
var ultronHealth1 = 1000;
var ultronHealth2 = 1000;
var ultronHealth3 = 1000;
var lastClickedHero = false;
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
	$('.hero').css('border', '');
	$(this).css('border', '3px solid blue');
	var id = $(this).attr('id');
	lastClickedHero = id;
	console.log(lastClickedHero);
});
$('.boss').on('click', function(){
	$('.hero').css('border', '');
})

// End of Main Starting Conditions


// -----------------------------------------------------------------------------------

// Main Logic

// Boss/Enemy Attack Event
function bossAttackSequence(){

console.log(heroes[0] + ' ' + heroes[1] + ' ' + heroes[2]);

choice = heroes[Math.floor(Math.random()*(heroes.length))];

ultronLastAttack = ultronAttack();

ultronCrit = Math.floor(Math.random()*100);

if(ultronCrit <= 15){
		ultronLastAttack = Math.floor(ultronLastAttack + .25*ultronLastAttack);
	};

if(choice==="cap"){
	$('#attackMessage').show(1000, function(){
	document.getElementById('ultronAttack').play();
	if(ultronCrit <= 15){
		document.getElementById('ultronAttack').pause();
		document.getElementById('ultronCrit').play();
		$('#attackMessage').html('Ultron did a critical hit on Captain America for ' + ultronLastAttack + ' damage');
	}
	else{
		$('#attackMessage').html('Ultron attacked Captain America for ' + ultronLastAttack + ' damage');
	};
	reset();
	capHealth = capHealth - ultronLastAttack;
	$('#capbox').html('Health: ' + capHealth);
	if(capHealth < 0){
		heroes.splice(heroes.indexOf('cap'),1);
		$('#cap').remove();
		$('#capbox').remove();
		$('#capHealth').remove();
		new Audio('music/letdown.mp3').play();
	};

	if(capHealth <= 0 && ironmanHealth <= 0 && deadpoolHealth <= 0){
		location.replace('loss.html');
	};
	});
	
};

if(choice==="ironman"){
	$('#attackMessage').show(1000, function(){
	document.getElementById('ultronAttack').play();
	if(ultronCrit <= 15){
		document.getElementById('ultronAttack').pause();
		document.getElementById('ultronCrit').play();
		$('#attackMessage').html('Ultron did a critical hit on Ironman for ' + ultronLastAttack + ' damage');
	}
	else{
		$('#attackMessage').html('Ultron attacked Ironman for ' + ultronLastAttack + ' damage');
	};
	reset();
	ironmanHealth = ironmanHealth - ultronLastAttack;
	$('#ironmanbox').html('Health: ' + ironmanHealth);
	if(ironmanHealth < 0){
		heroes.splice(heroes.indexOf('ironman'),1);
		$('#ironman').remove();
		$('#ironmanbox').remove();
		$('#ironmanHealth').remove();
		new Audio('music/impossible2.mp3').play();
	};
		if(capHealth <= 0 && ironmanHealth <= 0 && deadpoolHealth <= 0){location.replace('loss.html');};

});

};

if(choice==="deadpool"){
	$('#attackMessage').show(1000, function(){
	document.getElementById('ultronAttack').play();
	if(ultronCrit <= 15){
		document.getElementById('ultronAttack').pause();
		document.getElementById('ultronCrit').play();
		$('#attackMessage').html('Ultron did a critical hit on Deadpool for ' + ultronLastAttack + ' damage');
	}
	else{
		$('#attackMessage').html('Ultron attacked Deadpool for ' + ultronLastAttack + ' damage');
	};
	reset();
	deadpoolHealth = deadpoolHealth - ultronLastAttack;
	$('#deadpoolbox').html('Health: ' + deadpoolHealth);
	if(deadpoolHealth < 0){
		heroes.splice(heroes.indexOf('deadpool'),1);
		$('#deadpool').remove();
		$('#deadpoolbox').remove();
		$('#deadpoolHealth').remove();
		new Audio('music/wrongButton.mp3').play();
		};
		if(capHealth <= 0 && ironmanHealth <= 0 && deadpoolHealth <= 0){location.replace('loss.html');};
	});
		

};

};

//Cap Attack + Critical Hit Value Generation
function capAttackStats(){
	// Random Attack Values
	capAttack = Math.floor(Math.random()*(300-250+1)+250);
	//Random Crit
	capCrit =  Math.floor(Math.random()*100);
	//Result of Crits
	if(capCrit <= 25){
		capAttack = Math.floor(capAttack + .25*capAttack);
	};
	$('#attackMessage').show();
	document.getElementById('capAttack').play();
	if(capCrit <= 25){
		document.getElementById('capAttack').pause();
		document.getElementById('capCrit').play();
		$('#attackMessage').html('Captain America did a critical hit for ' + capAttack + ' damage');
	}
	else{
		$('#attackMessage').html('Captain America attacked for ' + capAttack + ' damage');
	};
	return;
};

//Ironman Attack + Critical Hit Value Generation
function ironmanAttackStats(){
	//Random Attack Values
	ironmanAttack = Math.floor(Math.random()*(400-300+1)+300);
	//Random Crit
	ironmanCrit =  Math.floor(Math.random()*100);
	//Result of Crits
	if(ironmanCrit <= 20){
		ironmanAttack = Math.floor(ironmanAttack + .25*ironmanAttack);
	};
	$('#attackMessage').show();
	document.getElementById('ironmanAttack').play();
	if(ironmanCrit <= 20){
		document.getElementById('ironmanAttack').pause();
		document.getElementById('ironmanCrit').play();
		$('#attackMessage').html('Ironman did a critical hit for ' + ironmanAttack + ' damage');
	}
	else{
		$('#attackMessage').html('Ironman attacked for ' + ironmanAttack + ' damage');
	};
	return;
};

//Deadpool Attack + Critical Hit Value Generation
function deadpoolAttackStats(){
	//Random Attack Values
	deadpoolAttack = Math.floor(Math.random()*(300-200+1)+200);
	//Random Crit
	deadpoolCrit =  Math.floor(Math.random()*100);
	//Result of Crits
	if(deadpoolCrit <= 25){
		deadpoolAttack = Math.floor(deadpoolAttack + .25*deadpoolAttack);
	};
	$('#attackMessage').show();
	document.getElementById('deadpoolAttack').play();
	if(deadpoolCrit <= 25){
		document.getElementById('deadpoolAttack').pause();
		document.getElementById('deadpoolCrit').play();
		$('#attackMessage').html('Deadpool did a critical hit for ' + deadpoolAttack + ' damage');
	}
	else{
		$('#attackMessage').html('Deadpool attacked for ' + deadpoolAttack + ' damage');
	};
	return;
};

// Hero Attacks

$('#ultron1').on('click', function(){

	if(lastClickedHero==='cap'){
		capAttackStats();
		ultronHealth1 = ultronHealth1 - capAttack;
	}
	else if(lastClickedHero==='ironman'){
		ironmanAttackStats();
		ultronHealth1 = ultronHealth1 - ironmanAttack;
	}
	else{
		deadpoolAttackStats();
		ultronHealth1 = ultronHealth1 - deadpoolAttack;
	}

	if(lastClickedHero){

		lastClickedHero = false;
		$('#ultronbox1').html('Health: ' + ultronHealth1);		
		reset();
		if(ultronHealth1 > 0){
			bossAttackSequence();
		}
		else{
			bossAttackSequence();
			$('#ultron1').remove();
			$('#ultronbox1').remove();
			$('#healthBoss1').remove();
			new Audio('music/impossible.mp3').play();
		};
		if(ultronHealth1 <=0 && ultronHealth2 <=0 && ultronHealth3 <=0){location.replace('win.html');};
		//return;
	}
	else{
		alert('Please choose a hero first!');
	}
});

$('#ultron2').on('click', function(){

	if(lastClickedHero==='cap'){
		capAttackStats();
		ultronHealth2 = ultronHealth2 - capAttack;
	}
	else if(lastClickedHero==='ironman'){
		ironmanAttackStats();
		ultronHealth2 = ultronHealth2 - ironmanAttack;
	}
	else{
		deadpoolAttackStats();
		ultronHealth2 = ultronHealth2 - deadpoolAttack;
	}

	if(lastClickedHero){

		lastClickedHero = false;
		$('#ultronbox2').html('Health: ' + ultronHealth2);		
		reset();
		if(ultronHealth2 > 0){
			bossAttackSequence();
		}
		else{
			bossAttackSequence();
			$('#ultron2').remove();
			$('#ultronbox2').remove();
			$('#healthBoss2').remove();
			new Audio('music/impossible.mp3').play();
		};
		if(ultronHealth1 <=0 && ultronHealth2 <=0 && ultronHealth3 <=0){location.replace('win.html');};
		//return;
	}
	else{
		alert('Please choose a hero first!');
	}
});

$('#ultron3').on('click', function(){

	if(lastClickedHero==='cap'){
		capAttackStats();
		ultronHealth3 = ultronHealth3 - capAttack;
	}
	else if(lastClickedHero==='ironman'){
		ironmanAttackStats();
		ultronHealth3 = ultronHealth3 - ironmanAttack;
	}
	else{
		deadpoolAttackStats();
		ultronHealth3 = ultronHealth3 - deadpoolAttack;
	}

	if(lastClickedHero){

		lastClickedHero = false;
		$('#ultronbox3').html('Health: ' + ultronHealth3);		
		reset();
		if(ultronHealth3 > 0){
			bossAttackSequence();
		}
		else{
			bossAttackSequence();
			$('#ultron3').remove();
			$('#ultronbox3').remove();
			$('#healthBoss3').remove();
			new Audio('music/impossible.mp3').play();
		};
		if(ultronHealth1 <=0 && ultronHealth2 <=0 && ultronHealth3 <=0){location.replace('win.html');};
		//return;
	}
	else{
		alert('Please choose a hero first!');
	}
});

}); // document ready ends here