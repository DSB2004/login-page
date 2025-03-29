import express from "express";
import { auth_router, user_router } from "./routes";
import LoggerMiddleware from "./middleware/logger.middleware";
import cors from "cors";
const app = express();

const corsOptions = {
  origin: "*",
  methods: ["GET", "POST", "PUT", "DELETE"],
  allowedHeaders: ["Content-Type", "Authorization"],
  preflightContinue: false,
};

app.use(cors(corsOptions));
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(LoggerMiddleware);
app.use("/api/user", user_router);
app.use("/auth", auth_router);

export default app;
