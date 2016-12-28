///<reference path="../jquery.d.ts"/>
let alertType = {
  'error': 'alert-error',
  'success': 'alert-success'
};
export let showAlert = function (type, msg) {
  let $html = $('<div class="alert fade" id="alert"></div>');
  $html.html(msg);
  let className = alertType[type];
  $html.html(msg);
  $html.addClass(className).addClass('in');
  $('body').append($html);
  setTimeout(function () {
    $html.remove();
  }, 1500)
};
