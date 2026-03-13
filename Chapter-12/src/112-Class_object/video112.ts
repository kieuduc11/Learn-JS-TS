export {};

class Lion {
    name: string | undefined;
    color: string | undefined;

    sleep() {
        console.log(`${this.name} is sleeping`);
    }
};

const lion1 = new Lion();
lion1.name = "Puck";
lion1.color = "Yellow";
lion1.sleep();