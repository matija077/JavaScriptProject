function Element({
    id = undefined, 
    className = undefined,
    type = "Element"
}) {
    var atributes = {};

    this.getId = function getId() {
        if (id) {
            return id;
        }
    }
    this.setId = function setId(id) {
        id = id;
    }

    this.getClass = function getClass() {
        if (className) {
            return className;
        }
    }
    this.setClass = function setClass(className) {
        className = className;
    }

    this.getAtributes = function getAtributes() {
        return atributes;
    }
    this.setAtributes = function setAtributes() {

    }

    this.getType = function getType() {
        return type;
    }
}

Object.defineProperties(Element.prototype, {
    getElementType: {
        value: function getElementType() {
            return this.getElementTypeImpl();
        }
    },
    getAttributesForDOM: {
        value: function getAttributesForDOM(keys) {
            var atributes = {};

            console.log(keys);
            console.log(this);

            for (let key of keys) {
                const upercaseKey = key.charAt(0).toUpperCase() + key.slice(1);
                let value = `get${upercaseKey}`;
                console.log(value);

                atributes[key] = this[value]();
            }

            return atributes;
        }
    }
})

export default Element;

