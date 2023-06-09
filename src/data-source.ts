import "reflect-metadata"
import { DataSource } from "typeorm"
import { User } from "./entity/User"
import { Quote } from "./entity/Quote"

export const AppDataSource = new DataSource({
    type: "postgres",
    host: "localhost",
    port: 5432,
    username: "postgres",
    password: "admin",
    database: "auto", //remove: has not yet been created, testing...
    synchronize: true,
    logging: false,
    entities: [User, Quote],
    migrations: [],
    subscribers: [],
})
