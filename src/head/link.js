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
            var atributes = ["rel", "href"];

            /*attributes.rel = this.getRel();
            attributes.href = this.getHref();*/

            const superEmulated = Object.getPrototypeOf(this.constructor).prototype;
            console.log(superEmulated);
            return superEmulated.getAttributesForDOM.call(this, atributes);
        }
    }
})

export default Link;