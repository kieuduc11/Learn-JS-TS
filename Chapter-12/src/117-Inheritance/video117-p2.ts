export{};

class NhanVien {
    id: number;
    name: string;

    constructor(id: number, name: string) {
        this.id = id;
        this.name = name;
    };
};

class LapTrinhVien extends NhanVien {
    skill: string;

    constructor(id: number, name: string, skill: string) {
        super(id, name);
        this.skill = skill;
    };
};

const lapTrinhVien = new LapTrinhVien(1, "Kieu Duc", "Typescript");
console.log(lapTrinhVien);
