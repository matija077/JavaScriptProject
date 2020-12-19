var leftMenu = document.getElementsByClassName("side-navigation")[0];
var leftMenuContainer = document.getElementsByClassName("side-navigation-container")[0];
var leftMenuHidder = document.getElementsByClassName("side-navigation-container__menu-hider")[0];

leftMenuContainer.onmouseenter = function(event) {
    leftMenu.classList.remove("hidden");
    leftMenuContainer.classList.remove("side-navigation-container--collapsed");
    leftMenuHidder.classList.add("hidden");
}

leftMenuContainer.onmouseleave = function(event) {
    leftMenuHidder.classList.remove("hidden");
    leftMenuContainer.classList.add("side-navigation-container--collapsed");
    leftMenu.classList.add("hidden");
}