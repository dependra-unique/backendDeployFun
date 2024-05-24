require('dotenv').config()
const express = require('express')
const app = express()

const port = 3000

const userData = {
  "login": "dependra-unique",
  "email": null,
  "country": "india",
  "district": "bulandshahr",
  "education": "b.tech",
  "id": 1234,
  "type": "user",
  "name": "unique"

}

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get("/facebook", (req, res) => {
    res.send("Hey Dependra")
})

app.get("/login", (req, res) => {
    res.send("<h1>Moz kar di bhai ne to</h1>")
})

app.get("/user", (req, res) => {
  res.json(userData)
})



app.listen(process.env.PORT, () => {
  console.log(`Example app listening on port ${port}`)
})