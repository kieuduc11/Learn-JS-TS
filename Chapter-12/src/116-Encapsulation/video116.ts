export{};

class Cat {
    private _id: number;
    public get id(): number {
        return this._id;
    };
    public set id(value: number) {
        this._id = value;
    };

    private _name: string;
    public get name(): string {
        return this._name;
    };
    public set name(value: string) {
        this._name = value;
    };

    private _color: string;
    public get color(): string {
        return this._color;
    };
    public set color(value: string) {
        this._color = value;
    };

   constructor(id: number, name: string, color: string) {
    this._id = id;
    this._name = name;
    this._color = color;
   };
};