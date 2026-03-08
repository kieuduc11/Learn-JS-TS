// Enum type
var RoleEnum;
(function (RoleEnum) {
    RoleEnum[RoleEnum["USER"] = 0] = "USER";
    RoleEnum[RoleEnum["ADMIN"] = 1] = "ADMIN";
    RoleEnum[RoleEnum["SUPERADMIN"] = 2] = "SUPERADMIN";
})(RoleEnum || (RoleEnum = {}));
;
const role1 = RoleEnum.USER;
const role2 = RoleEnum.SUPERADMIN;
console.log("Role:", role1);
console.log("Role:", role2);
export {};
