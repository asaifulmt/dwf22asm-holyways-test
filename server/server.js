const express = require('express')
const cors = require('cors')
const router = require('./routers')

const app = express()

app.use(cors())
app.use(express.json())

app.get('/', (_, res) => res.send('server is alive!'))
app.use('/api/v1', router)
app.use('/uploads', express.static('uploads'))

const port = 5000

app.listen(port, () => console.log(`Running on port ${port}`))
