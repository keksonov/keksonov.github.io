(function () {
  var header = document.getElementsByClassName('header')[0]
  window.addEventListener('scroll', function () {
    var scroll = window.scrollY;

    if (scroll < window.innerHeight - scroll) {
      header.style.height = window.innerHeight - scroll + 'px';
    }
  });
}());