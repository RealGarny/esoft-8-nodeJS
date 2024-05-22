const data:userData[] = [
    {
        id: "134151161",
        name: "Todd",
        age: 12
    },
    {
        id: "216278434",
        name: "Charley",
        age: 21
    },
    {
        id: "135623",
        name: "Charley",
        age: 21
    },
]

interface userData {
    id:string,
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