import express from "express";
import cors from "cors";
import morgan from "morgan";
import { errorHandler } from "./middlewares/error.middleware.js";
import path from "path";

import authRoutes from "./routes/auth.routes.js";
import contactRoutes from "./routes/contact.routes.js";
import careerRoutes from "./routes/career.routes.js";

const app = express();
app.use(cors());
app.use(express.json());
app.use(morgan("dev"));

app.use("/api/auth", authRoutes);
app.use("/api/contact", contactRoutes);
app.use("/api/career", careerRoutes);

// app.use("/uploads", express.static(path.join(process.cwd(), "uploads")));
app.use(errorHandler);




export default app;
