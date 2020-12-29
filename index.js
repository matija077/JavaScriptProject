var leftMenu = document.getElementsByClassName("content__side_navigation")[0];
var leftMenuContainer = document.getElementsByClassName("content__side-navigation-container")[0];
var leftMenuHidder = document.getElementsByClassName("side-navigation-container__menu-hider")[0];
var rightMenuContainer = document.getElementsByClassName("content__side-paragraph")[0];

leftMenuContainer.onpointerenter = function(event) {
    leftMenu.classList.remove("hidden");
    leftMenuContainer.classList.remove("side-navigation-container--collapsed");
    leftMenuHidder.classList.add("hidden");
    rightMenuContainer.classList.add("side-paragraph--shrink");
    event.preventDefault();
}

leftMenuContainer.onpointerleave = function(event) {
    leftMenuHidder.classList.remove("hidden");
    leftMenuContainer.classList.add("side-navigation-container--collapsed");
    leftMenu.classList.add("hidden");
    event.preventDefault();
}

rightMenuContainer.onpointerenter = function(event) {
    leftMenuContainer.classList.add("side-navigation-container--collapsed");
    rightMenuContainer.classList.remove("side-paragraph--shrink");
    event.preventDefault();
}

rightMenuContainer.onpointerleave = function(event) {
    leftMenuContainer.classList.add("side-navigation-container--collapsed");
    rightMenuContainer.classList.add("side-paragraph--shrink");
    event.preventDefault();
}