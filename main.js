const selectElement = function (element) {
  return document.querySelector(element);
};

let menuToggler = selectElement('.menu__icons');
let body = selectElement('body');

menuToggler.addEventListener('click', function () {
  getElementbyid('open');
});
