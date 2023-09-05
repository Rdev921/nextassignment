import React from 'react'
import Head from 'next/head'
import Layout from '../layout/layout'
import Link from 'next/link'
import Styles from '../styles/form.module.css'
import { signIn } from "next-auth/react"
const login = () => {

  async function handleGoogleSignin(){
    signIn('google',{callbackUrl:"http://localhost:3000"})
  }
  return (
    <Layout>
        <Head>
            <title>Login</title>
        </Head>

        <section className='w-3/4 mx-auto flex flex-col gap-2'>
            <div className="title">
                <h3 className='text-gray-800 text-3xl font-bold py-2'>Login</h3>
            </div>

            {/* form */}

            <form className='flex flex-col gap-5'>
            <div className={Styles.input_group}>
              <input 
              type="email" 
              name="email"
              placeholder='Email'
              className={Styles.input_text}
              />
             </div>

             <div className={Styles.input_group}>
              <input 
              type="password" 
              name="password"
              placeholder='Password'
              className={Styles.input_text}
              />
              </div>

              
              <div className="input-button">
                <button type="submit" className={Styles.button}>
                  Login
                </button>
              </div>
              <div className="input-button">
                <button type="button" onClick={handleGoogleSignin} className={Styles.button_custom}>
                  Sign in with Google  <img src="./google.png" alt="google" width={20} height={20}/>
                </button>
              </div>
              <div className="input-button">
                <button type="button" className={Styles.button_custom}>
                  sign in with Github <img src="./github.png" alt="google" width={20} height={20}/>
                </button>
              </div>
            </form>

            <p className='text-center text-gray-400'>
              don't have an account yet?<Link href={'/register'}>
                Sign Up
              </Link>
            </p>
        </section>
    </Layout>
  )
}

export default login