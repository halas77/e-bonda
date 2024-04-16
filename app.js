import express from "express";
import dotenv from "dotenv";
import userRoute from "./routes/userRoute.js";

dotenv.config();
const app = express();
app.use(express.json());

app.use("/users", userRoute);

const port = process.env.PORT || 3000;

app.listen(port, () => {
  console.log("Server is listening on port 3000");
});
