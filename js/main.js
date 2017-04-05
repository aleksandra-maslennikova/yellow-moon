$(document).ready(function(){
$('.navbar-toggler').on('click', function(e){
	e.preventDefault();
	var target = $(this).attr('href');
	$(this).toggleClass('active');	
	$(target).toggleClass('collapse');
})
});