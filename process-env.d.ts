namespace NodeJS {
	interface ProcessEnv {
		PORT: number | undefined
		MONGO_URL : string | undefined
		MONGO_PASSWORD : string | undefined
		MONGO_USERNAME : string | undefined
		MONGO_DB_NAME : string | undefined
	}
}
