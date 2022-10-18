import React from 'react'

function Footer() {
	return (
		<div>
			<div className="bg-gray-50 h-1/2 w-full flex md:flex-row flex-col justify-around items-start p-5">
				<div className="p-5 ">
					<ul>
						<p className="text-gray-800 font-bold text-3xl pb-6">
							Manvik<span className="text-violet-500">Capital</span>
						</p>

					</ul>
				</div>
				<div className="p-5">
					<ul>



						<p className='font-bold'>
							Address:
							<p>
								29318 Cecelia road, Chesterfield,
								<p>MI 48051 </p>


								<p>


									Email :
									<p> mail@www.themanvikcapital.com </p>
								</p>
							</p>
						</p>


					</ul>
				</div>
				<div className="p-5">
					<ul>
						<p className="text-gray-800 font-bold text-2xl pb-4">Company</p>
						<a href="/about" className="text-gray-500 text-md pb-2 font-semibold hover:text-amber-600 cursor-pointer" >
							About
						</a>


					</ul>
				</div>

			</div>
			<div className="flex flex-col justify-center items-center text-center  p-5 bg-gray-50">


				<h1 className=" text-gray-800 font-semibold">
					© 2022 All rights reserved | Manvik Capital

				</h1>
			</div>
		</div>
	)
}

export default Footer
