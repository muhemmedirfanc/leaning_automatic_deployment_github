import express from "express";

const router = express.Router();

router.get("/", (req, res) => res.json({ status: "ok", message: "api is running." }).status(200));
router.get("/say-hello", (req, res) => res.json({ status: "ok", message: "Hello !." }));

export default router;
