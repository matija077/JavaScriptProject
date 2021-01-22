import Element from './element.js';

function Link({
    rel,
    href
}){
    Element.call(this, {type: "Link"});

    this.getRel = function() {
        return rel;
    }

    this.getHref = function() {
        return href;
    }
}

Link.prototype = Object.create(Element.prototype);
Link.prototype.constructor = Link;
Object.setPrototypeOf(Link, Element);

function getElementTypeImp() {
    console.log("working");
}

Object.defineProperties(Link.prototype, {
    getAttributesForDOM: {
        value: function getAttributesForDOM() {
            var attributes = ["rel", "href"];

            const superEmulated = Object.getPrototypeOf(this.constructor).prototype;

            return superEmulated.getAttributesForDOM.call(this, attributes);
        }
    }
})

export default Link;