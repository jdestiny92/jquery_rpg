//Hero Attack Probabilities
function heroAttackStats(){
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