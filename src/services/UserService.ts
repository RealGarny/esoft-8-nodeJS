interface userData {
    id:string,
    email:string,
    name:string,
    age:number
}

class UserService {
    private userData;
    constructor(userData:any) {
        this.userData = userData;
    }

    public getUser(id: string):userData | {} {
        if(typeof id !== "string" || id.length < 1) {
            return {};
        }
        return this.userData.getById("id", id);
    }

    public getAllUsers():userData[] {
        return this.userData.getAll();
    }

    public createUser(userParams:userData):userData | undefined {
        return this.userData.create();
    }

    public updateUser(id:string, userData:userData):userData | undefined {
        return this.userData.update(id, userData);
    }
}

export default UserService;