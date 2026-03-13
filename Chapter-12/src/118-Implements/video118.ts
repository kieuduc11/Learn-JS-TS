export {};

interface IAnimal {
    makeSounnd(): void;
};

interface IFlyable {
    doFly(): void;
};

class Bird implements IAnimal, IFlyable {
    name: string | undefined;

    makeSounnd(): void {
        console.log("Chim hot liu lo....");
    };

    doFly(): void {
        console.log("Chim dang bay...");
    };
};

const bird = new Bird();
bird.makeSounnd();
bird.doFly();