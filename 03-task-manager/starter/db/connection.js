import mongoose from "mongoose";

const connectDB = async (url) => {
    try{
        await mongoose.connect(url, {
            useCreateIndex: true,
            useNewUrlParser: true,
            useFindAndModify: false,
            useUnifiedTopology:true
        });
        console.log('Successfully connected to DB...')
    }catch(err){
        console.log(err)
    }
};

export { connectDB };
