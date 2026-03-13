class Cat {
    get id() {
        return this._id;
    }
    ;
    set id(value) {
        this._id = value;
    }
    ;
    get name() {
        return this._name;
    }
    ;
    set name(value) {
        this._name = value;
    }
    ;
    get color() {
        return this._color;
    }
    ;
    set color(value) {
        this._color = value;
    }
    ;
    constructor(id, name, color) {
        this._id = id;
        this._name = name;
        this._color = color;
    }
    ;
}
;
export {};
