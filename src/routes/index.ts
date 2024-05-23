import { Router } from "express";
import userRouter from "./userRouter";
import UserController from "../controllers/userController";
import UserService from "../services/UserService";
import UserData from "../data/UserData";
import userUtils from "../utils/userUtils";

const router:Router = Router();
const userService = new UserService(UserData, userUtils);
const userController = new UserController(userService)

router.use("/users", userRouter(userController))

export default router;