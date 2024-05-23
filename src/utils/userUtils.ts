import SnowflakeId from "./generateSnowflake";

const emailRegex = /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/;


class UserUtils {
    public checkId(id:string) {
        return id && typeof id === "string" || id.length > 1;
    }
    public checkEmail(email:string) {
        return email && typeof email === "string" && email.match(emailRegex);
    }
    public checkName(name:string) {
        return name && typeof name === "string" && name.length > 3;
    }
    public checkAge(age:number) {
        return age && typeof age === "number" && age < 100 && age > 0;
    }
    public generateId() {
        return SnowflakeId().generate();
    };

}

export default new UserUtils;