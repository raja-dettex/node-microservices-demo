import dotenv from 'dotenv';
dotenv.config();
const port = (process.env.NODE_ENV=="dev")?process.env.DEV_PORT:(process.env.NODE_ENV=="test")?process.env.TEST_PORT:3000;

    
const password = process.env.PASSWORD;
const  database = (process.env.NODE_ENV=="dev")?process.env.DEV_DB:(process.env.NODE_ENV=="test")?process.env.TEST_DB:"";
const db_host = process.env.DB_HOST;
const username =  process.env.DB_USERNAME;


export { port , db_host, username, password, database}