import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();

const USERNAME = process.env.DB_USERNAME;
const PASSWORD = process.env.DB_PASSWORD;

const Connection = async () =>{
    const URL =
      `mongodb://${USERNAME}:${PASSWORD}@ac-taxiwe0-shard-00-00.4ial8lb.mongodb.net:27017,ac-taxiwe0-shard-00-01.4ial8lb.mongodb.net:27017,ac-taxiwe0-shard-00-02.4ial8lb.mongodb.net:27017/?ssl=true&replicaSet=atlas-i4p1tx-shard-0&authSource=admin&retryWrites=true&w=majority`;
    try{
        await mongoose.connect(URL,{useUnifiedTopology:true});
        console.log("Database connected successfully ! ")
    }
    catch(error)
    {
        console.log('Error while  in connecting with database',error)
    }
}

export default Connection