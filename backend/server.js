import express from "express";
import cors from "cors";
import { connectDB } from "./config/db.js";
import foodRouter from "./routers/foodRoutes.js";
import userRouter from "./routers/userRouters.js";
import 'dotenv/config'
import cartRouter from "./routers/cartRoutes.js";
import orderRouter from "./routers/orderRoute.js";



// App config
const app = express();
const port = 4000;

// Middleware
app.use(express.json());
app.use(cors());
app.use('/uploads', express.static('uploads')); // Serve the uploads folder as static

// Database connection
connectDB();

// API endpoints
app.use("/api/food", foodRouter);
app.use("/api/user", userRouter);
app.use("/api/cart", cartRouter);
app.use("/api/order", orderRouter);



app.use("/images",express.static("uploads"))

app.get("/", (req, res) => {
    res.send("API Working");
});

app.listen(port, () => {
    console.log(`Server started on http://localhost:${port}`);
});
