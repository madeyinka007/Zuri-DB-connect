const mongoose = require('mongoose')
require('dotenv').config()
var Connector = {
    _conn: null,

    MongoDB: async function () {
        try {
            if (Connector._conn == null) {
                Connector._conn = await mongoose.connect(process.env.MONGO_URI, {
                    useNewUrlParser: true,
                    useCreateIndex: true,
                    useUnifiedTopology: true
                })
            }
            //console.log('Database Connected...')
            return Connector._conn;
        } catch (err) {
            console.error(err.message)
            process.exit(1)
        }
    }
}

module.exports = Connector;