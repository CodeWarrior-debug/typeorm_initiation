import "reflect-metadata"
import { DataSource } from "typeorm"
import { User } from "./entity/User"
import { Quote } from "./entity/Quote"
import { userQuoteEval } from "./entity/userQuoteEval"

export const AppDataSource = new DataSource({
    type: "postgres",
    host: "localhost",
    port: 5432,
    username: "postgres",
    password: "admin",
    database: "auto",
    synchronize: true,
    logging: false,
    entities: [User, Quote, userQuoteEval],
    migrations: [],
    subscribers: [],
})