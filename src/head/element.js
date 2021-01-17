function Element({id = undefined, className = undefined}) {

    this.getId = function getId() {
        if (id) {
            return id;
        }
    }

    this.getClass = function getClass() {
        if (className) {
            return className;
        }
    }

    this.setId = function setId(id) {
        id = id;
    }

    this.setClass = function setClass(className) {
        className = className;
    }
}

Object.defineProperties(Element.prototype, {
    getElementType: {
        value: function getElementType() {
            return this.getElementTypeImpl();
        }
    },
    getAttributesForDOM: {
        value: function getAttributesForDOM() {
            return this.getAttributesForDOM
        }
    }
})

export default Element;

