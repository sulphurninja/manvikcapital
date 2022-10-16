import React from 'react'
import { useSession, signIn, signOut } from 'next-auth/react'
import SEO from 'components/seo';
import Header from 'components/header/header';

const login = () => {
    const { data: session } = useSession();
    console.log(session);
    if (session) {
        return (
           
            <div className={styles.grid}>
                <p>Welcome, {session.user.name}</p>
                <button onClick={()=> signOut()}>Sign Out</button>
            </div>
          
        )
    } else {
        return (
            <div className={styles.gridTemplateColumns}>
                <p>You're not signed in!</p>
                <button onClick={() => signIn()}>Sign In</button>
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