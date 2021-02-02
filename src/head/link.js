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

const prototype = {
    getAttributesForDOM() {
        var attributes = ["rel", "href"];
        //const superEmulated = Object.getPrototypeOf(this.constructor).prototype;
        console.log(super.getAttributesForDOM);

        return super.getAttributesForDOM(attributes)
        //return superEmulated.getAttributesForDOM.call(this, attributes);
    }
}

Object.setPrototypeOf(prototype, Element.prototype)
Link.prototype = prototype;
Link.prototype.constructor = Link;
Object.setPrototypeOf(Link, Element);

Object.defineProperties(Link.prototype, {
    getAttributesForDOM: {}
})

export default Link;