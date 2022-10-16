import React from 'react'
import { useSession, signIn, signOut, getSession } from 'next-auth/react'

import Navbar from '../components/Navbar';

const login = () => {
    const { data: session, status } = useSession({required:true});
  
    if (status === 'authenticated') {
        return (
          <div>
          <Navbar/>
           
            <div className={styles.grid}>
            <h1 className="w-3/4 text-center text-3xl font-semibold text-black md:text-6xl">Welcome, {session.user.name}</h1>
            <hr></hr>
            <p className="text-gray-800 font-light mt-10 text-2xl pb-4">Thanks for your response, we'll get back to you through an email in moments!</p>
                <button className='rounded border-2 ' onClick={()=> signOut()}>Sign Out</button>
            </div>
            </div>
          
        )
    } else {
        return (
          <div>
          <Navbar/>
            <div className={styles.gridTemplateColumns}>
                <p>You're not signed in!</p>
                <button onClick={() => signIn()}>Sign In</button>
            </div>
            </div>
        )
    }
}

const styles = {
  grid: {
    width: ['100%', '80%', '100%'],
    mx: 'auto',
    gridGap: [
      '35px 0',
      null,
      '40px 40px',
      '50px 60px',
      '30px',
      '50px 40px',
      '55px 90px',
    ],
    gridTemplateColumns: [
      'repeat(1,1fr)',
      null,
      'repeat(2,1fr)',
      null,
      'repeat(4,1fr)',
    ],
  },
};

export default login


export const getServerSideProps = async(context)=>{
  const session = await getSession(context)
  return {
    props:{session}
  }
}
