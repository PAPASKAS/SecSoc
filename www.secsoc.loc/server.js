const { createServer } = require('https')
const { parse } = require('url')
const next = require('next')
const fs = require('fs')

const dev = process.env.NODE_ENV !== 'production'
const hostname = '0.0.0.0'
const port = 443
const app = next({ dev, hostname, port })
const handle = app.getRequestHandler()

const options = {
    pfx: fs.readFileSync(__dirname + '/cert/server.pfx'),
    passphrase: 'nC@U-T!gm23_C5_6',
}

app.prepare().then(() => {
    createServer(options, (req, res) => {
        try {
            const parsedUrl = parse(req.url, true)
            handle(req, res, parsedUrl)
        } catch (err) {
            console.error('Error occurred handling', req.url, err)
            res.statusCode = 500
            res.end('internal server error')
        }
    }).listen(port, (err) => {
        if (err) throw err
        console.log(`> Ready on https://${hostname}:${port}`)
    })
})