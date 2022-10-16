import React from 'react'
import Image from 'next/image'
import One from '../public/images/1.png'
import Two from '../public/images/2.png'
import { AiFillStar } from 'react-icons/ai'

function Trending() {
  return (
    <div  className="my-20 flex  items-center justify-center">
      {/* images section  */}
      <div className="flex w-11/12 flex-col items-center justify-center gap-4 p-5 md:ml-20 md:flex-row">
        <div className="relative">
          <Image
            src={One}
            alt="first"
            width={400}
            height={300}
            objectFit="cover"
            className="rounded-xl shadow-md"
          />
          <div className=" flex h-auto w-full flex-col items-start justify-start rounded-xl bg-white pl-4 shadow-xl">
            <p className="mt-5 text-sm font-thin uppercase text-gray-500">
             (SEO)
            </p>
            <h2 className="text-2xl font-bold text-gray-900">Search Engine Optimization </h2>
            <div className="mb-5 mt-2 flex items-center justify-center">
              <AiFillStar className="text-yellow-600" />
              <p className=" pl-2 text-sm text-gray-500"> 5.0 (12 reviews)</p>
            </div>
          </div>
        </div>
        <div className="relative">
          <Image
            src={Two}
            alt="second"
            width={400}
            height={300}
            objectFit="cover"
            className="rounded-xl shadow-md"
          />
          <div className="flex h-auto flex-col items-start justify-start rounded-xl bg-white pl-4 shadow-xl">
            <p className="mt-5 text-sm font-thin uppercase text-gray-500">
              Brand Building
            </p>
            <h2 className="text-2xl font-bold text-gray-900">Content Marketing</h2>
            <div className="mb-5 mt-2 flex items-center justify-center">
              <AiFillStar className="text-yellow-600" />
              <p className=" pl-2 text-sm text-gray-500"> 4.8 (48 reviews)</p>
            </div>
          </div>
        </div>
        {/* textual content */}
        <div className="flex-col items-start justify-start sm:mt-8 md:mt-0 md:ml-20">
          <h1 className="text-5xl font-bold text-gray-900">Top Services</h1>
          <div className='flex mt-3'>
          <h3 className="text-xl flex font-light text-gray-400">Work with a lead generation company that gets it!</h3>
          </div>
          <p className="mt-5 w-3/4 text-base text-gray-600 md:text-xl">
          We are a credible, risk-free and flexible demand management partner for B2B technology companies and marketing agencies across the world..
          </p>
          <div className="flex items-start justify-start gap-5">
            <div className="my-5 flex-col">
              <h1 className="text-4xl font-bold text-gray-600">150+</h1>
              <p className="text-xl font-medium text-gray-600">Running Projects</p>
            </div>
            <div className="my-5 flex-col">
              <h1 className="text-4xl font-bold text-gray-600">400+</h1>
              <p className="text-xl font-medium text-gray-600">Projects Completed</p>
            </div>
            <div className="my-5 flex-col">
              <h1 className="text-4xl font-bold text-gray-600">300+</h1>
              <p className="text-xl font-medium text-gray-600">Happy Clients</p>
            </div>
          </div>
          <button className="h-14 w-auto rounded-xl bg-violet-600 px-8  text-white shadow-xl hover:bg-violet-900">
            Pricing
          </button>
        </div>
      </div>
    </div>
  )
}

export default Trending
