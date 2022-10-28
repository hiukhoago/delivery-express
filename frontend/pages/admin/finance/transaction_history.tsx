import React from 'react'
import FormSearch from '../../../components/supports/FormSearch'
import LayoutAdmin from '../../../layouts/admin'

const Transaction_History = () => {
    return (
        <div className='bg-white rounded-sm p-8'>
            <div className='pb-6 h-12 not-italic font-medium text-xl leading-6 text-gray-800'>Lịch sử giao dịch</div>
            <div className='min-h-full flex flex-col space-y-4'>
                <div className='pt-4'>
                    <FormSearch  />
                </div>
                <div className='flex-grow'>
                    <div className='overflow-x-auto rounded text-gray-800 relative'>
                        <table className='w-auto min-w-full rounded border-collapse border'>
                            <thead className='font-medium text-sm leading-4'>
                                <tr>
                                    <th className='p-3 border border-collapse bg-gray-100 box-border relative align-middle text-left'> Mã giao dịch</th>
                                    <th className='p-3 border border-collapse bg-gray-100 box-border relative align-middle text-left'> Kỳ thanh toán</th>
                                    <th className='p-3 border border-collapse bg-gray-100 box-border relative align-middle text-left'> Loại thanh toán</th>
                                    <th className='p-3 border border-collapse bg-gray-100 box-border relative align-middle text-left'> Tổng số thanh toán (VNĐ)</th>
                                    <th className='p-3 border border-collapse bg-gray-100 box-border relative align-middle text-left'> Ngày thanh toán</th>
                                    <th className='p-3 border border-collapse bg-gray-100 box-border relative align-middle text-left'> Trạng thái thanh toán</th>
                                    <th className='p-3 border border-collapse bg-gray-100 box-border relative align-middle text-left'> Thông tin ngân hàng</th>
                                    <th className='p-3 border border-collapse bg-gray-100 box-border relative align-middle text-left'> Mã tham chiếu ngân hàng</th>
                                </tr>
                            </thead>
                            <tbody className='font-normal text-sm'>
                                <tr>
                                    {[...Array(8)].map((n,i) => (
                                        <td key={i} className='px-3 py-2 border border-collapse'>hehe</td>
                                    ))}
                                </tr>
                            </tbody>
                        </table>
                    </div>
                    <div className='mt-4 sticky bottom-0 border rounded'>
                        <ul className='text-sm text-gray-800 h-12 p-0 ml-4 flex items-center none'>
                            <li className='text-gray-500 inline-block h-6 mr-4 leading-5 align-middle text-base'>Tổng: 1</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Transaction_History

Transaction_History.getLayout = function getLayout(page: any) {
    return (
        <LayoutAdmin >{page}</LayoutAdmin>
    )
}


