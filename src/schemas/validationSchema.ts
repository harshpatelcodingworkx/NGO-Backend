import Joi from "joi"
import { Icity } from "../interfaces/appInterface"

const citySchema = Joi.object<Icity>({
	name: Joi.string()
		.trim()
		.pattern(/^[a-zA-Z ]+$/)
		.required()
		.messages({
			"string.pattern.base": "Invalid city name",
			"any.required": "City name cannot be empty",
			"string.empty": "City name cannot be empty",
		}),
})

export { citySchema }
