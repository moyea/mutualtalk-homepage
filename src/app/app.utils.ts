///<reference path="../jquery.d.ts"/>
const ALERT_TYPE = {
  'error': 'alert-error',
  'success': 'alert-success'
};
export let showAlert = function (type, msg) {
  const $html = $('<div class="alert fade" id="alert"></div>');
  const className = ALERT_TYPE[type];
  $html.html(msg);
  $html.html(msg);
  $html.addClass(className).addClass('in');
  $('body').append($html);
  setTimeout(function () {
    $html.remove();
  }, 1500);
};

export function scrollToDom(domId) {
  document.getElementById(domId).scrollIntoView();
}
