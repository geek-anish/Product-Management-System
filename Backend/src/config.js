import { config } from "dotenv";
config();


export const port = process.env.PORT;
export const dbUrl=process.env.DB_URL;
export const user=process.env.USER;
export const pass=process.env.PASS;
export const secretKey=process.env.SECRET_KEY;



