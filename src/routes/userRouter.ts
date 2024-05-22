import { Router } from "express";

const userRouter = (userController:any) => {
    const userRouter:Router = Router();

    userRouter.get("", userController.getUsers)
    userRouter.get("/:id", userController.getUser)
    userRouter.post("", userController.createUser)
    userRouter.put("/:id", userController.updateUser)
    userRouter.delete("/:id", userController.deleteUser)

    return userRouter;
}

export default userRouter;