import "dotenv/config";
import express from "express";
import connectDB from "./infrastructure/db";

import { clerkMiddleware } from "@clerk/express";
import cors from "cors";
import bookingsRouter from "./api/booking";
import hotelsRouter from "./api/hotel";
import globalErrorHandlingMiddleware from "./api/middlewares/global-error-handling-middleware";

// Create an Express instance
const app = express();

app.use(clerkMiddleware());
// Middleware to parse JSON data in the request body
app.use(express.json());
app.use(cors({origin:"aidf-horizon-frontend-sithija.netlify.app"}));



// app.use((req, res, next) => {
//   console.log("Hello World");
//   next();
// });

app.use("/api/hotels", hotelsRouter);
app.use("/api/bookings", bookingsRouter);

app.use(globalErrorHandlingMiddleware);



connectDB();
const PORT = process.env.PORT || 8000;
// Define the port to run the server
//const PORT = 8000;
app.listen(PORT, () => console.log(`Server is running on port ${PORT}...`));
