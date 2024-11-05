import { Request, Response, NextFunction } from "express"
import { city } from "../models/city"

const addCity = async (req: Request, res: Response, next: NextFunction) => {
	const response = await city.create({
		name: "Delhi",
	})
	res.status(200).json({
		status: "success",
		result: response,
	})
}

export { addCity }
