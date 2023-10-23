"use client"

import {useState} from 'react'
import axios from 'axios'
import { useRouter } from 'next/navigation'
const Signin = () =>{
 const [user, setUser] = useState({
    email:"",
    password:""
 })
 const router = useRouter()
 const handleSignin = async()=>{
    try{
       const response = await axios.post("/api/userAuth/login", user);
       router.push('/profile')
    
    }catch(error){
         console.log('error')
   }
 }
    return(
      <div className='min-h-screen m-auto flex justify-center'>

        <div className='flex justify-center item-center'>
        <div className='p-2 flex flex-col py-2 justify-center item-center w-2/4'>
            <img src="https://images.pexels.com/photos/7648027/pexels-photo-7648027.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"/>
        </div>
        <div className='p-12 flex flex-col w-2/4 justify-center item-center'>
         <p className='mx-auto mb-4 text-3xl font-bold'>Login Form</p>
            <label>email</label>
            <input 
            className='p-2 border-2 border-grey-300 focus:outline-none focus:border-grey-600 text-black rounded-lg mb-4'
            id="email"
            name="username"
            type='text'
            value={user.email}
            onChange={(e)=>setUser({...user, email: e.target.value})}
            />
            <label>password</label>
            <input 
            className='p-2 border-2 border-grey-300 focus:outline-none focus:border-grey-600 text-black rounded-lg mb-4'
            id="password"
            name="username"
            type='text'
            value={user.password}
            onChange={(e)=>setUser({...user, password: e.target.value})}
            />
            <button
            className='p-2 bg-blue-600 border-1 text-white text-lg rounded-lg mb-2'
            onClick={handleSignin}
            >Login</button>
        </div>
        </div>
        </div>
    )
}
export default Signin