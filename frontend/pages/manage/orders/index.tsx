import { CheckIcon, XIcon, SearchIcon } from '@heroicons/react/outline';
import React, { useState, useEffect } from 'react'
import LayoutManage from '../../../layouts/manage';
import useAxios from '../../../library/useAxios';
import { OrderStatus } from '../../../shared/enum';
import { Query } from '../../../shared/interface';
import { Order } from '../../../shared/order.interface';
import { usePrincipal } from '../../../library/usePrincipal';
import { useRouter } from 'next/router';
import { toLocaleString } from '../../../library/utility';

const ListOrder = (props: any) => {
    const navs = [['Tất cả', ''], ['Đơn hàng chờ xác nhận', OrderStatus.IDLE], ['Đang tìm tài xế', OrderStatus.ASSIGNING], ['Đang chờ lấy hàng', OrderStatus.ACCEPTED], ['Đang vận chuyển', OrderStatus.INPROCESS], ['Đã giao hàng', OrderStatus.COMPLETED], ['Đã hủy', OrderStatus.CANCELLED]]
    const router = useRouter()

    const { authentication, principal, login, logout, reset } = usePrincipal()

    const [isActive, setIsActive] = useState<number>(0)
    const [orders, setOrders] = useState<Order[]>([])
    const [keyword, setKeyword] = useState('');
    const [isLoading, setIsLoading] = useState(false);

    const [query, setQuery] = useState<Query>({ filters: { status: '' }, pageable: { page: 0, size: 10, maxPage: 1000, sort: [{ field: 'createdAt', order: 'd' }] } })
    const { response, error, loading, fetchData } = useAxios();

    const Statustext = (s: OrderStatus) => {
        switch (s) {
            case OrderStatus.IDLE: return 'Đơn hàng chờ xác nhận'
            case OrderStatus.ASSIGNING: return 'Đang tìm tài xế'
            case OrderStatus.ACCEPTED: return 'Đang chờ lấy hàng'
            case OrderStatus.INPROCESS: return 'Đang vận chuyển'
            case OrderStatus.COMPLETED: return 'Đã giao hàng'
            case OrderStatus.CANCELLED: return 'Đã hủy'
            default: return 'Tất cả'
        }
    }

    const handleStatus = (status: string, index: number) => {
        setQuery({ ...query, filters: { status: status } })
        setIsActive(index)
    }

    const handleUpdateStatus = async (id: any, status: OrderStatus) => {
        await fetchData(`/order/${id}`, { method: 'PATCH', data: { status: status } }).then((res: any) => {
            console.log(res)
            if (res?.status === 200) {
                handleFetchData()
            }
        }).catch(error => {
            console.log("handlesubmit error", error)
        })
    }

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
    const handleAcceptAll = () => {
        setIsLoading(true)
        fetchData('/order/accept/all', { method: 'PUT' })
            .then((res) => {
                console.log(res?.status)
                if (res?.status === 201) {
                    setOrders(res.data)
                }
                setIsLoading(false)
            }).catch(error => {
                console.log("handlesubmit error", error)
                setIsLoading(false)
            })
    }

    useEffect(() => {
        handleFetchData()

        return () => {
            setIsLoading(false)
        }

    }, [authentication, query,isLoading])

    return (
        <>
            <div className='bg-white rounded-sm p-8'>
                <div className='space-y-3'>
                    <div className='text-xl pb-6 text-gray-800 font-medium'>Theo dõi đơn hàng</div>
                    <div className='border-b'>
                        <div>
                            <div className='flex gap-5 items-center cursor-pointer'>
                                {navs && navs.map((nav, index) => (
                                    <div key={index} onClick={() => handleStatus(nav[1], index)} className={isActive == index ? 'border-b-4 text-primary border-primary pb-1 px-3 transition duration-1000	' : 'hover:text-primary px-3'}>
                                        <span>{nav[0]}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
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
                                        <div>
                                            {query?.filters?.status == OrderStatus.IDLE || query?.filters?.status == '' && (
                                                <button className='bg-primary p-2 text-white rounded' onClick={() => handleAcceptAll()}>
                                                    Xác nhận tất cả
                                                </button>
                                            )}

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
                                            <th className='sticky z-10 left-0 p-3  bg-gray-100 box-border  min-w-[150px] text-left'>Mã vận đơn</th>
                                            <th className='p-3  bg-gray-100 box-border relative min-w-[150px] text-left'>Thời gian tạo đơn</th>
                                            <th className='p-3  bg-gray-100 box-border relative min-w-[150px] text-left'>Tên Người nhận</th>
                                            <th className='p-3  bg-gray-100 box-border relative min-w-[150px] text-left'>Số điện thoại người nhận</th>
                                            <th className='p-3  bg-gray-100 box-border relative min-w-[170px] text-left'>Giao đến Tỉnh/Quận-Huyện/Phường-Xã</th>
                                            <th className='p-3  bg-gray-100 box-border relative min-w-[150px] text-left'>Địa chỉ người nhận chi tiết</th>
                                            <th className='p-3  bg-gray-100 box-border relative min-w-[150px] text-left'>Lấy hàng Tỉnh/Quận-Huyện/Phường-Xã</th>
                                            <th className='p-3  bg-gray-100 box-border relative min-w-[150px] text-left'>Địa chỉ lấy hàng chi tiết	</th>
                                            <th className='p-3  bg-gray-100 box-border relative min-w-[150px] text-left'>Thời gian lấy hàng</th>
                                            <th className='p-3  bg-gray-100 box-border relative min-w-[150px] text-left'>Thời gian giao hàng</th>
                                            <th className='p-3  bg-gray-100 box-border relative min-w-[150px] text-left'>Loại dịch vụ</th>
                                            <th className='p-3  bg-gray-100 box-border relative min-w-[150px] text-left'>Thu hộ</th>
                                            <th className='text-center sticky z-10 right-0 border p-3 bg-gray-100 box-border min-w-[200px]'>Trạng thái</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {orders && orders?.filter((val) => {
                                            if (keyword == "") {
                                                return val
                                            }
                                            else if (val.information?.[1].name.toLowerCase().includes(keyword.toLowerCase().trim())) {
                                                return val
                                            }
                                            else if (val.information?.[1].addressDetail?.toLowerCase().includes(keyword.toLowerCase().trim())) {
                                                return val
                                            }
                                            else if (val.information?.[1].phone.includes(keyword)) {
                                                return val
                                            }else if(val.id?.toString().includes(keyword)){
                                                return val
                                            }
                                        }).map((n, i) => (
                                            <tr key={i}>
                                                <td className='text-xs p-1.5 text-slate-400 uppercase sticky left-0 bg-white font-medium'>{n?.id}</td>
                                                <td className='px-3 py-2 '>{toLocaleString(n?.createdAt ?? '')}</td>
                                                <td className='px-3 py-2 '>{n?.information?.[1].name}</td>
                                                <td className='px-3 py-2 '>{n?.information?.[1].phone}</td>
                                                <td className='px-3 py-2 '>{n?.information?.[1].address}</td>
                                                <td className='px-3 py-2 '>{n?.information?.[1].addressDetail}</td>
                                                <td className='px-3 py-2 '>{n?.information?.[0].address}</td>
                                                <td className='px-3 py-2 '>{n?.information?.[0].addressDetail}</td>
                                                <td className='px-3 py-2 '>{toLocaleString(n?.pickup_time ?? '')}</td>
                                                <td className='px-3 py-2 '>{toLocaleString(n?.complete_time ?? '')}</td>
                                                <td className='px-3 py-2 '>{n?.serviceName}</td>
                                                <td className='px-3 py-2 '>{n?.note?.cod == 0 ? n?.note?.codValue : 'Không thu hộ'}</td>
                                                <td className='text-center text-xs p-1.5 text-slate-400 uppercase sticky right-0 bg-white font-medium'>
                                                    {n?.status === OrderStatus.IDLE ? (
                                                        <div className='flex space-x-1 items-center justify-center'>
                                                            <button onClick={() => handleUpdateStatus(n?.id, OrderStatus.ASSIGNING)} className='bg-success text-white border rounded-full p-2'>
                                                                <CheckIcon className='w-5 h-5' />
                                                            </button>
                                                            <button onClick={() => handleUpdateStatus(n?.id, OrderStatus.CANCELLED)} className='bg-danger text-white border rounded-full p-2'>
                                                                <XIcon className='w-5 h-5' />
                                                            </button>
                                                        </div>
                                                    ) : (
                                                        <button type='button' onClick={() => router.push(`./orders/${n?.id}`)} className='button_primary'>Chi tiết</button>
                                                    )}

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


