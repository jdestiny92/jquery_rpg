$(document).ready(function(){
//document ready, main wrapper


//Variables + Starting Conditions: Beginning
$('#attackMessage').hide();

function reset(){
	$('.hero').css('border', '');
	$('.boss').css('border', '');
	$('#attackMessage').delay(2000).fadeOut();
};

var heroes = ["cap", "ironman", "deadpool"];
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
$('.boss').on('click', function(){
	$('.hero').css('border', '');
});

if(window.capHealth <=0 && window.ironmanHealth <=0 && window.deadpoolHealth <=0){location.replace('loss.html');};
// Variables + Starting Conditions: End


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
if(window.capHealth <=0 && window.ironmanHealth <=0 && window.deadpoolHealth <=0){location.replace('loss.html');};


// Boss/Enemy Attack Event
function bossAttackSequence(){

console.log(heroes[0] + ' ' + heroes[1] + ' ' + heroes[2]);

choice = heroes[Math.floor(Math.random()*(heroes.length))];

ultronAttack = Math.floor(Math.random()*(400-350+1)+350);

ultronCrit = Math.floor(Math.random()*100);

if(ultronCrit <= 15){
		ultronAttack = Math.floor(ultronAttack + .25*ultronAttack);
	};

if(choice==="cap"){
	$('#attackMessage').show(1000, function(){
	document.getElementById('ultronAttack').play();
	if(ultronCrit <= 15){
		document.getElementById('ultronAttack').pause();
		document.getElementById('ultronCrit').play();
		$('#attackMessage').html('Ultron did a critical hit on Captain America for ' + ultronAttack + ' damage');
	}
	else{
		$('#attackMessage').html('Ultron attacked Captain America for ' + ultronAttack + ' damage');
	};
	reset();
	capHealth = capHealth - ultronAttack;
	$('#capbox').html('Health: ' + capHealth);
	if(capHealth < 0){
		heroes.splice(heroes.indexOf('cap'),1);
		$('#cap').remove();
		$('#capbox').remove();
		$('#capHealth').remove();
		new Audio('letdown.mp3').play();
	};
	if(window.capHealth <=0 && window.ironmanHealth <=0 && window.deadpoolHealth <=0){location.replace('loss.html');};
	});
	
};

if(choice=="ironman"){
	$('#attackMessage').show(1000, function(){
	document.getElementById('ultronAttack').play();
	if(ultronCrit <= 15){
		document.getElementById('ultronAttack').pause();
		document.getElementById('ultronCrit').play();
		$('#attackMessage').html('Ultron did a critical hit on Ironman for ' + ultronAttack + ' damage');
	}
	else{
		$('#attackMessage').html('Ultron attacked Ironman for ' + ultronAttack + ' damage');
	};
	reset();
	ironmanHealth = ironmanHealth - ultronAttack;
	$('#ironmanbox').html('Health: ' + ironmanHealth);
	if(ironmanHealth < 0){
		heroes.splice(heroes.indexOf('ironman'),1);
		$('#ironman').remove();
		$('#ironmanbox').remove();
		$('#ironmanHealth').remove();
		new Audio('impossible2.mp3').play();
	};
	
});

};

if(choice=="deadpool"){
	$('#attackMessage').show(1000, function(){
	document.getElementById('ultronAttack').play();
	if(ultronCrit <= 15){
		document.getElementById('ultronAttack').pause();
		document.getElementById('ultronCrit').play();
		$('#attackMessage').html('Ultron did a critical hit on Deadpool for ' + ultronAttack + ' damage');
	}
	else{
		$('#attackMessage').html('Ultron attacked Deadpool for ' + ultronAttack + ' damage');
	};
	reset();
	deadpoolHealth = deadpoolHealth - ultronAttack;
	$('#deadpoolbox').html('Health: ' + deadpoolHealth);
	if(deadpoolHealth < 0){
		heroes.splice(heroes.indexOf('deadpool'),1);
		$('#deadpool').remove();
		$('#deadpoolbox').remove();
		$('#deadpoolHealth').remove();
		new Audio('wrongButton.mp3').play();
		};
	});
	
};

};


//Cap Attack Sequence
$('#cap').on('click', function(){
	
	question1 = prompt('Would you like to attack Ultron 1, 2, or 3? (Type the #)');
	
	if(question1==1){
			capAttackStats();
			ultronHealth1 = ultronHealth1 - capAttack;
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
				new Audio('impossible.mp3').play();
			};
			if(ultronHealth1 <=0 && ultronHealth2 <=0 && ultronHealth3 <=0){location.replace('win.html');};
			return;
						};
	if(question1==2){
			capAttackStats();
			ultronHealth2 = ultronHealth2 - capAttack;
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
				new Audio('impossible.mp3').play();
			};
			if(ultronHealth1 <=0 && ultronHealth2 <=0 && ultronHealth3 <=0){location.replace('win.html');};
			return;
						};
	if(question1==3){
			capAttackStats();
			ultronHealth3 = ultronHealth3 - capAttack;
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
				new Audio('impossible.mp3').play();
			};
			if(ultronHealth1 <=0 && ultronHealth2 <=0 && ultronHealth3 <=0){location.replace('win.html');};
			return;
	};
});

//Ironman Attack Sequence
$('#ironman').on('click', function(){
	
	question2 = prompt('Would you like to attack Ultron 1, 2, or 3? (Type the #)');
	
	if(question2==1){
			ironmanAttackStats();
			ultronHealth1 = ultronHealth1 - ironmanAttack;
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
				new Audio('impossible.mp3').play();
			};
			if(ultronHealth1 <=0 && ultronHealth2 <=0 && ultronHealth3 <=0){location.replace('win.html');};
			return;
						};
	if(question2==2){
			ironmanAttackStats();
			ultronHealth2 = ultronHealth2 - ironmanAttack;
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
				new Audio('impossible.mp3').play();
			};
			if(ultronHealth1 <=0 && ultronHealth2 <=0 && ultronHealth3 <=0){location.replace('win.html');};
			return;
						};
	if(question2==3){
			ironmanAttackStats();
			ultronHealth3 = ultronHealth3 - ironmanAttack;
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
				new Audio('impossible.mp3').play();
			};
			if(ultronHealth1 <=0 && ultronHealth2 <=0 && ultronHealth3 <=0){location.replace('win.html');};
			return;
	};
});

//Deadpool Attack Sequence
$('#deadpool').on('click', function(){
	
	question3 = prompt('Would you like to attack Ultron 1, 2, or 3? (Type the #)');
	
	if(question3==1){
			deadpoolAttackStats();
			ultronHealth1 = ultronHealth1 - deadpoolAttack;
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
				new Audio('impossible.mp3').play();
			};
			if(ultronHealth1 <=0 && ultronHealth2 <=0 && ultronHealth3 <=0){location.replace('win.html');};
			return;
						};
	if(question3==2){
			deadpoolAttackStats();
			ultronHealth2 = ultronHealth2 - deadpoolAttack;
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
				new Audio('impossible.mp3').play();
			};
			if(ultronHealth1 <=0 && ultronHealth2 <=0 && ultronHealth3 <=0){location.replace('win.html');};
			return;
						};
	if(question3==3){
			deadpoolAttackStats();
			ultronHealth3 = ultronHealth3 - deadpoolAttack;
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
				new Audio('impossible.mp3').play();
			};
			if(ultronHealth1 <=0 && ultronHealth2 <=0 && ultronHealth3 <=0){location.replace('win.html');};
			return;
	};
});

if(window.capHealth <=0 && window.ironmanHealth <=0 && window.deadpoolHealth <=0){location.replace('loss.html');};

});
//Document on ready ends here!

