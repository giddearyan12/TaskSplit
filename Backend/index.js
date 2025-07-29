import express from 'express'
import mongoose from 'mongoose'
import authRouter from './Routes/authRouter.js'

const app = express()
app.use(express.json())
const port = 3000
mongoose.connect('mongodb://localhost:27017/tasklist').then(()=>{
    console.log('MongoDB Connected')
})

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.use('/auth', authRouter)


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
