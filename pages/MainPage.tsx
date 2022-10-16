import React from 'react'
import { HiOutlineArrowNarrowRight } from 'react-icons/hi'
import Image from 'next/image'
import HeroImage from '../public/images/hero.png'
import Trending from '../components/Trending'

function MainPage() {
  return (
    <>
      <div className=" w-screen">
        <div className="flex h-auto w-screen items-center justify-center p-8">
          <div className="ml-10 md:ml-20 md:w-1/2">
            <h1 className="my-5 text-5xl font-bold text-gray-800 md:text-7xl">
            CURIOUS. METICULIOUS. BOLD.
            </h1>
            <p className="text-base text-center text-gray-500 md:text-xl">
           Manvik Capital is a Global Omnichannel Marketing Agency, leading B2B Performance Marketing. <hr></hr>Finding leads you never knew existed! 
            </p>
            <div className="mt-12 flex items-start justify-start gap-5 text-center ">
              <button className=" h-14  cursor-pointer rounded-xl  bg-violet-600 px-8 font-semibold text-white hover:bg-violet-900 hover:shadow-xl">
                Get Started!
              </button>
            </div>
          </div>

          <div className="hidden md:block">
            <Image
              src={HeroImage}
              width={900}
              height={700}
              objectFit="contain"
              alt="hero img"
            />
          </div>
        </div>
        <Trending />
      </div>
    </>
  )
}

export default MainPage
