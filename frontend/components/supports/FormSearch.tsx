import React, { useState } from 'react'

const FormSearch = () => {
    return (
        <>
            <div>
                <form>
                    <div className='relative flex items-center  justify-between h-8'>
                        <div className='flex items-center border'>
                            <span className='bg-gray-100 rounded h-8 p-1'>Ngày tạo đơn từ:</span>
                            <input className="px-2  outline-0 h-8" type="date" placeholder="from" v-model="_query.filters.from" />
                            <div className='bg-gray-100 rounded h-8  p-1'>đến :</div>
                            <input className="px-2  outline-0 h-8" type="date" placeholder="to" v-model="_query.filters.to" />
                        </div>
                    </div>
                    <div className='relative flex justify-between mt-5'>
                        <div className='flex items-center border'>
                            <span className='bg-gray-100 rounded h-8 p-1'>Loại thanh toán</span>
                            <span className='flex-grow relative inline-flex pr-3'>
                                <select className='px-3 outline-0 h-8 appearance-none'>
                                    <option defaultValue="COD" >Vui lòng chọn</option>
                                    <option value="COD">Tiền thu hộ</option>
                                    <option value="delivery_fee">Phí vận chuyển</option>
                                </select>
                            </span>
                        </div>
                        <div className='flex'>
                            <div className='w-56 relative text-slate-500'>
                                <input type='text' className='form-control w-56 box px-2 border rounded-xl h-8' placeholder='Tìm kiếm'></input>
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide w-4 h-4 absolute my-auto inset-y-0 mr-3 right-0"><circle cx="11" cy="11" r="8"></circle><line x1="21" y1="21" x2="16.65" y2="16.65"></line></svg>
                            </div>
                            <button className='bg-primary text-white text-sm border rounded relative inline-flex justify-center items-center h-8 leading-7 font-medium text-center whitespace-no-wrap cursor-pointer box-border select-none align-middle mx-5'>
                                <span className='mx-2'>Tìm kiếm</span>
                            </button>
                            <button className='text-sm border rounded relative inline-flex justify-center items-center h-8 leading-7 font-medium text-center whitespace-no-wrap cursor-pointer text-gray-800 box-border select-none align-middle'>
                                <span className='mx-2'>Đặt lại</span>
                            </button>
                        </div>
                    </div>
                </form>
            </div>

        </>
    )
}

export default FormSearch