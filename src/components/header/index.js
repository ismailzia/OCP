import $ from 'jquery';

const selectors = {
  BACK_HOME: '.back-home',
};

const header = () => {
  const $navMain = $(selectors.NAV_MAIN);

  function hideMainNav() {
    $navMain.removeClass('nav--open');
  }

  function subscribeEvents() {
    $(document).on('click', selectors.BACK_HOME, hideMainNav);
  }

  function init() {

    subscribeEvents();
  }

  return {
    init
  };
};

export default header();
