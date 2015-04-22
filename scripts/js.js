

$(window).on('load', function() {

	$('#hamburger').on('click', function(event) {
		event.preventDefault();

		$('#banner').fadeToggle(0);
		$('#nav').fadeToggle(0);

	});
});
