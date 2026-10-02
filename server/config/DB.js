import mongoose from "mongoose";

const connectDB = async()=>{
    try{
        await mongoose.connect(process.env.MONGODB)
        console.log("DB is connected");
    }catch{
        console.log("error in connecting DB")
    }
}

export default connectDB