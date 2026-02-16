const mongoose = require('mongoose');

const connect_DB = async ()=> {
    try {
        
        await mongoose.connect(process.env.MONGO_URI)
        console.log('Mongo DB connected successfully')

    } catch (err) {
        console.log("Mongo DB connection Error", err.message)
        process.exit(1);
    }
}

module.exports = connect_DB;