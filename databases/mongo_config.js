const mongoose = require('mongoose')

const dbConnection = async() =>{
    try{
        await mongoose.connect(
            'mongodb://mongo/enviame',
            {
                useNewUrlParser: true,
                useUnifiedTopology: true,
                useCreateIndex: true,
                useFindAndModify: false
            })

        console.log('Database Online')

    } catch (e) {
        console.log(e)
        throw new Error('Error connection mongo')
    }

}

module.exports = {
    dbConnection
}
