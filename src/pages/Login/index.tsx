// import React from 'react'
import { getLogin } from '@/api'

export default function Login() {
  const login = async () => {
    const res = await getLogin()
    console.log(res.price);
  }
  return (
    <div onClick={login}>login</div>
  )
}


