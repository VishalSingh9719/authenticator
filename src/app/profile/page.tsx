'use client'

import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { useRouter } from 'next/navigation'
// import {toast} from "react-hot-toast";
import Link from 'next/link'
const UserProfile = () => {

    const [profileData, setProfileData] = useState({
        username:"",
        email:""
    })
    const router = useRouter()

    const getUserProfileDetails = async () => {
        try {
            const { data } = await axios.get("/api/userAuth/userProfile");
            setProfileData(data.data)
        } catch (error: any) {
            console.log(error.message)
        }
    }

    const logout = async () => {
        try {
            await axios.get('/api/userAuth/logout')
            //  toast.success('Logout successful')
            router.push('/login')
        } catch (error: any) {
            console.log(error.message)
            //  toast.error(error.message)
        }
    }
    useEffect(() => {
        getUserProfileDetails()
    }, [])

    return (
        <div className='p-2 flex flex-col bg-white min-h-screen'>
            <nav className='top-[0] flex justify-end'>
            <button onClick={logout} className='bg-blue-600 border-1 text-white text-2xl rounded-lg p-2 mr-4'><Link href="/login">Logout</Link></button>
            </nav>
            <div className='p-8 flex flex-col m-auto mt-20 border-gray-400 bg-slate-100'>
            <p className='mx-auto text-2xl font-bold'>User Profile</p>
            <div className='flex justify-between gap-8 mt-8'>
                <div>
                    <img src="https://th.bing.com/th/id/OIP.Ok66lk5qOgfYFSp3f5v8pwHaHa?w=207&h=207&c=7&r=0&o=5&pid=1.7" />
                </div>
                <div className='flex flex-col mt-4'>
                <p className='mb-4'>{profileData?.username}</p>
                <p>{profileData?.email}</p>
                </div>
            </div>
            
            </div>
        </div>
    )
}
export default UserProfile