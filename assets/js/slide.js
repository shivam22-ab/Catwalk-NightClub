document.addEventListener('DOMContentLoaded', function () {
    var bar = document.querySelector('.bar');
    var svg = bar.querySelector('svg');
    var slideDown = document.querySelector('.slide-down');

    svg.addEventListener('click', function () {
      bar.classList.toggle('active');
      slideDown.classList.toggle('active');
    });
  });