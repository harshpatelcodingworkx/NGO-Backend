import { model, Schema } from "mongoose"
import { Icity } from "../interfaces/appInterface"

const citySchema = new Schema<Icity>(
	{
		name: {
			type: String,
			required: true,
			unique: true,
		},
	},
	{
		timestamps: true,
		versionKey: false
		
	}
)

export const city = model<Icity>("cities", citySchema) 
