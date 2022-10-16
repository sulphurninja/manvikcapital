import React from 'react'
import { signIn } from 'next-auth/react';

function Notify() {
  return (
    <section id='#pricing' >
    <div className="mx-auto my-20 flex h-auto w-11/12 flex-col items-center justify-center rounded-md bg-violet-400 p-8 shadow-xl">
      <h1 className="w-3/4 text-center text-5xl font-semibold text-white md:text-6xl">
        Flexible Pricing Plans{' '}
      </h1>
      <p className="my-10 w-3/4 text-center text-base text-white md:text-xl">
        BASIC
        <hr></hr>
        PROFESSIONAL
        <hr></hr>
        EXCLUSIVE
      </p>
      <button className="h-14 rounded-md border border-white px-10 text-xl text-white hover:border-none hover:bg-violet-900 " onClick={()=> signIn()}>
        Register
      </button>
    </div>
    </section>
  )
}

export default Notify
