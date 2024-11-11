import mongoose from 'mongoose'


const userSchema= new mongoose.Schema({
    name:{
        type:String,
        require:true,
        unique:true,
    },
    email:{
        type:String,
        require:true,
        unique:true,
    },
    message:{
        type:String,
      
        
    },
   

})

   const Data= mongoose.models.users||mongoose.model('datas',userSchema)

   export default Data