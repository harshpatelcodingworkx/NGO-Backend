import express from "express"
import { addCity } from "../controllers/cityController"
const router = express.Router()

router.get("/",addCity)
export default router