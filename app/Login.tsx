'use client'
import {signIn} from 'next-auth/react'
import {FcGoogle} from 'react-icons/fc'

export const Login = () => {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-24 bg-blue-400">
       <div className='flex flex-col justify-center border p-4 rounded max-w-md space-y-6 gap-2'>
        <div className='flex'>
        <p className='text-white flex'>Connecter vous à votre compte et gérez vos factures à partir de ce compte InvoicesLawyer</p>

        </div>
        <div className='flex justify-center'>
          <button onClick={()=>signIn('google',{ callbackUrl: 'http://localhost:3000/dashboard' })} className='text-white flex flex-row items-center gap-2 border px-5 py-3 rounded w-fit hover:bg-white hover:text-blue-500 hover:border-blue-500'>Connexion avec google <FcGoogle size={30}/></button>
          </div>
          </div>

    </main>
  )
}
