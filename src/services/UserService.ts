import UserData from "../data/UserData";

interface userData {
    id:string,
    name:string,
    age:number
}

class UserService {
    public getUser(id: string):userData | {} {
        if(typeof id !== "string" || id.length < 1) {
            return {};
        }
        return UserData.getOne("id", id);
    }

    public getAllUsers():userData[] {
        return[];
    }

    public createUser(userParams:userData):userData | undefined {
        return undefined;
    }

    public updateUser(userID:string):userData | undefined {
        return undefined;
    }
}

export default new UserService;