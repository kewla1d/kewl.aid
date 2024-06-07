/* scroll move */
window.addEventListener('scroll', function() {
    var HomeLink = document.querySelector('.docklink#HomeLink');
    var AbtMeLink = document.querySelector('.docklink#AbtMeLink');
    var LinksLink = document.querySelector('.docklink#LinksLink');
    var scrollTop = window.scrollY;

    if (scrollTop > -100) {
        HomeLink.classList.add('reached');
    } else {
        HomeLink.classList.remove('reached');
    }

    if (scrollTop >= 607) {
        AbtMeLink.classList.add('reached');
        HomeLink.classList.remove('reached');
    } else {
        AbtMeLink.classList.remove('reached');
    }

    if (scrollTop >= 1214) {
        LinksLink.classList.add('reached');
        AbtMeLink.classList.remove('reached');
    } else {
        LinksLink.classList.remove('reached');
    }
}
);

window.addEventListener("scroll", (event) => {
let scroll = this.scrollY;
console.log(scroll)
});