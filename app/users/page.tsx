'use client'
import axios from 'axios';
import { log } from 'console';
import React, { useEffect, useState } from 'react'

export default function page() {
    const[users,setUsers]=useState<any[]>([]);
    useEffect(()=>{
        let data=axios.get('http://localhost:3000/api/users');
        data.then(res=>{
          console.log(res.data)
           setUsers(res.data)
        })
        .catch(err=>console.log(err))
    },[])
  return (
    <div>
      <p>ngoc</p>
      {users.map((user:any)=>(
        <div>
          kkkkk
          {user.user_name}
        </div>
      ))}
    </div>
  )
}
