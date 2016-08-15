$(function() {
	resizeHeader();
	$(window).resize(resizeHeader);
});

function resizeHeader() {
	var vHeight = $(window).height(),
		cover = $('#main-header');

	cover.css({
		"height":vHeight
	});
}

