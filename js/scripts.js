(function () {
  var header = document.getElementsByClassName('header')[0]
  console.log(header)
  window.addEventListener('scroll', function () {
    var scroll = window.scrollY;

    console.log(window.innerHeight - scroll)
    header.style.height = window.innerHeight - scroll + 'px';
  });
}());