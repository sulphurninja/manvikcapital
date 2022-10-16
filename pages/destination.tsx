import React from 'react'

function destination() {
  return (
    <div id='services' className="my-40 mx-auto">
      <div>
        <p className="text-center text-base uppercase text-gray-600">Explore</p>
        <h1 className="text-center text-5xl font-bold text-gray-900">
          Our Services
        </h1>
      </div>
      <div className="mt-10 mb-10 flex flex-col items-center justify-center">
        <div className="grid grid-cols-2 gap-4 md:grid-cols-3 ">
          <div className="group flex h-20 w-auto cursor-pointer items-center justify-center gap-8 rounded-xl border border-violet-400 px-8 hover:bg-violet-600 hover:shadow-xl ">
            <h1 className="text-xl font-semibold text-violet-600 group-hover:text-white">
            Big Data Analysis
            </h1>
          </div>
          <div className="group flex h-20 w-auto cursor-pointer items-center justify-center gap-8 rounded-xl border border-violet-400 px-8 hover:bg-violet-600 hover:shadow-xl ">
            <h1 className="text-xl font-semibold text-violet-600 group-hover:text-white">
            Content Marketing
            </h1>
          </div>
          <div className="group flex h-20 w-auto cursor-pointer items-center justify-center gap-8 rounded-xl border border-violet-400 px-8 hover:bg-violet-600 hover:shadow-xl ">
            <h1 className="text-xl font-semibold text-violet-600 group-hover:text-white">
            Conversion Optimization
            </h1>
          </div>
          <div className="group flex h-20 w-auto cursor-pointer items-center justify-center gap-8 rounded-xl border border-violet-400 px-8 hover:bg-violet-600 hover:shadow-xl ">
            <h1 className="text-xl font-semibold text-violet-600 group-hover:text-white">
            Search Engine Optimization
            </h1>
          </div>
          <div className="group flex h-20 w-auto cursor-pointer items-center justify-center gap-8 rounded-xl border border-violet-400 px-8 hover:bg-violet-600 hover:shadow-xl ">
            <h1 className="text-xl font-semibold text-violet-600 group-hover:text-white">
              Email Marketing
            </h1>
          </div>
          <div className="group flex h-20 w-auto cursor-pointer items-center justify-center gap-8 rounded-xl border border-violet-400 px-8 hover:bg-violet-600 hover:shadow-xl ">
            <h1 className="text-xl font-semibold text-violet-600 group-hover:text-white">
              SEO Support
            </h1>
          </div>
        </div>
      </div>
    </div>
  )
}

export default destination
