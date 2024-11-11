import mongoose from "mongoose";


  export const connectDB= async function() {
    try {
    
          await  mongoose.connect( process.env.MONGODB_URI!)
  
        const connection=mongoose.connection
           
         connection.on('connected',()=>{
              console.log("the database connection is succesfull")  
         })
         connection.off('error',(err)=>{
            console.log("the database connection is failed:"+err)  
         })

    } catch (error) {
        console.log("something went wrong ",error)
    }
  }