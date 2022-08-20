const express = require('express')
const app = express()
const mongoose = require('mongoose')
const dotenv = require('dotenv')
dotenv.config()
const morgan = require('morgan')
const helmet = require('helmet')

// middlewares
app.use(express.json())
app.use(helmet())
app.use(morgan("common"))

const userRoute = require('./routes/users')
const authRoute = require('./routes/auth')
const postRoute = require('./routes/posts')



app.use('/api/users', userRoute)
app.use('/api/auth', authRoute)
app.use('./api/posts', postRoute)


mongoose.connect(process.env.MONGO_URL, { useNewUrlParser: true }, () => {
    console.log('MongoDb connected')
})
app.listen(8800, () => console.log('server running'))