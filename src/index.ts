import express from 'express'
import http from 'http'
import bodyParser from 'body-parser'
import cookieParser from 'cookie-parser'
import compression from 'compression'
import cors from 'cors'
import 'dotenv/config'
import mongoose from 'mongoose'
import router from './router'

const app = express();

const PORT = 8080

app.use(cors({
  credentials: true,
}))

app.use(compression())
app.use(cookieParser())
app.use(bodyParser.json())

const server = http.createServer(app);

server.listen(PORT, () => {
  console.log(`server running on http://localhost:${process.env.PORT}`)
})

const MONGO_URL = "mongodb+srv://yunseric:m78zCsf4tDjPUeDJ@cluster0.dfbwhhk.mongodb.net/"

mongoose.Promise = Promise;
mongoose.connect(MONGO_URL)
mongoose.connection.on('error', (error: Error) => console.log(error))
mongoose.connection.on('success', () => console.log('success') )


app.use('/', router())
