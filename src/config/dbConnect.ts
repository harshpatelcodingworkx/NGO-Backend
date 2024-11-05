import mongoose from "mongoose"

const password = process.env.MONGO_PASSWORD
const dbName = process.env.MONGO_DB_NAME
const url = process.env.MONGO_URL
const username = process.env.MONGO_USERNAME

export const connectionOption: mongoose.ConnectOptions = {
	retryWrites: true,
	w: "majority",
}

export const mongoConnection = `mongodb+srv://${username}:${password}@${url}/${dbName}`
