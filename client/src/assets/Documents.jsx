import React from 'react'
import offerLetterImg from '../assets/offerLetterImg.jpg';
import lorImg from '../assets/LOR.jpg'

const Documents = () => {
  return (
    <div className='w-screen text-center flex flex-col justify-center items-center p-4'>
        <div className='mt-[12%]'>
            <h1 className='text-5xl font-bold text-gray-900'>
            View Your Documents
            </h1>

                <div className='mt-[2%] flex justify-center items-center w-full text-gray-600 text-lg'>

            <p className='w-[60%]'>
            "Explore and access your personal documents, such as certificates, offer letters, 
performance reviews, and more. All your files are securely stored and easily accessible 
in one place for quick reference and verification."
            </p>
                </div>
        </div>

        <div className='flex flex-row justify-center items-center mt-[7%] gap-[7%] ml-[5%] mr-[5%]'>
        {/* {First div} */}
            <div className='bg-[#186cec] p-4 pr-10 pl-6 pb-6 rounded-[25px] border border-black w-[25%]'>
                <div className='flex flex-col '>
                <h1 className='text-white font-bold text-2xl text-start'>
                Your Offer 
                Letter
                </h1>
                <p className='text-white mt-[4%] text-start'>
                Click Below to View Or Download
                Your Offer Letter
                </p>
                <div className='flex justify-center items-center mt-4'>
                    <img src={offerLetterImg} alt="" className='w-[20vw] h-[20vw]'/>
                </div>
                </div>
                <div className='mt-[4%] flex flex-row gap-[35%] ml-[4%]'>
                    <button className='bg-transparent text-lg text-gray-800 font-semibold text-lg'>
                        View
                    </button>
                    <button className='bg-white border border-black p-2 rounded-lg text-lg text-gray-800 font-semibold text-lg'>
                        Download
                    </button>
                </div>
               
            </div>
{/* {Second div} */}
            <div className='bg-[#186cec] p-4 pr-8 pl-4 pb-6 rounded-[25px] border border-black w-[25%]'>
                <div className='flex flex-col '>
                <h1 className='text-white font-bold text-2xl text-start '>
                Letter Of 
Recommendation
                </h1>
                <p className='text-white mt-[4%] text-start w-full text-sm'>
                Click Below to View Or Download
Letter Of Recommendation
                </p>
                <div className='flex justify-center items-center mt-4 flex-col'>
                    <img src={lorImg} alt="" className='w-[15vw] h-[15vw]'/>
                    <p className='text-white mt-[2%] text-sm'>
                    Here Belongs Your Letter 
                    Of Recommendation
                    </p>
                </div>
                </div>
                <div className='mt-[2.3vw] flex flex-row gap-[35%] ml-[4%]'>
                    <button className='bg-transparent text-lg text-gray-800 font-semibold text-lg'>
                        View
                    </button>
                    <button className='bg-white border border-black p-2 rounded-lg text-lg text-gray-800 font-semibold text-lg'>
                        Download
                    </button>
                </div>
               
            </div>

            {/* {Third div} */}
            <div className='bg-[#186cec] p-4 pr-10 pl-6 pb-6 rounded-[25px] border border-black w-[25%]'>
                <div className='flex flex-col '>
                <h1 className='text-white font-bold text-2xl text-start w-[70%]'>
                Your Offer 
                Letter
                </h1>
                <p className='text-white mt-[4%] text-start'>
                Click Below to View Or Download
                Your Offer Letter
                </p>
                <div className='flex justify-center items-center mt-4'>
                    <img src={offerLetterImg} alt="" className='w-[20vw] h-[20vw]'/>
                </div>
                </div>
                <div className='mt-[4%] flex flex-row gap-[35%] ml-[4%]'>
                    <button className='bg-transparent text-lg text-gray-800 font-semibold text-lg'>
                        View
                    </button>
                    <button className='bg-white border border-black p-2 rounded-lg text-lg text-gray-800 font-semibold text-lg'>
                        Download
                    </button>
                </div>
               
            </div>
            
        </div>
        <div className='text-gray-500 text-md flex text-start flex-col pl-[10%] mt-[5%]'>
            <p>
                Note
            </p>
            <br />

            <p className='w-[50%]'>
             
If you notice any discrepancies in your documents, please reach out to us 
at  support@docq.in . We’re here to assist you and will resolve the issue 
as quickly as possible.
            </p>
        </div>
        <div className='w-screen flex items-center justify-center mt-[7%]'>
            <button className='bg-[#186cec] w-[12vw] p-2 rounded-[10px] border border-black text-white'>
                Need Help?  
            </button>
        </div>
    </div>
  )
}

export default Documents