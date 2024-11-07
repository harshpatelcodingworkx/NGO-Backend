import express, { IRouter } from "express"
import { addCity, listCities } from "../controllers/cityController"
import { validate } from "../middlewares/validator"
import { citySchema } from "../schemas/validationSchema"
const router = express.Router()

router.post("/city",validate(citySchema) ,addCity)
router.get("/city" ,listCities)
export default router
