import express from "express";

const router = express.Router();

router.get("/", (req, res) => res.json({ status: "ok", message: "api is running." }).status(200));

export default router;
