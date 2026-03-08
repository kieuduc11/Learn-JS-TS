export {};

// Literal type
type TRole = "USER" | "ADMIN" | "SUPERADMIN";

// Enum type
enum RoleEnum  {
    USER,
    ADMIN,
    SUPERADMIN
};

const role1: RoleEnum = RoleEnum.USER; 
const role2: RoleEnum = RoleEnum.SUPERADMIN; 

console.log("Role:", role1);
console.log("Role:", role2);

