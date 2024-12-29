import { CreateUserService } from "../services/users.js";

function CreateUserHandler() {
    console.log("CreateUserHandler is working!");
    CreateUserService();
}

export { CreateUserHandler };
