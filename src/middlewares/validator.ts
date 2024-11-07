import Joi from "joi"
import { RequestType } from "../interfaces/appInterface"
import {Request, Response, NextFunction } from "express"
import { BackendError } from "./errorHandler"

export const validate = (schema: Joi.Schema) => {
	return async (
		req: Request,
		res: Response,
		next: NextFunction
	) => {
		try {
			const result = await schema.validateAsync(req.body)
			// console.log("result", result) 
            next();
		} catch (err: any) {
			console.log("err from validate schema", err)
            return next(new BackendError(422, err.message))
		}
	}
}
