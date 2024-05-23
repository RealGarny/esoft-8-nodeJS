interface userData {
    id:string,
    email:string,
    name:string,
    age:number
}

type userDataPartial = Partial<userData>;

class UserService {
    private userData;
    private userUtils;
    constructor(userData:any, userUtils:any) {
        this.userData = userData;
        this.userUtils = userUtils;
    }

    public getUser(id: string):userData | {} {
        if(!this.userUtils.checkId) {
            return {};
        }
        return this.userData.getOneBy("id", id);
    }

    public getAllUsers():userData[] {
        return this.userData.getAll();
    }

    public createUser(userParams:userData):userData | undefined {
        if(
            !this.userUtils.checkAge(userParams.age) ||
            !this.userUtils.checkEmail(userParams.email) ||
            !this.userUtils.checkName(userParams.name) ||
            Object.keys(this.userData.getOneBy("email", userParams.email)).length !== 0
        ) { return undefined }

        return this.userData.create({...userParams, id:this.userUtils.generateId()});
    }

    public updateUser(id:string, userData:userDataPartial):userData | undefined {
        if(!this.userUtils.checkId(id) || typeof userData !== "object" || Object.keys(userData).length < 1)
        { return undefined }
        
        delete userData["id"];
        return this.userData.update(id, userData);
    }

    public deleteUser(id:string):boolean {
        if(
            !this.userUtils.checkId(id)
        ) { return false };
        
        return this.userData.delete(id);
    }
}

export default UserService;