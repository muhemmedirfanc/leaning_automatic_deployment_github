import express from "express";

const app = express();

app.use(express.json());

app.use("/", (req, res) => res.json({ status: "ok" }));

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`server started at port ${PORT} `));
