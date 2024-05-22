const data:userData[] = [
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

class Data {
    public getOne(key:keyof userData, condition:any): userData | {} {
        let result = data.find((item)=> item[key] === condition)
        if(result) {
            return result;
        }
        return {};
    }
}

export default new Data();