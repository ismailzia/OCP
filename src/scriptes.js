import $ from "jquery";
import header from "./components/header";
import navBar from "./components/navBar";
import nextEvent from "./components/nextEvent";

$(document).ready(() => {
	header.init();
	navBar.init();
	nextEvent.init();
});
