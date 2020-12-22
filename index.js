var leftMenu = document.getElementsByClassName("side-navigation")[0];
var leftMenuContainer = document.getElementsByClassName("side-navigation-container")[0];
var leftMenuHidder = document.getElementsByClassName("side-navigation-container__menu-hider")[0];

leftMenuContainer.onpointerenter = function(event) {
    leftMenu.classList.remove("hidden");
    leftMenuContainer.classList.remove("side-navigation-container--collapsed");
    leftMenuHidder.classList.add("hidden");
    event.preventDefault();
    event.stopPropagation();
}

leftMenuContainer.onpointerleave = function(event) {
    leftMenuHidder.classList.remove("hidden");
    leftMenuContainer.classList.add("side-navigation-container--collapsed");
    leftMenu.classList.add("hidden");
    event.preventDefault();
    event.stopPropagation();
}

leftMenuContainer.onmouseenter = function(event) {
    console.log(event);
}