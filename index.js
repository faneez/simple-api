import express from "express"
import mongoose from "mongoose"
import fileUpload from "express-fileupload"
import postRouter from "./router.js"

const PORT = 5000
const DB_URL = "mongodb://0.0.0.0:27017/express-learn"

const app = express()
app.use(express.json())
app.use(express.static("static"))
app.use(fileUpload({}))
app.use("/api", postRouter)

async function startApp() {
	try {
		await mongoose.connect(DB_URL)
		app.listen(PORT, () => {
			console.log("Сервер запущен!")
		})
	} catch (e) {
		console.log(e)
	}
}

startApp()
