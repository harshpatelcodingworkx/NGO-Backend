import { Request, Response, NextFunction } from "express"
import { city } from "../models/city"
import { BackendError } from "../middlewares/errorHandler"
import { Icity, pagination, RequestType } from "../interfaces/appInterface"

const addCity = async (req: Request, res: Response, next: NextFunction) => {
	try {
		const { name }: Icity = req.body
		const result = await city.create({
			name,
		})

		if (!name) {
			return next(new BackendError(500, "unable to add city"))
		}
		res.status(201).json({
			status: "success",
			message: "City added successfully",
			result: result,
		})
	} catch (err: any) {
		// console.log(err)
		return next(new BackendError(500, err.errmsg))
	}
}

const listCities = async (
	req: RequestType<unknown, pagination, unknown>,
	res: Response,
	next: NextFunction
) => {
	const { search = "" } = req.query
	const searchRegex = new RegExp(search, "i")
	const [{ data, totaCities }] = await city.aggregate([
		{
			$match: { name: { $regex: searchRegex } },
		},
		{
			$facet: {
				data: [{ $sort: { name: 1 } }],
				totaCities: [{ $count: "total" }],
			},
		},
	])

	if (!data) {
		return next(new BackendError(500, "unable to find cities"))
	}

	res.status(200).json({
		status: "success",
		result: data,
		totaCities: totaCities,
	})
}

export { addCity, listCities }
