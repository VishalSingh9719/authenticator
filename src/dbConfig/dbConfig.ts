import mongoose from 'mongoose'

const connect = async() =>{
  try{
    mongoose.connect(process.env.MONGO_URL!)
    const connection = mongoose.connection
    connection.on('connected', ()=>{
        console.log('mongodb connected successfully')
    })
    connection.on('error', ()=>{
        console.log('something error')
        process.exit()
    })
  }catch(error : any){
    console.log(error.message)
  }
}
export default connect