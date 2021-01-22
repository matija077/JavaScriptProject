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

    const elements = [fontsLink, fontsLink2, stylesheet1, stylesheet2];

    const domElements = createDomElements(elements);

    addToHead(domElements);
}

function createDomElements(elements) {
    var domElements = [];
    for (let element of elements) {
        let domElement = document.createElement(element.getType());

        const attributes = element.getAttributesForDOM();
        for (let attribute in attributes) {
            domElement.setAttribute(attribute, attributes[attribute]);
        }

        domElements.push(domElement);
    }

    return domElements;
}

function addToHead(elements) {
    head.append(...elements);
}

export default loadHead;