import { InformationCircleIcon } from '@heroicons/react/outline'
import React, { useState } from 'react'
import LayoutAdmin from '../../layouts/admin'
import Link from 'next/link';
import Image from 'next/image';
import single from '../../assets/images/order/single.svg';
import mass from '../../assets/images/order/mass.svg';
import { useFormik } from 'formik';
import { idSchema } from '../../components/supports/Validation';
import { useRouter } from 'next/router';
import useAxios from '../../library/useAxios';
import { toast } from 'react-toastify';
import { usePrincipal } from '../../library/usePrincipal';

const Index = () => {
    const router = useRouter()
    const { authentication, principal, login, logout, reset } = usePrincipal()
    const { response, error, loading, fetchData } = useAxios();
    const formik = useFormik({
        initialValues: {
            id: "",
        },
        validationSchema: idSchema,
        onSubmit: (values) => {
            if (values.id) {
                fetchData(`/orders/${values?.id}`).then((res: any) => {
                    if (res?.status < 300) {
                        router.push({ pathname: `/admin/orders/${values?.id}` })

                    } else {
                        toast.error('Không tìm thấy đơn hàng !!')
                    }
                }).catch((err) => {
                    toast.error('Không tìm thấy đơn hàng !!')
                })
            } else {
                toast.error('Không tìm thấy đơn hàng !!')
            }
        }
    });

    return (
        <>
            <div className='rounded-sm space-y-5'>
                <div className='p-8 border-l-4 border-primary mb-5 bg-white shadow'>
                    <div className='space-y-3'>
                        <h1>Chào bạn! {principal?.name} </h1>
                        <p>Cùng trải nghiệm dịch vụ vận chuyển với Delivery Xpress nhé!</p>
                        {principal && !principal?.phone && (
                            <div>
                                <div className='px-5 py-3 border-warning border bg-warning/10 flex gap-2 items-center'>
                                    <span>
                                        <InformationCircleIcon className='w-5 h-5 text-warning' />
                                    </span>
                                    <span>Để có trải nghiệm đặt hàng tốt hơn, hãy hoàn thành hồ sơ người dùng</span>
                                    <span className='text-blue-500'>
                                        <Link href='/admin/account'>
                                            <a>ở đây</a>
                                        </Link>
                                    </span>
                                </div>
                            </div>
                        )}

                        <div className='flex justify-between items-center gap-10 '>
                            <div className='w-full'>
                                <Link href='/admin/orders/create'>
                                    <a>
                                        <div className='flex px-5 items-center gap-5 w-full border h-32 hover:text-primary hover:border-primary'>
                                            <div className='w-[100px] h-[100px]'><Image alt="" src={single} width={100} height={100} layout="responsive" /></div>
                                            <div>
                                                <h4>
                                                    Tạo đơn hàng mới
                                                </h4>
                                                <span className='py-2'>
                                                    Tạo đơn theo từng bước
                                                </span>
                                            </div>
                                        </div>
                                    </a>
                                </Link>
                            </div>
                            <div className='w-full'>
                                <Link href='/admin/orders/create'>
                                    <a>
                                        <div className='flex  px-5 items-center gap-5 border h-32 hover:text-primary hover:border-primary'>
                                            <div className='w-[100px] h-[100px]'><Image alt="" src={mass} width={100} height={100} layout="responsive" /></div>
                                            <div>
                                                <h4>
                                                    Tạo nhiều đơn hàng
                                                </h4>
                                                <span className='py-2'>
                                                    Tạo nhiều đơn hàng bằng file excel
                                                </span>
                                            </div>
                                        </div>
                                    </a>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='bg-white p-6 shadow'>
                    <div>
                        <h3>Theo dõi đơn hàng</h3>
                        <div className='flex justify-center py-10'>
                            <div>
                                <form onSubmit={formik.handleSubmit}>
                                    <div className='flex gap-5 w-full items-center'>
                                        <span className=' max-w-lg w-full'>
                                            <input
                                                className='border h-10 w-full pl-5 rounded'
                                                placeholder='Nhập mã đơn hàng bạn cần tra cứu'
                                                id="id"
                                                name="id"
                                                onFocus={() => formik.setFieldValue('id', '')}
                                                onChange={formik.handleChange}
                                                value={formik.values.id}
                                            />
                                        </span>
                                        <button
                                            type='submit'
                                            className='bg-primary h-10 text-white px-3 text-center rounded whitespace-nowrap'
                                        >
                                            Tra cứu</button>
                                    </div>
                                    {formik.errors.id && (
                                        <p className='text-danger py-2'>{formik.errors.id}</p>
                                    )}
                                </form>

                                <div className='flex flex-col justify-center items-center'>
                                    <p className='pt-10 text-center'>
                                        Chỉ có thể tra cứu các đơn được tạo bời tài khoản này, hoặc có thể xem danh sách chi tiết tại
                                    </p>
                                    <span className='text-blue-500'>
                                        <Link href='/admin/orders'>
                                            <a>
                                                Quản lý đơn hàng
                                            </a>
                                        </Link>
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Index
Index.getLayout = function getLayout(page: any) {
    return (
        <LayoutAdmin >{page}</LayoutAdmin>
    )
}




