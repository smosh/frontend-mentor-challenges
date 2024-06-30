// initialize express
const express = require('express')
const app = express()
const port = 3000

// Setup Express
app.use(express.static('public'))
app.use(express.static('assets/images'))
app.use(express.static('assets/css'))

app.listen(port, () => {
    console.log(`App listening on port ${port}`)
})