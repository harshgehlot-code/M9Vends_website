// src/server.js
import app from "./app.js";
import { connectDB } from "./config/db.js";
import { ENV } from "./config/env.js";

// Handle uncaught exceptions (sync errors)
process.on("uncaughtException", (err) => {
  console.error(" Uncaught Exception:", err);
  process.exit(1);
});

// Connect Database
await connectDB();

// Start Server
const server = app.listen(ENV.PORT, () => {
  console.log(
    `M9Vends Backend Running in ${ENV.NODE_ENV} mode on PORT ${ENV.PORT}`
  );
});

// Handle unhandled promise rejections (async errors)
process.on("unhandledRejection", (err) => {
  console.error(" Unhandled Promise Rejection:", err);
  server.close(() => process.exit(1));
});
