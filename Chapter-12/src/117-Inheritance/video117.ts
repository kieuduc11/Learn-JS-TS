export{};

class Parent {
    gold: number | undefined;
    money: number | undefined;

    shareAHouse() {
        console.log("Share a house from parent");
    };
};

class Child extends Parent {
    name: string | undefined;
    
    shareAHouse() {
        super.shareAHouse();
        console.log("Share a house from child");
    };
};

const parent = new Parent();
const child = new Child();
child.shareAHouse();