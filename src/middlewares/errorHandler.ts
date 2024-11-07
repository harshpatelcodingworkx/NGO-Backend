import { Request, Response, NextFunction } from "express"
import { myError } from "../interfaces/appInterface"

class BackendError extends Error implements myError {
	public statusCode: number
	public message: string

	constructor(statusCode: number, message: string) {
		super()
		this.statusCode = statusCode
		this.message = message
	}
}

const requestErrorHandler = (
	err: myError,
	req: Request,
	res: Response,
	next: NextFunction
) => {
	const message: string = err.message
	const statusCode: number = err.statusCode
	res.status(statusCode).json({
		message: message,
		errStack: err.stack,
	})
}

export { BackendError, requestErrorHandler }
