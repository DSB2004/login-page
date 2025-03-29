import { Router } from "express";
import UserController from "../controller/get-user";
import LoginController from "../controller/login";
import AccountController from "../controller/create-account";
import JWTMiddleware from "../middleware/jwt.middleware";
const auth_router = Router();

auth_router.post("/login", LoginController);
auth_router.post("/signup", AccountController);

const user_router = Router();
// @ts-ignore
user_router.get("/get-user", JWTMiddleware, UserController);

export { auth_router, user_router };
