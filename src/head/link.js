import Element from './element.js';

function Link({
    rel,
    href
}){
    Element.call(this, {});

    this.getRel = function() {
        return rel;
    }

    this.getHref = function() {
        return href;
    }

    var type = "Link";
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
            let attributes = {};

            attributes.rel = this.getRel();
            attributes.href = this.getHref();

            return attributes;
        }
    }
})

export default Link;