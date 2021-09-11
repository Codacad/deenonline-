const mongoose = require('mongoose');

// mongodb://localhost:27017/students
const connectDatabase = async () => {
    try{
        const conn = await mongoose.connect(process.env.MONGODB, {
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