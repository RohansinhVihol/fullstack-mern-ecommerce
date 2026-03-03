import express  from 'express'
import cors from 'cors'
import { errorMiddleware } from './middlewares/error.middleware.js'
import userRoutes from './routes/user.routes.js'
import productRoutes from './routes/product.routes.js'
 
const app = express()
app.use(express.json())
app.use(cors())
app.use(express.urlencoded({
    extended:true
}))

app.use('/api/v1/user', userRoutes)
app.use('/api/v1/product', productRoutes)

app.use(errorMiddleware)

export {app}
