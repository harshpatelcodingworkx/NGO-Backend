import express, { Express } from "express"
import "dotenv/config"
import { connectionOption, mongoConnection } from "./config/dbConnect"
import mongoose from "mongoose"
import cityRoute from "./routes/cityRoute"
import { requestErrorHandler } from "./middlewares/errorHandler"
import { ApplicationType } from "./interfaces/appInterface"

const app: Express = express()
const PORT: number = Number(process.env.PORT) || 8005

app.use(express.json())
app.use("/api", cityRoute)

app.use(requestErrorHandler)
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
