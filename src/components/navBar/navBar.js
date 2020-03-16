import $ from "jquery";

const navBar = () => {
	const Selectors = {
		navBarButton: "#js-burger-menu__button",
		discoverButton: ".js__discover-button",
		replayVideo: ".js__replay-video",
		OCP_video: document.getElementById("myVideo")
	};

	//toggle the remove icon and the burger in the navbar responsive
	function toggleBurgerIcon() {
		$("#remove-icon").toggle("hidden");
		$("#burger-icon").toggle("block");
		$(".nav-elements").toggle("hidden");
	}

	//show the discover button and the replay button inside the video
	function showDiscoverReplayButton() {
		$(Selectors.replayVideo).removeClass("hidden");
		$(Selectors.discoverButton).removeClass("hidden");
	}

	//replay the video and hide the discoper and replay buttons
	function replayVideoButton() {
		Selectors.OCP_video.play();
		$(Selectors.replayVideo).addClass("hidden");
		$(Selectors.discoverButton).addClass("hidden");
	}

	function subscribeEvents() {
		$(document).on("click", Selectors.navBarButton, toggleBurgerIcon);
		$(Selectors.OCP_video).on("ended", showDiscoverReplayButton);
		$(document).on("click", Selectors.replayVideo, replayVideoButton);
	}
	function init() {
		subscribeEvents();
	}
	return {
		init
	};
};

export default navBar();
