var leftMenu = document.getElementsByClassName("content__side_navigation")[0];
var leftMenuContainer = document.getElementsByClassName("content__side-navigation-container")[0];
var leftMenuHidder = document.getElementsByClassName("side-navigation-container__menu-hider")[0];
var rightMenuContainer = document.getElementsByClassName("content__side-paragraph")[0];
var mainContent = document.getElementsByClassName("content-container")[0];

var currentPageObject = {
    id: "home",
    pages: {
        home: {

        },
        about: {

        },
        gallery: {

        }
    },
};

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

function mainMenuClickHandler(event) {
    event.preventDefault();

    var newPageId = event.currentTarget.dataset.id.toLowerCase();

    if (currentPageObject.id === newPageId) {
        return;
    }

    fetch(`src/${newPageId}/${newPageId}.html`, {
        headers: {
            'Content-type': 'text/html'
        }
    }).
    then(function resolved(result) {
        var reader = result.body.getReader();
        console.log(reader);
    }).
    catch(function rejected(error) {
        console.log(error);
    })
}