require('dotenv').config()
const express = require('express')
const next = require('next')

const PORT = parseInt(process.env.PORT, 10) || 8000
const dev = process.env.NODE_ENV !== 'production'

const app = next({ dev })
const handler = app.getRequestHandler()

app.prepare().then(() => {
    const server = express()

    server.all('*', (req, res) => {
        return handler(req, res)
    })

    server.listen(PORT, () => {
        console.log(`Server running on port: http://localhost:${PORT}`)
        console.log(`Environment: ${process.env.NODE_ENV.toUpperCase()}`)
    })
})
