require('dotenv').config()
const express = require('express')
const app = express()
const port = process.env.PORT || 4000
const routes = require('./routes')
const cors = require('cors')

app.use(cors())
app.use(express.json())
app.use(express.urlencoded({extended: false}))

app.use("/", routes)

app.listen(port, () => {
  console.log(`This app running at http://localhost:${port}`)
})

module.exports = app
