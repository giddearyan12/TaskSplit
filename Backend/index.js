import express from 'express'
import mongoose from 'mongoose'
import authRouter from './routes/authRouter.js'
import agentRouter from './routes/agentRouter.js'
import csvRouter from './routes/csvRouter.js'

import multer from 'multer'
import cors from 'cors'

const app = express()
app.use(express.json())
app.use(cors())
const port = 3000
mongoose.connect('mongodb://localhost:27017/tasklist').then(()=>{
    console.log('MongoDB Connected')
})

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.use('/auth', authRouter)
app.use('/api', csvRouter)
app.use('/agent', agentRouter)


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
