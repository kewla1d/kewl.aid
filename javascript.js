/* scroll move */
window.addEventListener('scroll', function() {
    var Home = document.querySelector('.docklink#Home');
    var AbtMe = document.querySelector('.docklink#AbtMe');
    var Social = document.querySelector('.docklink#Social');
    var dockblur = document.querySelector('#dock_blur');
    var scrollTop = window.scrollY;
  
    if (scrollTop > 0) {
      dockblur.classList.remove('reached');
    } else {
      dockblur.classList.add('reached');
    }

    if (scrollTop > -100) {
      Home.classList.add('reached');
    } else {
      Home.classList.remove('reached');
    }

    if (scrollTop >= 607) {
      AbtMe.classList.add('reached');
      Home.classList.remove('reached');
    } else {
      AbtMe.classList.remove('reached');
    }

    if (scrollTop >= 1214) {
      Social.classList.add('reached');
      AbtMe.classList.remove('reached');
    } else {
      Social.classList.remove('reached');
    }
}
);

window.addEventListener("scroll", (event) => {
  let scroll = this.scrollY;
  console.log(scroll)
});