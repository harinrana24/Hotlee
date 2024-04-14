import mongoose from "mongoose";

export const dbconnection = () =>{
mongoose.connect(process.env.MONGO_URI, {
    dbName:"Resturant_reservation"
}).then(()=>{
    console.log("Connected successfully")
}).catch((err)=>{
    console.log(`error occured during connection ${err}`)
});
}