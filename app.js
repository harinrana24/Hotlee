import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import { dbconnection } from "./databaseConnection/dbconnection.js";
import ErrorHandler, { errorMiddleware } from "./eroor/error.js";
import reservationRoute from "./route/reservationroute.js";
import { Reservation } from "./models/reservSchema.js";
import path from "path";
import { fileURLToPath } from "url";

const app = express();
dotenv.config({ path: "./config/config.env" });

// Define __filename and __dirname
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Static file serving
app.use(express.static(path.join(__dirname, "/client/dist")));

// CORS setup
app.use(
  cors({
    origin: [process.env.FRONTEND_URL],
    methods: ["POST", "GET", "PUT", "DELETE"],
    credentials: true
  })
);

// Body parsing middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Routes
app.use("/reservation", reservationRoute);

// Get all reservations
app.get("/reservations", async (req, res) => {
  try {
    const reservations = await Reservation.find({}).sort({ _id: -1 });
    res.json(reservations);
  } catch (error) {
    res.status(500).send("Error retrieving reservations: " + error.message);
  }
});

// Catch-all route
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "/client/dist/index.html"));
});

// Establish database connection
dbconnection();

// Error handling middleware
app.use(errorMiddleware);

export default app