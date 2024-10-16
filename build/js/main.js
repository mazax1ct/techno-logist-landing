document.addEventListener('DOMContentLoaded', function() {
  let menuOpener = document.querySelector('.js-main-menu-opener');
  let mainMenu = document.querySelector('.main-menu');
  let content = document.querySelector('.page__content');

  menuOpener.addEventListener('click', function (event) {
    if(!menuOpener.classList.contains('is-active')) {
      content.classList.add('is-overflow');

      mainMenu.classList.add('is-block');

      setTimeout(() => {
        mainMenu.classList.add('is-open');

        menuOpener.classList.add('is-active');
      }, 10);
    } else {
      mainMenu.classList.remove('is-open');

      setTimeout(() => {
        mainMenu.classList.remove('is-block');
        content.classList.remove('is-overflow');
        menuOpener.classList.remove('is-active');
      }, 400);
    }
  });

  let mainMenuLinks = document.querySelectorAll('.main-menu__link');

  mainMenuLinks.forEach((link, index) => {
    link.addEventListener('click', function (event) {
      /*mainMenuLinks.forEach((link, index) => {
        link.classList.remove('is-active');
      });*/

      mainMenu.classList.remove('is-open');
      menuOpener.classList.remove('is-active');
      //link.classList.add('is-active');

      setTimeout(() => {
        mainMenu.classList.remove('is-block');
        content.classList.remove('is-overflow');
      }, 400);
    });
  });
});
