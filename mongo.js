const mongoose=require("mongoose")
mongoose.connect("mongodb://localhost:3000/K-store")
.then(()=>{
    console.log("mongodb connected");
})
.catch(()=>{
    console.log('failed');
})


const newSchema=new mongoose.Schema({
     email:{
        type:String,
        required:true
     },

        password:{
           type:String,
           required:true
        }   

})

const collection = mongoose.model("collection",newSchema)

module.export=collection 


