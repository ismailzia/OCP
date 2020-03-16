import $ from "jquery";
import { slick } from "slick-carousel";

const nextEvent = () => {
	function nextEventCarousel() {
		$(".nextEvent__Carousel").slick({
			centerMode: true,
			centerPadding: "px",
			slidesToShow: 3,
			slidesToScroll: 1,
			responsive: [
				{
					breakpoint: 800,
					settings: "unslick"
				}
			]
		});
	}

	function subscribeEvents() {
		$(document).ready(nextEventCarousel);
	}
	function init() {
		subscribeEvents();
	}
	return {
		init
	};
};
export default nextEvent();
