import $ from "jquery";

const selectors = {
	BACK_HOME: ".back-home"
};

const didYouKnow = () => {
	const $navMain = $(selectors.NAV_MAIN);

	function hideMainNav() {
		$navMain.removeClass("nav--open");
	}

	function subscribeEvents() {
		$(document).on("click", selectors.BACK_HOME, hideMainNav);
	}

	function init() {
		subscribeEvents();
	}

	console.log("did you know ");

	return {
		init
	};
};

export default didYouKnow();
