// Boss Attack Sequence
function bossAttackSequence(){

heroes = ["cap", "ironman", "deadpool"];

choice = heroes[Math.floor(Math.random()*3)];

ultronAttack = Math.floor(Math.random()*(300-200+1)+200);

ultronCrit = Math.floor(Math.random()*100);

if(ultronCrit <= 15){
		ultronAttack = Math.floor(ultronAttack + .25*ultronAttack);
	};

if(choice=="cap"){
	$('#attackMessage').show(1000, function(){
	$('#attackMessage').html('Ultron attacked Captain America for ' + ultronAttack + ' damage');
	reset();
	new Audio('laugh.mp3').play();
	capHealth = capHealth - ultronAttack;
	$('#capbox').html('Health: ' + capHealth);
	
	});
	
};

if(choice=="ironman"){
	$('#attackMessage').show(1000, function(){
	$('#attackMessage').html('Ultron attacked Ironman for ' + ultronAttack + ' damage');
	reset();
	new Audio('laugh.mp3').play();
	ironmanHealth = ironmanHealth - ultronAttack;
	$('#ironmanbox').html('Health: ' + ironmanHealth);
	
	});
	
};

if(choice=="deadpool"){
	$('#attackMessage').show(1000, function(){
	$('#attackMessage').html('Ultron attacked Deadpool for ' + ultronAttack + ' damage');
	reset();
	new Audio('laugh.mp3').play();
	deadpoolHealth = deadpoolHealth - ultronAttack;
	$('#deadpoolbox').html('Health: ' + deadpoolHealth);
	
	});
	
};
	
};