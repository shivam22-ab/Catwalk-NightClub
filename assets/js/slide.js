$(document).ready(function () {
  $('.bar svg').on('click', function () {
    $('.slide-down').toggleClass('active');
  });

  $('.close svg').on('click', function () {
    $('.slide-down').removeClass('active');
  });
});
