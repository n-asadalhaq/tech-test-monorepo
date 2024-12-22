import express from "express";
import userRoutes from "../routes/userRoutes";

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use("/api", userRoutes);

export default app;
