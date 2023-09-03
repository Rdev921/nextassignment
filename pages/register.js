import React from 'react'
import Head from 'next/head'
import Layout from '../layout/layout'
import Link from 'next/link'
import Styles from '../styles/form.module.css'
const register = () => {
  return (
    <Layout>
        <Head>
            <title>Register</title>
        </Head>

        <section className='w-3/4 mx-auto flex flex-col gap-10'>
            <div className="title">
                <h1 className='text-gray-800 text-4xl font-bold py-4'>Register</h1>
                    <p className='w-3/4 mx-auto text-gray-400'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora </p> 
            </div>
            {/* form */}
            <form className='flex flex-col gap-5'>
            <div className={Styles.input_group}>
              <input 
              type="text" 
              name="username"
              placeholder='Username'
              className={Styles.input_text}
              />
             </div>
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

              <div className={Styles.input_group}>
              <input 
              type="password" 
              name="cpassword"
              placeholder='Confirm Password'
              className={Styles.input_text}
              />
              </div>
              {/* login buttons */}
              <div className="input-button">
                <button type="submit" className={Styles.button}>
                  Login
                </button>
              </div>
              
            </form>
            <p className='text-center text-gray-400'>
              Already have a account?<Link href={'/login'}>
                Sign In
              </Link>
            </p>
        </section>
    </Layout>
  )
}

export default register