const express = require('express')
const cors = require('cors')
const logger = require('morgan')
const AuthRouter = require('./routes/AuthRouter')
const ProductsRouter = require('./routes/ProductsRouter')
const UserProductsRouter = require('./routes/UserProductsRouter')
const CommentsRouter = require('./routes/CommentsRouter')

const app = express()

const PORT = process.env.PORT || 3001

//middleware
app.use(cors())
app.use(logger('dev'))
app.use(express.json())

//routes
app.use('/auth', AuthRouter)
app.use('/products', ProductsRouter)
app.use('/profile', UserProductsRouter)
app.use('/products', CommentsRouter)

app.listen(PORT, () => console.log(`Server Running On Port: ${PORT}`))
