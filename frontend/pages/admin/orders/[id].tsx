import React, { useEffect, useState } from 'react'
import Image from 'next/image';
import { useRouter } from 'next/router'
import LayoutAdmin from '../../../layouts/admin';
import { OrderStatus } from '../../../shared/enum';
import useAxios from '../../../library/useAxios';
import { Query } from '../../../shared/interface';
import { Order } from '../../../shared/order.interface';
import Logo from '../../../components/logo';
import { formatVND, toLocaleString } from '../../../library/utility';

const DetailOrder = () => {
    const router = useRouter();
    const { id } = router.query

    const [order, setOrder] = useState<Order>()

    const Statustext = (s: any) => {
        switch (s) {
            case OrderStatus.IDLE: return 'Xác nhận đơn hàng'
            case OrderStatus.ASSIGNING: return 'Đang tìm tài xế'
            case OrderStatus.ACCEPTED: return 'Đang chờ lấy hàng'
            case OrderStatus.INPROCESS: return 'Đang vận chuyển'
            case OrderStatus.COMPLETED: return 'Đã giao hàng'
            case OrderStatus.CANCELLED: return 'Đã hủy'
            default: return ''
        }
    }

    const { response, error, loading, fetchData } = useAxios();

    useEffect(() => {
        if (id) {
            try {
                fetchData(`/orders/${id}`).then((res: any) => {
                    console.log('res--->>>', res)
                    if (res?.status < 300) {
                        setOrder(res?.data)
                    }
                })
            } catch (error: any) {
                throw new Error(error)
            }
        }

    }, [id])

    const info = order?.information;
    const product = order?.product;
    const note = order?.note;

    console.log('order--->>>', order)

    return (
        <>
            <div className='px-10 py-5 bg-white rounded-md space-y-5'>
                <div className='flex justify-between'>
                    <Logo />
                    <div className='text-right'>
                        <ul>
                            <li>MÃ ĐƠN HÀNG: #<strong>{order?.id}</strong></li>
                            <li>NGÀY KHỞI TẠO: <strong>{toLocaleString(order?.createdAt ?? '')}</strong></li>
                            <li>TRẠNG THÁI ĐƠN HÀNG: <strong>{Statustext(order?.status)}</strong></li>
                        </ul>
                    </div>
                </div>
                <div className='grid grid-cols-3 gap-10'>
                    <div className='flex flex-col'>
                        <p className='text-xl font-bold'>Thông tin người gửi</p>
                        <ul className='text-sm'>
                            <li>Tên: {info?.[0].name}</li>
                            <li>SĐT: {info?.[0].phone}</li>
                            <li>Địa chỉ: {info?.[0].addressDetail} {info?.[0].address.split('/')} </li>
                            <li>Ghi chú: {info?.[0].note}</li>
                        </ul>
                    </div>
                    <div>
                        <p className='text-xl font-bold'>Thông tin người nhận</p>
                        <ul className='text-sm'>
                            <li>Tên: {info?.[1].name}</li>
                            <li>SĐT: {info?.[1].phone}</li>
                            <li>Địa chỉ: {info?.[1].addressDetail} {info?.[1].address.split('/')}</li>
                            <li>Ghi chú: {info?.[1].note}</li>
                        </ul>
                    </div>
                    <div>
                        <p className='text-xl font-bold'>Thông tin dịch vụ</p>
                        <ul className='text-sm'>
                            <li>Cho kiểm hàng: {note?.isChecked == 0 ? 'không' : 'có'}</li>
                            <li>Thanh toán cước phí: {note?.payShippingFee ? 'Người gửi trả phí' : 'Người nhận trả phí'}</li>
                            <li>Thu hộ: {formatVND(order?.note?.codValue)}</li>
                            <li>Giá trị bưu kiện: {formatVND(note?.productValue)}</li>
                        </ul>
                    </div>
                </div>
                <div className='border-y-4 border-[#333] py-2 space-y-1'>
                    <table className='table-auto w-full'>
                        <thead>
                            <tr>
                                <td className='text-left'> Sản phẩm</td>
                                <td className='text-left'>Số lượng(kg)</td>
                                <td className='text-left'>Khối lượng</td>
                            </tr>

                        </thead>
                        <tbody className='border-b-2'>
                            <tr className='text-left'>
                                <td className='text-left'>{product?.name}</td>
                                <td className='text-left'>{product?.quantity}</td>
                                <td className='text-left'>{product?.volume}</td>
                            </tr>
                        </tbody>
                    </table>
                    <div className='flex justify-end right-0'>
                        <div className='flex flex-col  w-[300px]'>
                            <span>Phí vận chuyển: {formatVND(order?.fee)}</span>
                            <span>Phí thu hộ: {formatVND((order?.note?.codValue ?? 0) * 5 / 100)}</span>
                            <span className='border-b-2 pb-1'>Mã khuyển mãi: {order?.promoCode ?? 'không có'}</span>
                            <span>Tổng tiền: {formatVND(order?.total ?? 0)}</span>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default DetailOrder

DetailOrder.getLayout = function getLayout(page: any) {
    return (
        <LayoutAdmin >{page}</LayoutAdmin>
    )
}