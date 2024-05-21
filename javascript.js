/* scroll move */
window.addEventListener('scroll', function() {
    var cover = document.querySelector('div#CoverPage');
    var scrollTop = window.scrollY;
  
    if (scrollTop > 0) {
      cover.classList.add('scrolled');
    } else {
      cover.classList.remove('scrolled');
    }
});