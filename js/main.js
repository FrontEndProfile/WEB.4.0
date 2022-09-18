AOS.init();


$('.navbar-toggler').click(function () {
      $('body').toggleClass('showMenu');
});



var scene = document.getElementById('js-scene');
var parallax = new Parallax(scene);