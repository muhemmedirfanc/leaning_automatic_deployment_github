import express from "express";
import router from "./routes/routes.js";

const app = express();

app.use(express.json());

app.use("/", (req, res) => res.json({ status: "ok" }));
app.use("/api", router);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`server started at port ${PORT} `));
