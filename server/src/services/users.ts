import { CreateUserRepo } from "../repos/users.js";

function CreateUserService() {
    console.log("CreateUserService function is working!");
    CreateUserRepo();
}

export { CreateUserService };
