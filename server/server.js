import express from "express";
import cors from "cors";
import weatherRouter from "./Router/weather.js"

const app = express();
app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.json("Simple weather app.")
})

app.use("/weather", weatherRouter) //This is the weather router


app.listen(process.env.PORT, () => {
  console.log(`Server is listening to port ${process.env.PORT}`);
})

//weather router, controller
