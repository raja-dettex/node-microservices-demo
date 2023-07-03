import dotenv from 'dotenv';
dotenv.config();

const port = process.env.PORT;
const mongo_uri = (process.env.MONGO_URI != undefined)?process.env.MONGO_URI:"";

export { port, mongo_uri};