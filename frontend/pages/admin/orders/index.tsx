import { useRouter } from 'next/router';
import React, { useState, useEffect } from 'react'
import LayoutAdmin from '../../../layouts/admin'
import useAxios from '../../../library/useAxios';
import { usePrincipal } from '../../../library/usePrincipal';
import { OrderStatus } from '../../../shared/enum';
import { Query } from '../../../shared/interface';
import { Order } from '../../../shared/order.interface';
import { SearchIcon, MenuIcon } from '@heroicons/react/outline';
import { formatVND, toLocaleString } from '../../../library/utility';

const OrderTracking = () => {
    const navs = [['Tất cả', ''], ['Xác nhận đơn hàng', OrderStatus.IDLE], ['Đang chờ lấy hàng', OrderStatus.ACCEPTED], ['Đang vận chuyển', OrderStatus.INPROCESS], ['Đã giao hàng', OrderStatus.COMPLETED], ['Đã hủy', OrderStatus.CANCELLED]]
    const option = [{ value: '', label: '' }, { value: '', label: '' }, { value: '', label: '' }, { value: '', label: '' }]

    const router = useRouter()

    const [isActive, setIsActive] = useState<number>(0)
    const [orders, setOrders] = useState<Order[]>([])
    const [search, setSearch] = useState('');
    const [showModal, setShowModal] = useState(false);

    const { authentication} = usePrincipal()


    const [query, setQuery] = useState<Query>({ filters: { status: '',serviceId:''}, pageable: { page: 0, size: 10, maxPage: 1000, sort: [{ field: 'createdAt', order: 'd' }] } })
    const { response, error, loading, fetchData } = useAxios();

    const handleStatus = (status: string, index: number) => {
        setQuery({ filters: { status: status } })
        setIsActive(index)
    }

    useEffect(() => {
        let isMounted = true;
        if (authentication) {
            fetchData('/order', {}, query)
                .then((res) => {
                    if (res?.status === 200) {
                        setOrders(res.data)
                    }
                })
        }
        return () => {
            isMounted = false;
        }
    }, [query, authentication])

    if (!response) return <p>No profile data</p>


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
                                    </div>
                                    <div className='relative flex justify-between mt-5'>
                                        <div className='flex items-center border'>
                                            <span className='bg-gray-100 rounded h-8 p-1'>Sắp xếp theo</span>
                                            <span className='flex-grow relative inline-flex pr-3'>
                                                <select
                                                    onChange={(e) => {setQuery({filters: {serviceId: e.target.value}})}}
                                                    className='px-3 outline-0 h-8 appearance-none'
                                                >
                                                    <option value="" >Tất cả</option>
                                                    <option value="dss" >Giao hàng tiêu chuẩn</option>
                                                    <option value="dfs" >Giao hàng nhanh</option>
                                                </select>
                                            </span>
                                        </div>
                                        <div>
                                        </div>
                                        <div className='flex'>
                                            <div className='w-56 relative text-slate-500'>
                                                <input
                                                    type='text'
                                                    onChange={(e) => setSearch(e.target.value)}
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
                            <div className='overflow-x-auto rounded text-gray-800 relative'>
                                <table className='text-xs w-auto min-w-full rounded border-collapse border'>
                                    <thead className='font-medium text-sm leading-4'>
                                        <tr>
                                            <th className='text-center sticky left-0 p-3  bg-gray-100 box-border  min-w-[150px] '>Mã vận đơn</th>
                                            <th className='p-3  bg-gray-100 box-border relative min-w-[150px] text-left'>Thời gian tạo đơn</th>
                                            <th className='p-3  bg-gray-100 box-border relative min-w-[150px] text-left'>Tên Người nhận</th>
                                            <th className='p-3  bg-gray-100 box-border relative min-w-[150px] text-left'>Số điện thoại người nhận</th>
                                            <th className='p-3  bg-gray-100 box-border relative min-w-[170px] text-left'>Giao đến Tỉnh/Quận-Huyện/Phường-Xã</th>
                                            <th className='p-3  bg-gray-100 box-border relative min-w-[150px] text-left'>Địa chỉ người nhận chi tiết</th>
                                            <th className='p-3  bg-gray-100 box-border relative min-w-[150px] text-left'>Lấy hàng Tỉnh/Quận-Huyện/Phường-Xã</th>
                                            <th className='p-3  bg-gray-100 box-border relative min-w-[150px] text-left'>Địa chỉ lấy hàng chi tiết</th>
                                            <th className='p-3  bg-gray-100 box-border relative min-w-[150px] text-left'>Thời gian lấy hàng</th>
                                            <th className='p-3  bg-gray-100 box-border relative min-w-[150px] text-left'>Thời gian giao hàng</th>
                                            <th className='p-3  bg-gray-100 box-border relative min-w-[150px] text-left'>Loại dịch vụ</th>
                                            <th className='p-3  bg-gray-100 box-border relative min-w-[150px] text-left'>Tiền thu hô</th>
                                            <th className='sticky z-10 right-0 border p-3 bg-gray-100 box-border min-w-[200px] text-left'>Trạng thái</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {orders?.filter((val) => {
                                            if (search == "") {
                                                return val
                                            }
                                            else if (val.information?.[1].name.toLowerCase().includes(search.toLowerCase())) {
                                                return val
                                            }
                                            else if (val.information?.[1].addressDetail?.toLowerCase().includes(search.toLowerCase())) {
                                                return val
                                            }
                                            else if (val.information?.[1].phone.includes(search)) {
                                                return val
                                            }else if(val.id?.toString().includes(search)){
                                                return val
                                            }
                                        }).map((n, index: any) => (
                                            <tr key={index}>
                                                <td className='text-center text-xs p-1.5 text-slate-400 uppercase sticky left-0 bg-white font-medium'>{n?.id}</td>
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
                                                <td className='px-3 py-2 '>{n?.note?.cod == 0 ? formatVND(n?.note?.codValue) : 'không'}</td>
                                                <td className='text-xs px-3 py-2 text-slate-400 uppercase sticky flex justify-center right-0 bg-white font-medium'>
                                                    <button type='button' onClick={() => router.push(`/admin/orders/${n?.id}`)} className='button_primary !py-1'>Chi tiết</button>

                                                    { n?.status === OrderStatus.COMPLETED && n?.isRated==false  && (               // onClick={() => setShowModal(true)}
                                                        <button className='bg-blue-500 p-2 text-white rounded ml-1' onClick={() => router.push(`/admin/rate/${n?.id}`)}>               
                                                            <span className='text-base'>Đánh giá</span>
                                                        </button>
                                                    )}
                                                </td>
                                            </tr>
                                        ))}
                                        {orders.length  < 1 && <tr><td colSpan={7} className='py-8 text-center'>Không có dữ liệu</td></tr>}
                                    </tbody>
                                </table>
                            </div>
                            <div className='mt-4 bottom-0 border rounded'>
                                <ul className='text-sm text-gray-800 h-12 p-0 ml-4 flex items-center none'>
                                    <li className='text-gray-500 inline-block h-6 mr-4 leading-5  text-base'>Tổng: {orders.length ?? 0}</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* <Modal
                title='Đánh giá đơn hàng'
                onClose={() => setShowModal(false)}
                show={showModal}
            >
                <AddRate />
            </Modal> */}
        </>
    )
}

export default OrderTracking

OrderTracking.getLayout = function getLayout(page: any) {
    return (
        <LayoutAdmin >{page}</LayoutAdmin>
    )
}
