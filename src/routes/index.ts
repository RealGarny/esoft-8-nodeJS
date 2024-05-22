import { Router } from "express";
import userRouter from "./userRouter";
import UserController from "../controllers/userController";
import UserService from "../services/UserService";

const router:Router = Router();
const userController = new UserController(UserService)

router.use("/users", userRouter(userController))

export default router;