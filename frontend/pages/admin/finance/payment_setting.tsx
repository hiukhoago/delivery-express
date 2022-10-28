import React from 'react'
import LayoutAdmin from '../../../layouts/admin'

const Payment_Setting = () => {
    return (
        <div className='bg-white rounded-sm p-8'>
            <div className='p-5'>
                <div className='text-xl pb-6 text-gray-800 font-medium'>Thiết lập thanh toán</div>
            </div>
            <div className='block mx-5'>
                <div className='text-lg mb-5'>Tài khoản ngân hàng</div>
                <div className='w-full flex items-center justify-center'>
                    <div className='w-full flex flex-col items-center'>
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-20 w-20 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" />
                        </svg>
                        <div className='text-gray-500 text-center my-5 text-sm'>Hãy điền đầy đủ và chính xác thông tin Tài Khoản Ngân Hàng để thực hiện chuyển tiền Thu Hộ (CDO)</div>
                        <button className='text-sm bg-primary rounded relative inline-flex justify-center items-center h-8 leading-7 font-medium text-center whitespace-no-wrap cursor-pointer text-gray-800 box-border select-none align-middle'>
                            <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4 inline-flex mr-2 ml-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                            </svg>
                            <span className='text-white mr-5'>Tài Khoản Ngân Hàng</span>
                        </button>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default Payment_Setting

Payment_Setting.getLayout = function getLayout(page: any) {
    return (
        <LayoutAdmin >{page}</LayoutAdmin>
    )
}


