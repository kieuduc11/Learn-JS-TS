class Parent {
    shareAHouse() {
        console.log("Share a house from parent");
    }
    ;
}
;
class Child extends Parent {
    shareAHouse() {
        super.shareAHouse();
        console.log("Share a house from child");
    }
    ;
}
;
const parent = new Parent();
const child = new Child();
child.shareAHouse();
export {};
