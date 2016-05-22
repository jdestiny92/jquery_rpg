$(document).ready(function(){
//document ready, main wrapper


$('#attackMessage').hide();


$('.hero').on('click', function(){
	$(this).css('border', '3px solid blue');
	
	$('.boss').on('mouseenter', function(){
		$(this).css('border', '3px solid red');
	});
	
	$('.boss').on('mouseleave', function(){
		$(this).css('border', '');
	});

	$('.boss').on('click', function(){
		$('#attackMessage').show();
		$('#attackMessage').html('Captain America attacked for 20 damage');
		reset();
	});
});

function reset(){
	$('.hero').css('border', '');
	$('.boss').css('border', '');
	$('#attackMessage').delay(2000).fadeOut();
};	



















});