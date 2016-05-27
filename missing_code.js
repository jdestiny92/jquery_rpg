	// Cap Attack Sequence
	function captainAmerica(){
		
	if($('#ultron1').on('click')){
		heroAttackSequence();
		$('#attackMessage').show();
		$('#attackMessage').html('Captain America attacked for ' + capAttack + ' damage');
		new Audio('shieldslash.mp3').play();
		ultronHealth1 = ultronHealth1 - capAttack;
		$('#ultronbox1').html('Health: ' + ultronHealth1);
		/*if(ultronHealth1 <= 0){
			$('#ultron1').remove();
			$('#ultronbox1').remove();
			$('#healthBoss1').remove();
			new Audio('impossible.mp3').play();
		};*/
		if(ultronHealth1 <=0 && ultronHealth2 <=0 && ultronHealth3 <=0){location.replace('win.html');};
		return;
		
	}

	else if($('#ultron2').on('click')){
		heroAttackSequence();
		$('#attackMessage').show();
		$('#attackMessage').html('Captain America attacked for ' + capAttack + ' damage');
		new Audio('shieldslash.mp3').play();
		ultronHealth2 = ultronHealth2 - capAttack;
		$('#ultronbox2').html('Health: ' + ultronHealth2);
		/*if(ultronHealth2 <= 0){
			$('#ultron2').remove();
			$('#ultronbox2').remove();
			$('#healthBoss2').remove();
			new Audio('impossible.mp3').play();
		};*/
		if(ultronHealth1 <=0 && ultronHealth2 <=0 && ultronHealth3 <=0){location.replace('win.html');};
		return;
			
	}

	else if($('#ultron3').on('click')){
		heroAttackSequence();
		$('#attackMessage').show();
		$('#attackMessage').html('Captain America attacked for ' + capAttack + ' damage');
		new Audio('shieldslash.mp3').play();
		ultronHealth3 = ultronHealth3 - capAttack;
		$('#ultronbox3').html('Health: ' + ultronHealth3);
		/*if(ultronHealth3 <= 0){
			$('#ultron3').remove();
			$('#ultronbox3').remove();
			$('#healthBoss3').remove();
			new Audio('impossible.mp3').play();
		};*/
		if(ultronHealth1 <=0 && ultronHealth2 <=0 && ultronHealth3 <=0){location.replace('win.html');};
		return;
				
	}

};


	//Ironman Attack Sequence
	function ironman(){
	
	
	if($('#ultron1').on('click')){
		heroAttackSequence();
		$('#attackMessage').show();
		$('#attackMessage').html('Ironman attacked for ' + ironmanAttack + ' damage');
		new Audio('unibeam.mp3').play();
		ultronHealth1 = ultronHealth1 - ironmanAttack;
		$('#ultronbox1').html('Health: ' + ultronHealth1);
		/*if(ultronHealth1 <= 0){
			$('#ultron1').remove();
			$('#ultronbox1').remove();
			$('#healthBoss1').remove();
			new Audio('impossible.mp3').play();
		};*/
		if(ultronHealth1 <=0 && ultronHealth2 <=0 && ultronHealth3 <=0){location.replace('win.html');};
		return;
		
		
	}

	else if($('#ultron2').on('click')){
		heroAttackSequence();
		$('#attackMessage').show();
		$('#attackMessage').html('Ironman attacked for ' + ironmanAttack + ' damage');
		reset();
		new Audio('unibeam.mp3').play();
		ultronHealth2 = ultronHealth2 - ironmanAttack;
		$('#ultronbox2').html('Health: ' + ultronHealth2);
		/*if(ultronHealth2 <= 0){
			$('#ultron2').remove();
			$('#ultronbox2').remove();
			$('#healthBoss2').remove();
			new Audio('impossible.mp3').play();
		};*/
		if(ultronHealth1 <=0 && ultronHealth2 <=0 && ultronHealth3 <=0){location.replace('win.html');};
		return;
		
		
	}

	else if($('#ultron3').on('click')){
		heroAttackSequence();
		$('#attackMessage').show();
		$('#attackMessage').html('Ironman attacked for ' + ironmanAttack + ' damage');
		reset();
		new Audio('unibeam.mp3').play();
		ultronHealth3 = ultronHealth3 - ironmanAttack;
		$('#ultronbox3').html('Health: ' + ultronHealth3);
		/*if(ultronHealth3 <= 0){
			i++;
			$('#ultron3').remove();
			$('#ultronbox3').remove();
			$('#healthBoss3').remove();
			new Audio('impossible.mp3').play();
		};*/
		if(ultronHealth1 <=0 && ultronHealth2 <=0 && ultronHealth3 <=0){location.replace('win.html');};
		return;
		
		
	}
};

	
	//Deadpool Attack Sequence
	function deadpool(){
	
	if($('#ultron1').on('click')){
		heroAttackSequence();
		$('#attackMessage').show();
		$('#attackMessage').html('Deadpool attacked for ' + deadpoolAttack + ' damage');
		new Audio('bangbang.mp3').play();
		ultronHealth1 = ultronHealth1 - deadpoolAttack;
		$('#ultronbox1').html('Health: ' + ultronHealth1);
		/*if(ultronHealth1 <= 0){
			$('#ultron1').remove();
			$('#ultronbox1').remove();
			$('#healthBoss1').remove();
			new Audio('impossible.mp3').play();
		};*/
		if(ultronHealth1 <=0 && ultronHealth2 <=0 && ultronHealth3 <=0){location.replace('win.html');};
		return;
		
		}

	else if($('#ultron2').on('click')){
		heroAttackSequence();
		$('#attackMessage').show();
		$('#attackMessage').html('Deadpool attacked for ' + deadpoolAttack + ' damage');
		new Audio('bangbang.mp3').play();
		ultronHealth2 = ultronHealth2 - deadpoolAttack;
		$('#ultronbox2').html('Health: ' + ultronHealth2);
		/*if(ultronHealth2 <= 0){
			$('#ultron2').remove();
			$('#ultronbox2').remove();
			$('#healthBoss2').remove();
			new Audio('impossible.mp3').play();
		};*/
		if(ultronHealth1 <=0 && ultronHealth2 <=0 && ultronHealth3 <=0){location.replace('win.html');};
		return;
		
	}

	else if($('#ultron3').on('click')){
		heroAttackSequence();
		$('#attackMessage').show();
		$('#attackMessage').html('Deadpool attacked for ' + deadpoolAttack + ' damage');
		reset();
		new Audio('bangbang.mp3').play();
		ultronHealth3 = ultronHealth3 - deadpoolAttack;
		$('#ultronbox3').html('Health: ' + ultronHealth3);
		/*if(ultronHealth3 <= 0){
			$('#ultron3').remove();
			$('#ultronbox3').remove();
			$('#healthBoss3').remove();
			new Audio('impossible.mp3').play();
		};*/
		if(ultronHealth1 <=0 && ultronHealth2 <=0 && ultronHealth3 <=0){location.replace('win.html');};
		return;
		
		};

};
