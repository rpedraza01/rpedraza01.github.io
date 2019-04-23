let navContainer = document.getElementById('nav-container')

let headerContainer = document.getElementById('header-container');

let hamburger = document.querySelector(".hamburger");

// Menu Icon Animation
hamburger.addEventListener('click', function(e) {

    if (hamburger.classList.contains('unclicked')) {
        hamburger.classList.toggle("is-active");
        hamburger.classList.remove('unclicked');
        hamburger.classList.add('clicked');

        navContainer.classList.add('show');
    } else {
        hamburger.classList.toggle("is-active");
        hamburger.classList.remove('clicked');
        hamburger.classList.add('unclicked');

        navContainer.classList.remove('show');
    }

});

// Window Size Event Listener
function windowSizeClicker() {
    if (window.matchMedia("(min-width: 950px)").matches) {
    } else {
        hamburger.click();
    };
}