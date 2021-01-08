var head = document.getElementsByTagName('head')[0];

function loadHead() {
    var fontsLink = createElement("link", {
        rel: "preconnect",
        href: "https://fonts.gstatic.com"
    });
    var fontsLink2 = createElement("link", {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Dancing+Script&display=swap"
    });
    var stylesheet1 = createElement("link", {
        rel: "stylesheet",
        href: "http://localhost:5500/rootStyle.css"
    });
    var stylesheet2 = createElement("link", {
        rel: "stylesheet",
        href: "../gallery/gallery.css"
    });

    let elements = [fontsLink, fontsLink2, stylesheet1, stylesheet2];

    addToHead(elements);
}

function createElement(elemType, params) {
    var element;
    switch(elemType) {
        case "link":
            element = createLinkElemenet(params)
            break;
        default:
            break;
    }

    function createLinkElemenet(params) {
        var link = document.createElement('link');

        for (let atribute in params) {
            link.setAttribute(atribute, params[atribute]);
        }

        return link;
    }

    return element;
}

function addToHead(elements) {
    head.append(...elements);
}

export default loadHead;