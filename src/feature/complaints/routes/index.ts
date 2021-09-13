
import express from "express"
import createComplaint from "./createcomplaint/create_complait";

const router = express.Router();
router.use("/comlpait",createComplaint);
export default router;