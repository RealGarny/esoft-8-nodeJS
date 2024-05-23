import { Router } from "express";

const userRouter = (userController:any) => {
    const userRouter:Router = Router();

    userRouter.get("", userController.getUsers)
    userRouter.get("/:id(\\d{0,})", userController.getUser)
    userRouter.post("", userController.createUser)
    userRouter.put("/:id", userController.updateUser)
    userRouter.delete("/:id", userController.deleteUser)
    userRouter.get("/age/:age(\\d{0,})", userController.getFilteredByAge)
    userRouter.get("/domain/:domain", userController.getFilteredByDomain)
    userRouter.get("/sorted", userController.getSortedByName)

    return userRouter;
}

export default userRouter;