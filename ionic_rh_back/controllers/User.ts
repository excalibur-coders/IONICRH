import { AppDataSource } from "../config/database";
import { USER } from "../models/user"

const userReposiroty = AppDataSource.getRepository(USER)