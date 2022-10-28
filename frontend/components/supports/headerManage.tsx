import React from 'react'

const Header = () => {
    return (
        <>
            <div className='flex items-center'>
                    <div className='border rounded-xl'>
                        <span className='bg-gray-100 rounded-l-xl p-2'>Sắp xếp theo</span>
                        <span className='flex-grow relative inline-flex pr-3'>
                            <select className='px-3 outline-0 h-8 appearance-none'>
                                <option defaultValue="COD" >Vui lòng chọn</option>
                                <option value='1'>Tăng dần</option>
                                <option value='2'>Giảm dần</option>
                            </select>
                        </span>
                    </div>
                </div>
                <div className='sm:w-auto sm:mt-0 sm:ml-auto md:ml-0'>
                    <div className='w-56 relative text-slate-500'>
                        <input type='text' className='form-control w-56 box px-2 border rounded-xl h-8' placeholder='Tìm kiếm'></input>
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide w-4 h-4 absolute my-auto inset-y-0 mr-3 right-0"><circle cx="11" cy="11" r="8"></circle><line x1="21" y1="21" x2="16.65" y2="16.65"></line></svg>
                    </div>
                </div>
        </>
    )
}

export default Header