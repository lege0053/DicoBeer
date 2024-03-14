import * as dotenv from "dotenv";
dotenv.config();

const { MONGODB_URL, PORT, JWT_SECRET } = process.env;

export { MONGODB_URL, PORT, JWT_SECRET };