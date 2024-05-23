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
        const user = this.userService.createUser(req.body)
        if(user) {
            res.status(200).json(user);
        } else {
            res.status(400).json({error:"user was not created"});
        }
    }
    public getUsers:controllerMethod = (req, res)=>{
        const users = this.userService.getAllUsers();
        if(users) {
            res.status(200).json(users);
        } else {
            res.status(400).json({error:"unexpected error"});
        }
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
        const updatedUser = this.userService.updateUser(req.params.id, req.body)
        if(updatedUser) {
            res.status(200).json(updatedUser);
        } else {
            res.status(400).json({error:"user was not updated"});
        }
    }
    public deleteUser:controllerMethod = (req, res) => {
        const isUserDeleted = this.userService.deleteUser(req.params.id)
        if(isUserDeleted) {
            res.status(200).json({success: "user was deleted successfully"});
        } else {
            res.status(400).json({error:"user was not deleted"});
        }
    }
}

export default UserController;