import { CheckIcon, XIcon, SearchIcon } from '@heroicons/react/outline';
import React, { useState, useEffect } from 'react'
import LayoutManage from '../../../layouts/manage';
import useAxios from '../../../library/useAxios';
import { OrderStatus } from '../../../shared/enum';
import { Query } from '../../../shared/interface';
import { Order } from '../../../shared/order.interface';
import { usePrincipal } from '../../../library/usePrincipal';
import { useRouter } from 'next/router';
import { formatVND, toLocaleString } from '../../../library/utility';
import { toast } from 'react-toastify';

const ListOrder = (props: any) => {
   const router = useRouter()

    const { authentication, principal, login, logout, reset } = usePrincipal()

    const [isActive, setIsActive] = useState<number>(0)
    const [orders, setOrders] = useState<Order[]>([])
    const [keyword, setKeyword] = useState('');
    const [isLoading, setIsLoading] = useState(false);

    const [query, setQuery] = useState<Query>({ filters: { status:'completed','note.code' : 0 }, pageable: { page: 0, size: 10, maxPage: 1000, sort: [{ field: 'createdAt', order: 'd' }] } })
    const { response, error, loading, fetchData } = useAxios();

    const handleFetchData = () => {
        if (authentication) {
            fetchData('/order', {}, query)
                .then((res) => {
                    if (res?.status === 200) {
                        setOrders(res.data)
                    }
                })
        }
    }

    const handleAprrove = async (id: any) => {
        console.log('id---------->>>>',id)

        if (authentication) {
            await fetchData(`/order/${id}/approve`, { method: 'PATCH' })
                .then((res) => {
                    if (res?.status === 200) {
                        toast.success('Duyệt thành công')
                        handleFetchData()
                    }
                }).catch((err) => {
                    toast.error('Duyệt thất bại')
                }).finally(() => {
                    setIsLoading(false);
                })
        }   
    }

    useEffect(() => {
        handleFetchData()
        return () => {
            setIsLoading(false)
        }

    }, [authentication, query,isLoading])

    console.log('orders------->>>>',orders)

    return (
        <>
            <div className='bg-white rounded-sm p-8'>
                <div className='space-y-3'>
                    <div className='text-xl text-gray-800 font-medium'>Quản lý COD</div>
                    <div className='min-h-full flex flex-col space-y-4'>
                        <div className='pt-4'>
                            <div>
                                <form>
                                    <div className='relative flex items-center  justify-between h-8'>
                                        <div className='flex items-center border'>
                                            <span className='bg-gray-100 rounded h-8 p-1'>Ngày tạo đơn từ:</span>
                                            <input className="px-2  outline-0 h-8" type="date" placeholder="from" onChange={(e) => { setQuery({ filters: { from: e.target.value } }) }} />
                                            <div className='bg-gray-100 rounded h-8  p-1'>đến :</div>
                                            <input className="px-2  outline-0 h-8" type="date" placeholder="to" onChange={(e) => { setQuery({ filters: { to: e.target.value } }) }} />
                                        </div>
                                    </div>
                                    <div className='relative flex justify-between mt-5'>
                                        <div className='flex items-center border'>
                                            <span className='bg-gray-100 rounded h-8 p-1'>Chọn loại dịch vụ</span>
                                            <span className='flex-grow relative inline-flex pr-3'>
                                                <select 
                                                onChange={(e) => {setQuery({filters: {serviceId: e.target.value}})}}
                                                className='px-3 outline-0 h-8 appearance-none'>
                                                    <option value="" >Tất cả</option>
                                                    <option value="dss" >Giao hàng tiêu chuẩn</option>
                                                    <option value="dfs" >Giao hàng nhanh</option>
                                                </select>
                                            </span>
                                        </div>
                                        <div className='flex'>
                                            <div className='w-56 relative text-slate-500'>
                                                <input
                                                    onChange={event => setKeyword(event.target.value)}
                                                    type='text'
                                                    className='form-control w-56 box px-2 border rounded-xl h-8'
                                                    placeholder='Tìm kiếm'
                                                />
                                                <SearchIcon className="lucide w-4 h-4 absolute my-2 inset-y-0 mr-3 right-0 opacity-30" />
                                            </div>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                        <div className='flex-grow'>
                            <div className='overflow-auto rounded text-gray-800 relative'>
                                <table className='text-xs w-auto min-w-full rounded border-collapse border'>
                                    <thead className='font-medium text-sm leading-4'>
                                        <tr>
                                            <th className='w-full whitespace-nowrap bg-gray-100 text-xs p-1.5 text-slate-400 uppercase sticky left-0 '>Mã đơn hàng</th>
                                            <th className='w-full whitespace-nowrap p-3  bg-gray-100 box-border relative min-w-[150px] text-left'>Id tài xế</th>
                                            <th className='w-full whitespace-nowrap p-3  bg-gray-100 box-border relative min-w-[150px] text-left'>SĐT tài xế</th>
                                            <th className='w-full whitespace-nowrap p-3  bg-gray-100 box-border relative min-w-[150px] text-left'>Tên tài xế</th>
                                            <th className='w-full whitespace-nowrap p-3  bg-gray-100 box-border relative min-w-[170px] text-left'>Thời gian nhận đơn</th>
                                            <th className='w-full whitespace-nowrap p-3  bg-gray-100 box-border relative min-w-[150px] text-left'>Thời gian hoàn tất</th>
                                            <th className='w-full whitespace-nowrap p-3  bg-gray-100 box-border relative min-w-[150px] text-left'>Tổng COD</th>
                                            <th className='w-full whitespace-nowrap bg-gray-100 text-center text-xs p-1.5 text-slate-400 uppercase sticky right-0  '>Xác nhận</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {orders && orders.map((n, i) => (
                                            <tr key={i}>
                                                <td className='text-xs p-1.5 text-slate-400 uppercase sticky left-0  font-medium'>{n?.id}</td>
                                                <td className='px-3 py-2 '>{n?.supplierId}</td>
                                                <td className='px-3 py-2 '>{n?.supplierPhone}</td>
                                                <td className='px-3 py-2 '>{n.supplierName}</td>
                                                <td className='px-3 py-2 '>{toLocaleString(n.pickup_time ?? '')}</td>
                                                <td className='px-3 py-2 '>{toLocaleString(n?.complete_time ?? '')}</td>
                                                <td className='px-3 py-2 '>{formatVND(n?.note.codValue)}</td>
                                                <td className='text-center text-xs p-1.5 text-slate-400 uppercase sticky right-0 font-medium'>
                                                    <button type='button' onClick={() => handleAprrove(n?.supplierId)} className='badge info px-3 py-2 rounded'>Approve All</button>
                                                </td>
                                            </tr>
                                        ))}

                                    </tbody>
                                </table>
                            </div>
                            <div className='mt-4 bottom-0 border rounded'>
                                <ul className='text-sm text-gray-800 h-12 p-0 ml-4 flex items-center none'>
                                    <li className='text-gray-500 inline-block h-6 mr-4 leading-5  text-base'>Tổng: {orders ? orders.length : 0} đơn</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}

export default ListOrder

ListOrder.getLayout = function getLayout(page: any) {
    return (
        <LayoutManage >{page}</LayoutManage>
    )
}


