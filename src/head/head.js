import Link from './link.js';

var head = document.getElementsByTagName('head')[0];

function loadHead() {
    console.log("working");
    var fontsLink = new Link({
        rel: "preconnect",
        href: "https://fonts.gstatic.com"
    });
    var fontsLink2 = new Link({
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Dancing+Script&display=swap"
    });
    var stylesheet1 = new Link({
        rel: "stylesheet",
        href: "http://localhost:5500/rootStyle.css"
    });
    var stylesheet2 = new Link({
        rel: "stylesheet",
        href: "../gallery/gallery.css"
    });

    console.log(stylesheet2.getAttributesForDOM());
    console.log(stylesheet2.getElementType());

    let elements = [fontsLink, fontsLink2, stylesheet1, stylesheet2];

    addToHead(elements);
}

function createDomElements(elements) {

    var element = document.createElement('link');

    for (let atribute in params) {
        link.setAttribute(atribute, params[atribute]);
    }

    return link;

    return element;
}

function addToHead(elements) {
    head.append(...elements);
}

export default loadHead;