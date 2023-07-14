'use client'
import {signIn} from 'next-auth/react'

export const Login = () => {
  return (
    <button onClick={()=>signIn('google',{ callbackUrl: 'http://localhost:3000/dashboard' })}>Login</button>
  )
}
