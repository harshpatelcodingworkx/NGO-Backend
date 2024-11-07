interface Icity {
	name: string
}

interface myError extends Error {
	statusCode: number
}

interface Iuser {
	name: string
	accountNo: number
}
interface RequestType<T1 = undefined, T2 = undefined, T3 = undefined>
	extends Express.Request {
	body: T1
	query: T2
	params: T3
	
}

interface ApplicationType extends Express.Application {
	[prop: string]: any
}

interface pagination {
	search: string | undefined
	limit: number | undefined 
	page: number | undefined
}

export { Icity, myError, RequestType, ApplicationType,pagination }
