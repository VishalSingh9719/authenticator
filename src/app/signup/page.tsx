"use client"

import Link from 'next/link'
import {useState} from 'react'
import { useRouter } from 'next/navigation'
import axios from 'axios'
const Signup = () =>{
 const [user, setUser] = useState({
    username:"",
    email:"",
    password:""
 })
 const router = useRouter()
 const handleSignup = async()=>{
    try{
        const response = await axios.post("/api/userAuth/signup", user);
        router.push('/login')
    
    }catch(error: any){
         console.log(error.message)
   }
 }
    return(
        <div className='min-h-screen m-auto flex justify-center'>

        <div className='flex justify-center item-center'>
        <div className='p-2 flex flex-col py-2 justify-center item-center w-2/4'>
            <img src="https://images.pexels.com/photos/7648027/pexels-photo-7648027.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"/>
        </div>
        <div className='p-12 flex flex-col w-2/4 justify-center item-center'>
            <p className='mx-auto mb-4 text-3xl font-bold'>Signup Form</p>
            <label>username</label>
            <input
            className='p-2 border-2 border-grey-300 focus:outline-none focus:border-grey-600 text-black rounded-lg mb-4' 
            id="username"
            name="username"
            type='text'
            value={user.username}
            onChange={(e)=>setUser({...user, username: e.target.value})}
            />
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
            onClick={handleSignup}
            >Signup</button>
            <p className='mx-auto text-xs'>Already have an Account <Link href="/login" className='text-blue-500'>Log in</Link></p>
        </div>
        </div>
        </div>
    )
}
export default Signup