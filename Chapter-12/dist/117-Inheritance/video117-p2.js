class NhanVien {
    constructor(id, name) {
        this.id = id;
        this.name = name;
    }
    ;
}
;
class LapTrinhVien extends NhanVien {
    constructor(id, name, skill) {
        super(id, name);
        this.skill = skill;
    }
    ;
}
;
const lapTrinhVien = new LapTrinhVien(1, "Kieu Duc", "Typescript");
console.log(lapTrinhVien);
export {};
