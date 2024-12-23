import express, { Express } from "express";
import userRoutes from "../routes/userRoutes";

const app: Express = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use("/api", userRoutes);

export default app;
