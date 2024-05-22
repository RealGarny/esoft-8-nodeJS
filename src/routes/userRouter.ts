import { Router } from "express";
import UserService from "../services/UserService";

const userRouter:Router = Router();

userRouter.post("/:id", (req,res)=>{
    const user = UserService.getUser(req.params.id);

    if(user) {
        res.status(200);
        res.json(user);
    }
    
    res.status(400);
    res.send("unexpected error");
})

export default userRouter;