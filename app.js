import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import { dbconnection } from "./databaseConnection/dbconnection.js"
import ErrorHandler, { errorMiddleware } from "./eroor/error.js";
import reservationRoute from "./route/reservationroute.js"
import path from "path" 
import { fileURLToPath } from "url";

const app = express();
dotenv.config({path:"./config/config.env"});

app.use(cors({
    
    origin:[process.env.FRONTEND_URL],
    methods: ["POST", "GET", "PUT", "DELETE"],
    credentials:true
}))

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)
app.use(express.static(path.join(__dirname, "/client/dist")))


app.get("*", (res,req) => {
    res.sendFile(path.join(__dirname,"/client/dist/index.html"))
})

app.use(express.json());
app.use(express.urlencoded({extended:true}))

app.use("/reservation", reservationRoute)
dbconnection();



app.use(errorMiddleware)
export default app;