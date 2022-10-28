import LayoutManage from '../../../layouts/manage'
import React, { useEffect, useState } from 'react'
import useAxios from '../../../library/useAxios';
import { useRouter } from 'next/router'
import { Rate } from '../../../shared/rate.interface';
import { usePrincipal } from '../../../library/usePrincipal';

const DetailRate = () => {
    const router = useRouter();
    const { id } = router.query;

    const { authentication, principal, login, logout, reset } = usePrincipal()
    const [rate, setRate] = useState<Rate>()
    const { response, error, loading, fetchData } = useAxios();

    useEffect(() => {
        if (authentication) {
            fetchData(`/rates/${id}`)
            .then((res: any) => {
                if (res?.status < 300) {
                    setRate(res?.data)
                    console.log('đánh giá----------------->',res?.data)
                }
            }).catch((err) => {
                console.log('err------>', err)
            })
        }
    }, [authentication])

    return (
        <>
            <div className='overflow-auto bg-gray-100 pl-4'>
                <div className='bg-gray-100 space-y-5'>
                    <div className='px-10 py-5 bg-white rounded-md'>
                        <h4 className='text-gray-900 py-3 font-extrabold text-5xl'>
                            Chi tiết đánh giá
                        </h4>

                        <div className='overflow-auto py-5 w-full'>
                            <article className='float-left'>
                                <div className='flex'>
                                    <label className='text-2xl font-bold '>Mã đơn hàng:</label>
                                    <p className='text-2xl font-extrabold text-gray-500 pl-2'>{rate?.orderId}</p>
                                </div>
                                <div className='flex'>
                                    <label className='text-2xl font-bold'>Mã người đánh giá:</label>
                                    <span>
                                        <p className='text-2xl font-extrabold text-gray-500 pl-2'>{rate?.userId}</p>
                                    </span>
                                </div>
                                <div className='flex'>
                                    <label className='text-2xl font-bold'>Email người đánh giá:</label>
                                    <p className='text-2xl font-extrabold text-gray-500 pl-2'>{rate?.emailUser}</p>
                                </div>

                                <div className='flex'>
                                    <label className='text-2xl font-bold '>Số sao:</label>
                                    <p className='text-2xl font-extrabold text-gray-500 pl-2'>{rate?.rating}</p>
                                </div>
                                <div className=''>
                                    <label className='text-2xl font-bold'>Đánh giá:</label>
                                    <span className='text-2xl font-medium text-gray-500 pl-2'>{rate?.commentUser}</span>
                                </div>
                            </article>
                        </div>
                    </div>
                </div>
                <div className='fixed bg-white bottom-0 left-56 flex items-center h-16 right-0 shadow justify-end text-sm'>
                    <button
                        type="button"
                        onClick={() => router.back()}
                        className='bg-warning text-white text-sm border rounded relative flex justify-center items-center h-8 leading-7 font-medium text-center cursor-pointer box-border select-none align-middle mr-10 px-10 py-5'
                    >
                        Trở lại
                    </button>
                </div>
            </div>
        </>

    )
}

export default DetailRate

DetailRate.getLayout = function getLayout(page: any) {
    return (
        <LayoutManage >{page}</LayoutManage>
    )
}

