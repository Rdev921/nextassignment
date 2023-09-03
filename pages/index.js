import Dashboard from "@/components/Dashboard";
import Head from "next/head";
import {useSession } from "next-auth/react"
export default function Home() {
  const{data:session} = useSession()
  return (
    <div>
    <Head>
      <title>Home Page</title>  
      <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.2/css/all.min.css" />
    </Head>
      <main>
       {session && <Dashboard/>}
      </main>
    </div>
  )
}



