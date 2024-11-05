import express from "express"
import "dotenv/config"
import { connectionOption, mongoConnection } from "./config/dbConnect"
import mongoose from "mongoose"
import cityRoute from "./routes/cityRoute"
const app = express()
const PORT: number = Number(process.env.PORT) || 8005

app.use("/api", cityRoute)

mongoose
	.connect(mongoConnection, connectionOption)
	.then(() => {
		console.log("Database connected")
		app.listen(PORT, () => {
			console.log("Server running at", PORT)
		})
	})
	.catch((err: Error) => {
		console.log("Database not connected", err)
	})
