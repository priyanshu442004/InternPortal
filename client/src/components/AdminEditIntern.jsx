import React from 'react'

const AdminEditIntern = () => {
  return (
    <div className='flex flex-col w-full items-center bg-gray-100'>
        <div className='flex justify-between items-center flex-row w-[95%] mt-[2vw] bg-white pl-3 pr-8 pt-2 pb-2'>
            <h2 className='text-lg font-semibold'>
            Add New Intern
            </h2>
            <div className='flex flex-row space-x-4'>
    <button className='border rounded-[5px] border-[#0804ac] pl-2 pr-2 pt-1 pb-1 text-[#0804ac] font-semibold'>Cancel</button>
    <button className='border rounded-[5px] bg-[#0804ac] border-blue-900 pl-3 pr-3 pt-1 pb-1 text-white font-semibold'>Save</button>
            </div>
        </div>

        <div>

        </div>
    </div>
  )
}

export default AdminEditIntern