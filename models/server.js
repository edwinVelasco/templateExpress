const express = require('express')
const cors = require('cors')
const { dbConnection } = require('../databases/mongo_config')

class Server {
    constructor() {
        this.app = express()
        this.port = 8080
        this.modelPath = '/api/model'

        this.connectDBMongoose()

        this.middlewares()

        this.routes()
    }
    async connectDBMongoose(){
        await dbConnection()
    }
    routes() {
        this.app.use(this.modelPath, require('../routes/model'))
        // ...
    }
    listen(){
        this.app.listen(this.port, () => {
            console.log(`Example app listening at http://localhost:${this.port}`)
        })
    }
    middlewares(){
        // CORS
        this.app.use(cors())

        // body
        this.app.use( express.json() )

        // ...

    }
}

module.exports = Server;
