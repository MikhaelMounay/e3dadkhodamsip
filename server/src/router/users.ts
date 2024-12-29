import { CreateUserHandler } from "../handlers/users.js";
import { Router } from "express";

const usersRouter = Router();

usersRouter.get("/health", CreateUserHandler);

export default usersRouter;
