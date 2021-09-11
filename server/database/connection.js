const mongoose = require('mongoose');

// process.env.MONGODB
const connectDatabase = async () => {
    try{
        const conn = await mongoose.connect("mongodb://localhost:27017/students", {
            useNewUrlParser:true,
            useUnifiedTopology:true,
            useFindAndModify:false,
            useCreateIndex:true
        })
        console.log(`MongoDB conntected on: ${conn.connection.host}`)
        
    }catch(err){
       console.log(err)
       process.exit(1)
    }
}

module.exports = connectDatabase