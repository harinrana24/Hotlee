import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import { dbconnection } from "./databaseConnection/dbconnection.js"
import ErrorHandler, { errorMiddleware } from "./eroor/error.js";
import reservationRoute from "./route/reservationroute.js"
import { Reservation } from "./models/reservSchema.js";
import path from "path" 
import { fileURLToPath } from "url";

const app = express();
dotenv.config({path:"./config/config.env"});

app.use(cors({
    
    origin:[process.env.FRONTEND_URL],
    methods: ["POST", "GET", "PUT", "DELETE"],
    credentials:true
}))
// const __filename = fileURLToPath(import.meta.url)
// const __dirname = path.dirname(__filename)
// app.use(express.static(path.join(__dirname, "/client/dist")))

// app.get("*", (req, res) => {
//     res.sendFile(path.join(__dirname,"/client/dist/index.html"))
// })

app.use(express.json());
app.use(express.urlencoded({extended:true}))

app.use("/reservation", reservationRoute)

// Get all reservations
app.get('/reservations', async (req, res) => {
    try {
        const reservations = await Reservation.find({}).sort({ _id: -1 });  // Sorting by start date
        res.json(reservations);
    } catch (error) {
        res.status(500).send("Error retrieving reservations: " + error.message);
    }
});

dbconnection();



app.use(errorMiddleware)
export default app;