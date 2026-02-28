import express, { urlencoded } from 'express'
import cors from 'cors'
const app = express()

app.use(express.json())
app.use(cors())
app.use(urlencoded())

app.get('/',(req,res) => {
    res.send("HELLO FROM HOME")
})

app.get('/user/:id',(req,res) => {
    const no = req.params.id
    res.send("HELLO FROM USER" + no)
})

export {app}
