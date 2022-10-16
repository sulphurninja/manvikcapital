import React from 'react'
import {
  GiCampfire,
  GiProtectionGlasses,
  GiMountainClimbing,
  GiSpeedBoat,
} from 'react-icons/gi'

function services() {
  return (
    <div id='features' className="my-40 mx-10 md:mx-auto ">
      <div>
        <p className="text-center text-base uppercase text-gray-600">
          Why Us{' '}?
        </p>
        <h1 className="text-center text-5xl font-bold text-gray-900">
          Our Features
        </h1>
      </div>
      <div className="mt-10 mb-10 flex flex-col items-center justify-center">
        <div className="grid grid-cols-2 gap-4 md:grid-cols-4 ">
          <div className="group flex h-16 w-auto cursor-pointer items-center justify-center gap-8 rounded-xl border border-violet-600 px-8 hover:bg-violet-600 hover:shadow-xl ">
            <GiCampfire className="text-2xl text-gray-600 group-hover:text-white" />
            <h1 className="text-md font-semibold text-violet-600 group-hover:text-white">
              Result Oriented
            </h1>
          </div>
          <div className="group flex h-16 w-auto cursor-pointer items-center justify-center gap-8 rounded-xl border border-violet-600 px-8 hover:bg-violet-600 hover:shadow-xl ">
            <GiProtectionGlasses className="text-2xl text-gray-600 group-hover:text-white" />
            <h1 className="text-md font-semibold text-violet-600 group-hover:text-white">
              Competitive Advantage
            </h1>
          </div>
          <div className="group flex h-16 w-auto cursor-pointer items-center justify-center gap-8 rounded-xl border border-violet-600 px-8 hover:bg-violet-600 hover:shadow-xl ">
            <GiMountainClimbing className="text-2xl text-gray-600 group-hover:text-white" />
            <h1 className="text-md font-semibold text-violet-600 group-hover:text-white">
              SEO Friendly
            </h1>
          </div>
          <div className="group flex h-16 w-auto cursor-pointer items-center justify-center gap-8 rounded-xl border border-violet-600 px-8 hover:bg-violet-600 hover:shadow-xl ">
            <GiSpeedBoat className="text-2xl text-gray-600 group-hover:text-white" />
            <h1 className="text-xl font-semibold text-violet-600 group-hover:text-white">
              Transparency
            </h1>
          </div>
        </div>
      </div>
    </div>
  )
}

export default services
