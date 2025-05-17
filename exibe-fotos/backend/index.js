require("dotenv").config()

const axios = require("axios")
const express = require("express")
const cors = require("cors")
const app = express()
app.use(express.json())
app.use(cors())

const pexelsClient = axios.create({
    baseURL: "https://api.pexels.com/v1/",
    headers: {
        Authorization: process.env.PEXELS_KEY
    }
})

// parâmetros de path: localhost/exemplo/hippo
// parâmetros de query: localhost:exemplo?query=hippo

app.get("/search", async (req, res) => {
    try {
        const result = await pexelsClient.get("/search", {
            params: {
                query: req.query.query,
                per_page: req.query.per_page || 16
            }
        })
        res.status(200).json(result.data)
    }

    catch(e) {
        res.status(500).end()
    }
    console.log(req.query.query)
    res.end()
})

const port = 3000
app.listen(
    port,
    console.log(`Backend ok. Port: ${port}`)
)