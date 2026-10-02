import express from "express"
import dotenv from "dotenv"
import cookieParser from "cookie-parser"
import cors from "cors"
import connectDB from "./config/DB.js";

dotenv.config();

const app = express();
const PORT = process.env.PORT;

app.use(express.json());
app.use(cookieParser());
app.use(cors({credentials : true}));

app.listen(PORT, ()=>{
    console.log(`Server is running on port ${PORT}`)
});

connectDB();
