import userUtils from "../utils/userUtils";
import UserUtils from "../utils/userUtils";

let data:userData[] = [
    {
        id: "134151161",
        email: "basic@mail.ru",
        name: "Todd",
        age: 12
    },
    {
        id: "216278434",
        email: "basic@yahoo.com",
        name: "Charley",
        age: 21
    },
    {
        id: "135623",
        email: "basic@gmail.com",
        name: "Charley",
        age: 21
    },
]

interface userData {
    id:string,
    email:string,
    name:string,
    age:number
}

type userId = userData["id"]
type userDataPartial = Partial<userData>;

class UserData {
    public getOneBy(keyname:keyof userData, value:any): userData | {} {
        let result = data.find((item)=> item[keyname] === value)
        if(result) {
            return result;
        }
        return {};
    }

    public getAllBy(keyname:keyof userData, value:any): userData[] {
        return data.filter((item)=> item[keyname] === value);
    }

    public getAll(): userData[] {
        return data;
    }

    public create(user: userData): userData {

        const createdUser: userData = {
            id: user.id,
            name: user.name,
            email: user.email,
            age: user.age
        }

        data.push(createdUser)
        return createdUser;
    }

    public delete(id:userId): boolean {
        if(Object.keys(this.getOneBy("id", id)).length < 1) {
            return false;
        }

        data = data.filter((item)=> item.id !== id);
        return true;
    }

    public update(id:userId, userParams:userDataPartial): userData | undefined  | {} {
        let user = this.getOneBy("id", id);
        if(Object.keys(user).length < 1) {
            return undefined;
        }

        for(let userParam in userParams) {
            for(let userKey in user) {
                if(userKey === userParam) {
                    user = {...user, [userKey]: userParams[userParam as keyof userDataPartial]}
                }
            }
        }

        const userIndex = data.findIndex(user => user.id === id);
        console.log(userIndex);

        data[userIndex] = user as userData;

        return user;
    }
}

export default new UserData();