import cors from "cors";
import express from "express";
const app = express();

import dotenv from "dotenv";
dotenv.config();
import "express-async-errors";
import morgan from "morgan";

// db and authenticate user
import connectDB from "./db/connect.js";

// routers
import authRouter from "./routes/authRoutes.js";
import wishRouter from "./routes/wishRoutes.js";
import sellRouter from "./routes/sellRouters.js";
// middleware
import notFoundMiddleware from "./middleware/not-found.js";
import errorHandlerMiddleware from "./middleware/error-handler.js";
import authenticateUser from "./middleware/auth.js";
app.use(cors());
if (process.env.NODE_ENV !== "production") {
  app.use(morgan("dev"));
}
app.use(express.json());

app.get("/api/v1", (req, res) => {
  //throw new Error("Tes doang")
  res.json({ msg: "welcome" });
});

app.use("/api/v1/auth", authRouter);
app.use("/api/v1/wishlist", wishRouter);
app.use("/api/v1/sell",sellRouter);
app.use(notFoundMiddleware);
app.use(errorHandlerMiddleware);
const port = process.env.PORT;

const start = async () => {
  try {
    await connectDB(process.env.MONGO_URL);
    app.listen(port, () => {
      console.log(`Server is listening on port ${port}`);
    });
  } catch (error) {
    console.log(error);
  }
};

start();
