const windowWidth = window.innerWidth;

const getSlidesCount = () => {
	if (windowWidth > 0 && windowWidth < 768) {
		return 1;
	}
	if (windowWidth >= 768 && windowWidth < 1024) {
		return 2;
	}
	if (windowWidth >= 1024 && windowWidth < 1440) {
		return 3;
	}
	else return 4;
}


$(document).ready(function () {
	$('.slider').slick({
		infinite: true,
		slidesToShow: getSlidesCount(),
		centerMode: true,
		centerPadding: '0px',

	});
})

// $('')