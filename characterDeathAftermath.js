if(window.capHeatlh<0 && window.ironmanHeatlh<0){
	heroes = ['deadpool', 'deadpool', 'deadpool'];
};

if(window.capHeatlh<0 && window.deadpoolHeatlh<0){
	heroes = ['ironman', 'ironman', 'ironman'];
};

if(window.deadpoolHeatlh<0 && window.ironmanHeatlh<0){
	heroes = ['cap', 'cap', 'cap'];
};

if(window.capHeatlh<0){
	var option1 = ['ironman', 'ironman', 'deadpool'];
	var option2 = ['deadpool', 'ironman', 'deadpool'];

	var coinflip1 = Math.floor(Math.random()*2);

	if(coinflip1==0){
		heroes = option1;
	}
	else{
		heroes = option2;
	};
};

if(window.ironmanHeatlh<0){
	var option1 = ['cap', 'cap', 'deadpool'];
	var option2 = ['cap', 'deadpool', 'deadpool'];

	var coinflip2 = Math.floor(Math.random()*2);

	if(coinflip2==0){
		heroes = option1;
	}
	else{
		heroes = option2;
	};
};

if(window.deadpoolHeatlh<0){
	var option1 = ['cap', 'ironman', 'cap'];
	var option2 = ['cap', 'ironman', 'ironman'];

	var coinflip3 = Math.floor(Math.random()*2);

	if(coinflip3==0){
		heroes = option1;
	}
	else{
		heroes = option2;
	};
};