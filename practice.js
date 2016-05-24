function bossAttackSequence(){

var heroes = ["cap", "ironman", "deadpool"];

var choice = heroes[Math.floor(Math.random()*3)];

var ultronAttack = Math.floor(Math.random()*(300-200+1)+200);

var ultronCrit = Math.floor(Math.random()*100);

if(ultronCrit <= 15){
		ultronAttack = Math.floor(ultronAttack + .25*ultronAttack);
	}

if(choice=="cap"){
	$('#attackMessage').show();
	$('#attackMessage').html('Ultron attacked Captain America for ' + ultronAttack + ' damage');
	reset();
	heroAttackSequence();
}

if(choice=="ironman"){
	$('#attackMessage').show();
	$('#attackMessage').html('Ultron attacked Ironman for ' + ultronAttack + ' damage');
	reset();
	heroAttackSequence();
}

if(choice=="deadpool"){
	$('#attackMessage').show();
	$('#attackMessage').html('Ultron attacked Deadpool for ' + ultronAttack + ' damage');
	reset();
	heroAttackSequence();
}


};