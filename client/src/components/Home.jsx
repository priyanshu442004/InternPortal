import React from 'react';
import home from '../assets/Home-SideImg.png'

const Home = () => {
  return (

    <div className='flex items-center justify-center min-w-screen'>
    {/* {Top portion} */}

    <div className='min-h-screen overflow-x-hidden'>
      
        <div className='flex flex-row mt-[10%]'>
          
          <div className='flex flex-col gap-[10%] ml-[5%] w-[50%]'>
              <div className='text-4xl font-bold'>
                <h1>
                  Welcome to DOC-Q <br />
                  Intern Portal
                </h1>
              </div>
              <div>
                <p className='w-[80%] text-lg text-gray-600 font-semibold'>
                Discover the DOC-Q Intern Portal, a comprehensive 
online platform designed to empower and support 
interns through their journey
                </p>
              </div>
              <div>
                <button className='bg-blue-600 text-white p-2 w-[13vw] rounded-md'>
                  Get started
                </button>
              </div>
          </div>

          
          <div className='flex flex-end'>
            <img src={home} alt="" className='w-[40vw] ml-[12%]'/>
          </div>
        </div>
    </div>
    
    </div>
  )
}

export default Home