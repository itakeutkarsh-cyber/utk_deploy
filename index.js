require('dotenv').config()
const express = require('express')

const app = express()

const port = 7456

app.get('/', (req, res) => {
  res.send('Hello World!')
}
)
app.get('/facebook', (req, res) => {
    res.send('utkdotcom')
})

app.get('/login', (req, res) => {
  res.send('<h1>Please login at WWW.utkdotcom......<h1>')
})

app.listen(process.env.PORT, () => {
  console.log(`Example app listening on port ${port}`)
}
)
