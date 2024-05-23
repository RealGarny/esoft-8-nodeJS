
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
type sortOptions = "asc" | "desc";
type returnSomeUsers = userData[] | boolean;

class UserData {
    public getOneBy(keyname:keyof userData, value:any): userData | {} {
        let result = data.find((item)=> item[keyname] === value)
        if(result) {
            return result;
        }
        return {};
    }

    public getAllBy(keyname:keyof userData, value:any): userData[] {
        /*
        if(typeof value === "function") {
            return data.filter(value)
        }
        */
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

    public update(id:userId, userParams:userDataPartial): userData | boolean | {} {
        let user = this.getOneBy("id", id);
        if(Object.keys(user).length < 1) {
            return false;
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

    public getAgeMoreThan(age:number):returnSomeUsers {
        if(typeof age !== "number") return false;
        return(data.filter(item => age < item.age))
    }

    public getSortedByName(type:sortOptions):returnSomeUsers {
        let dataCopy = [...data];
        if(typeof type !== "string" || type.length < 1) return false;

        dataCopy.sort((a, b) => a.name.localeCompare(b.name));
        return dataCopy;
    }

    public getFilteredByDomain(domain:string):returnSomeUsers {
        if(typeof domain !== "string") return false;
        return data.filter((user) => user.email.replace(/.*@/, "") === domain)
    }
}

export default new UserData();