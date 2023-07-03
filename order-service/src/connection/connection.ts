import { DataSource } from "typeorm";
import { db_host, username, password, database } from "../constants/constants";



export const postgresDataSource  = new DataSource({
    type: "postgres",
    host: db_host,
    port: 5432,
    username: username,
    password: password,
    database: database,
    entities: [
        "src/entity/*.ts"
    ],
    logging: false, 
    synchronize: true
});

export const createConnection = async () => {
    await postgresDataSource.initialize();
}