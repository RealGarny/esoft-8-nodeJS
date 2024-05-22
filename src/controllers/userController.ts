import { Request, Response } from "express";

type userRequest = Request;
type userResponse = Response;

type controllerMethod = (req:userRequest, res:userResponse) => void;

interface userController {
    userService:any;
    createUser:controllerMethod;
    getUsers:controllerMethod;
    getUser:controllerMethod;
    updateUser:controllerMethod;
    deleteUser:controllerMethod;
}

class UserController implements userController {
    userService;
    constructor(userService:any) {
        this.userService = userService
    }

    public createUser:controllerMethod = (req, res) => {
        const user = this.userService.createUser(req.body.user)
        if(user) {
            res.status(200).json(user);
        } else {
            res.status(400).json({error:"user was not created"});
        }
    }
    public getUsers:controllerMethod = (req,res)=>{
        res.send("GET /users")
    }

    public getUser:controllerMethod = (req, res) => {
        const user = this.userService.getUser(req.params.id);
        if(user) {
            res.status(200).json(user);
        } else{
            res.status(400).json({error:"unexpected error"});
        }
    }

    public updateUser:controllerMethod = (req, res) => {
        res.send("PUT /users")
    }
    public deleteUser:controllerMethod = (req, res) => {
        res.send("DELETE /users")
    }
}

export default UserController;